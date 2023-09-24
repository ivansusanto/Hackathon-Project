const User = require('../models/User');
const Wisata = require('../models/Wisata');
const Bundle_Item = require('../models/Bundle_Item');
const HTrans = require('../models/HTrans');
const Appointment = require('../models/Appointment');
const Bundle = require('../models/Bundle');

const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi').extend(require("@joi/date"));
const env = require("../config/env.config");
const axios = require('axios');
const validator = require('../validations/Validator');

async function createTrans(req, res){
    let { bundles_id, wisata_id, start_date, end_date } = req.body
    
    const user = await User.findByPk(req.user)
    const counte = await HTrans.count();
    const urutan = counte + 1
    let dateNow = new Date(Date.now()).toISOString()
    dateNow = dateNow.substring(0, 10)
    const splitDate = dateNow.split('-')
    const invoice = "INV"+splitDate[2].toString().padStart(2, '0')+splitDate[1].toString().padStart(2, '0')+splitDate[0]+urutan.toString().padStart(3, '0');
    
    let amount = 0;
    if (!bundles_id && wisata_id){
        const wisata = await Wisata.findByPk(wisata_id)
        if (!wisata) return res.status(404).json({message: "Wisata tidak ditemukan!"})
        amount = wisata.price
        const newTrans = await HTrans.create({
            invoice: invoice,
            date: Date.now(),
            total: wisata.price,
            status: 2,
            user_id: user.id,
            bundles_id: null,
            wisata_id: wisata.id,
        })

        const newAppoint = await Appointment.create({
            user_id: req.user,
            wisata_id: wisata_id,
            start: start_date,
            end: end_date,
        })
    }else if (!wisata_id && bundles_id){
        const bundle = await Bundle.findByPk(bundles_id)
        if (!bundle) return res.status(404).json({message: "Bundle tidak ditemukan!"})
        amount = bundle.price
        const newTrans = await HTrans.create({
            invoice: invoice,
            date: Date.now(),
            total: bundle.price,
            status: 2,
            user_id: user.id,
            bundles_id: bundles_id,
            wisata_id: null,
        })

        const wisatas = await Bundle_Item.findAll({where: {bundle_id: bundles_id}})
        for (const x of wisatas) {
            const newAppoint = await Appointment.create({
                user_id: req.user,
                wisata_id: x.wisata_id,
                start: start_date,
                end: end_date,
            })
        }
    }else return res.status(400).json({message: "Invalid input!"})

    // Midtrans SNAP
    const option = {
        method: 'POST',
        url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
        headers: {accept: 'application/json', 'content-type': 'application/json',
            authorization: 'Basic '+Buffer.from(env("SERVER_KEY")).toString("base64")
        },
        data: {
            transaction_details: {
                order_id: invoice,
                gross_amount: amount,
            },
            // callbacks: { finish: 'http://localhost:5173/'}
        }
    }
    await axios.request(option).then( async (response)=>{
        return res.status(200).json({token: response.data.token})
    })
}

async function getStatusTrans(req, res){
    const { inv } = req.params
    
    const options = {
        method: 'GET',
        url: `https://api.sandbox.midtrans.com/v2/${inv}/status`,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Basic ' + Buffer.from(env("SERVER_KEY")).toString("base64")
        }
    };

    axios.request(options).then(async response => {
        return res.status(200).json({
            invoice: data.invoice,
            transaction_status: response.data.transaction_status,
        })
    }).catch(err => {
        return res.status(502).json(err.message)
    })


    // const trans = await HTrans.findOne({where: {invoice: inv}})
    // if (!trans) return res.status(404).json({message: "Transaksi tidak ditemukan!"})

    // let stats = "PENDING"
    // if (trans.status == 1) stats = "SUKSES"; else if (trans.status == 0) stats = "GAGAL"
    // return res.status(200).json({
    //     invoice: trans.invoice,
    //     total: trans.total,
    //     status: stats
    // })
}

async function updateTrans(req, res){
    const { transaction_status, order_id } = req.body;

    if (!transaction_status || !order_id) return res.status(403).json({ message: `Forbidden` });
    
    let status = transaction_status === 'settlement' ? 1 : transaction_status === 'pending' ? 2 : 0;
    const trans = await HTrans.findOne({where: {invoice: order_id}});

    await trans.update({status: status})

    if (status == 1){
        // Fase Production
        // Payouting();
    }

    return res.status(200).json({ message: 'Ok' });
}

async function Payouting(){
    let payouts = []
    if (trans.bundles_id != null){
        const wisatas = await Bundle_Item.findAll({where: {bundle_id: trans.bundles_id}});
        for (const x of wisatas) {
            const pemilik = await User.findByPk(trans.user_id);
            let amount = trans.total * (x.percentages/100)
            payouts.push({
                "beneficiary_name": pemilik.display_name,
                "beneficiary_account": pemilik.no_rek,
                "beneficiary_bank": "bca",
                "beneficiary_email": pemilik.email,
                "amount": amount,
                "notes": "-"
            })
        }
    }else if (trans.wisata_id != null){
        const pemilik = await User.findByPk(trans.wisata_id);
        payouts.push({
            "beneficiary_name": pemilik.display_name,
            "beneficiary_account": pemilik.no_rek,
            "beneficiary_bank": "bca",
            "beneficiary_email": pemilik.email,
            "amount": trans.total,
            "notes": "-"
        })
    }

    const option = {
        method: 'POST',
        url: "https://api.sandbox.midtrans.com/api/v1/payouts",
        headers: {accept: 'application/json', 'content-type': 'application/json',
            authorization: 'Basic '+Buffer.from(env("SERVER_KEY")).toString("base64")
        },
        body: payouts
    }
    
    await axios.request(option).then(async (response) => {       
        return res.status(201).json({
            message: "Payouts berhasil!"
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).json({message: err.message})
    })
}

async function fetchTrans(req, res){
    const master = await User.findByPk(req.user)
    if (master.role != 0) return res.status(400).json({message: "Unauthorized"})

    const transs = HTrans.findAll()
    return res.status(200).json({data: transs})
}

module.exports = {
    createTrans, getStatusTrans, updateTrans, fetchTrans
}