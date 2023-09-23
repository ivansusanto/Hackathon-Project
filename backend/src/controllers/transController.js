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
    const { bundles_id, wisata_id, start_date, end_date } = req.body
    
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
        // const newTrans = await HTrans.create({
        //     invoice: invoice,
        //     date: Date.now(),
        //     total: wisata.price,
        //     status: 2,
        //     user_id: user.id,
        //     bundles_id: null
        // })

        // const newAppoint = await Appointment.create({
        //     user_id: req.user,
        //     wisata_id: wisata_id,
        //     start: start_date,
        //     end: end_date,
        // })
    }else if (!wisata_id && bundles_id){
        const bundle = await Bundle.findByPk(bundles_id)
        if (!bundle) return res.status(404).json({message: "Bundle tidak ditemukan!"})
        amount = bundle.price
        // const newTrans = await HTrans.create({
        //     invoice: invoice,
        //     date: Date.now(),
        //     total: bundle.price,
        //     status: 2,
        //     user_id: user.id,
        //     bundles_id: bundles_id
        // })

        const wisatas = await Bundle_Item.findAll({where: {bundle_id: bundles_id}})
        for (const x of wisatas) {
            // const newAppoint = await Appointment.create({
            //     user_id: req.user,
            //     wisata_id: x.wisata_id,
            //     start: start_date,
            //     end: end_date,
            // })
        }
    }else return res.status(400).json({message: "Invalid input!"})

    // Midtrans
    const option = {
        method: 'POST',
        url: "https://api.sandbox.midtrans.com/v2/charge",
        headers: {accept: 'application/json', 'content-type': 'application/json',
            authorization: 'Basic '+Buffer.from(env("SERVER_KEY")).toString("base64")
        },
        data: {
            payment_type: 'bank_transfer',
            transaction_details: {
                order_id: invoice,
                gross_amount: amount,
            },
            bank_transfer: {bank: 'BCA'},
            customer_details: {
                first_name: user.display_name,
                email: user.email,
                phone: user.no_telp
            }
        }
    }
    
    await axios.request(option).then(async (response) => {
        // console.log(response);
        // let va_number;
        // if (data.bank_transfer == 'permata')
        //     va_number = response.data.permata_va_number
        // else 
        //     va_number = response.data.va_number[0].va_number

        return res.status(201).json({
            invoice: invoice,
            bank: "BCA",
            transaction_status: 'pending'
        })
    }).catch(err => {
        console.log(err);
        return res.status(400).json({message: err.message})
    })
}

async function getStatusTrans(req, res){
    const { id_trans } = req.params
}

module.exports = {
    createTrans, getStatusTrans
}