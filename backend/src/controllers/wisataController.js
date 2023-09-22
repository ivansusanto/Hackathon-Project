const User = require('../models/User');
const Wisata = require('../models/Wisata');
const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi');
const validator = require('../validations/Validator');

const cekWisata = {
    name: Joi.string().required(),
    alamat: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    jenis: Joi.number().integer().required(),
    foto: Joi.allow(),
}

async function createWisata(req, res) {
    const data = req.body;

    // Validation Joi
    const validation = await validator(cekWisata, data)
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    const newWisata = await Wisata.create({
        name: data.name,
        alamat: data.alamat,
        latitude: data.latitude,
        longitude: data.longitude,
        jenis: data.jenis,
        foto: null,
        user_id: req.user,
        status: 1,
    })

    return res.status(201).json({message: "Wisata berhasil terdaftar", data: newWisata})
}

async function updateWisata(req, res) {
    const { id_wisata } = req.params
    const { name, alamat, latitude, longitude } = req.body

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
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
}