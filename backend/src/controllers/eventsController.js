const User = require('../models/User');
const Wisata = require('../models/Wisata');
const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi');
const validator = require('../validations/Validator');

const cekEvent = {
    name: Joi.string().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    foto: Joi.allow(),
    wisata_id: Joi.number().required().external(async (id) => {
        const wisata = await Wisata.findByPk(id);
        if (!wisata) throw new Error("Wisata tidak ditemukan");
    })
}

async function createEvent(req, res) {
    const data = req.body;

    // Validation Joi
    const validation = await validator(cekEvent, data)
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    const newEvent = await Event.create({
        name: data.name,
        start_date: data.start_date,
        end_date: data.end_date,
        foto: null,
        wisata_id: data.wisata_id,
        status: 1,
    })

    return res.status(201).json({message: "Event berhasil terdaftar", data: newEvent})
}

async function updateEvent(req, res) {
    const { id_event } = req.params
    const { name, start_date, end_date, longitude } = req.body

    const wisata = await Wisata.findByPk(id_wisata)
    if (wisata == null) return res.status(404).json({message: "Wisata tidak ditemukan"})

    wisata.update({
        name: name,
        alamat: alamat,
        latitude: latitude,
        longitude: longitude,
    })

    return res.status(200).json({message: "Wisata berhasil diubah!"})
}

async function deleteWisata(req, res) {
    const { id_wisata } = req.params
    
    const wisata = await Wisata.findByPk(id_wisata)
    if (wisata == null) return res.status(404).json({message: "Wisata tidak ditemukan"})

    wisata.update({ status: 0 })

    return res.status(200).json({message: "Wisata berhasil dihapus!"})
}

async function fetchWisata(req, res) {
    const { name } = req.query

    const wisatas = await Wisata.findAll({ where: { name: {[Op.like]: `%${name}%`}}})

    return res.status(200).json({data: wisatas})
}

async function getWisata(req, res) {
    const { id_wisata } = req.params

    const wisata = await Wisata.findByPk(id_wisata)
    if (wisata == null) return res.status(404).json({message: "Wisata tidak ditemukan"})

    return res.status(200).json({data: wisata})
}

module.exports = {
    createEvent, updateWisata, deleteWisata, fetchWisata, getWisata
}