const User = require('../models/User');
const Wisata = require('../models/Wisata');
const Bundle_Item = require('../models/Bundle_Item');
const HTrans = require('../models/HTrans');
const Appointment = require('../models/Appointment');
const Bundle = require('../models/Bundle');

const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi').extend(require("@joi/date"));
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
    
    if (!bundles_id && wisata_id){
        const wisata = await Wisata.findByPk(wisata_id)
        if (!wisata) return res.status(404).json({message: "Wisata tidak ditemukan!"})

        const newTrans = await HTrans.create({
            invoice: invoice,
            date: Date.now(),
            total: wisata.price,
            status: 1,
            user_id: user.id,
            bundles_id: null
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
        
        const newTrans = await HTrans.create({
            invoice: invoice,
            date: Date.now(),
            total: bundle.price,
            status: 1,
            user_id: user.id,
            bundles_id: bundles_id
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

    return res.status(201).json({message: "Berhasil melakukan transaksi!"})
}

async function getStatusTrans(req, res){
    const { id_trans } = req.params
}

module.exports = {
    createTrans, getStatusTrans
}