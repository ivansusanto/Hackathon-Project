const User = require('../models/User');
const Wisata = require('../models/Wisata');
const Bundle_Item = require('../models/Bundle_Item');
const HTrans = require('../models/HTrans');
const Appointment = require('../models/Appointment');
const Bundle = require('../models/Bundle');

const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi').extend(require("@joi/date"));
const validator = require('../validations/Validator');

const cekNewTrans = {
    total: Joi.number().required(),
    bundles_id: Joi.number().integer().external(async (bundles_id)=> {
        const bundle = await Bundle.findOne({where: { id: bundles_id}})
        if (!bundle) throw new Error("Bundle tidak ditemukan")
    }),
    start_date: Joi.allow().required(),
    end_date: Joi.allow().required(),
}

async function createTrans(req, res){
    const { total, bundles_id, start_date, end_date } = req.body

    const validation = await validator(cekNewTrans, req.body);
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    const user = await User.findByPk(req.user)
    const counte = await HTrans.count();
    const urutan = counte + 1
    let dateNow = new Date(Date.now()).toISOString()
    dateNow = dateNow.substring(0, 10)
    const splitDate = dateNow.split('-')
    const invoice = "INV"+splitDate[2].toString().padStart(2, '0')+splitDate[1].toString().padStart(2, '0')+splitDate[0]+urutan.toString().padStart(3, '0');

    const newTrans = await HTrans.create({
        invoice: invoice,
        date: Date.now(),
        total: total,
        status: 1,
        user_id: user.id,
        bundles_id: bundles_id
    })

    const wisatas = await Bundle_Item.findAll({where: {id: bundles_id}})
    for (const x of wisatas) {
        const newAppoint = await Appointment.create({
            user_id: req.user,
            wisata_id: x.wisata_id,
            start_date: start_date,
            end_date: end_date,
        })
    }

    return res.status(201).json({message: "Berhasil transaksi", data: newTrans})
}

async function getStatusTrans(req, res){
    const { id_trans } = req.params
}

module.exports = {
    createTrans, getStatusTrans
}