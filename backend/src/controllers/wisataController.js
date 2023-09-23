const User = require('../models/User');
const Wisata = require('../models/Wisata');
const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi');
const validator = require('../validations/Validator');
const env = require('../config/env.config');

const cekWisata = {
    name: Joi.string().required(),
    alamat: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    price: Joi.number().integer().required(),
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
        price: data.price,
        desc: data.desc,
        jenis: data.jenis,
        foto: req.file?.filename,
        user_id: req.user,
        status: 1,
    })

    newWisata.foto = env('PREFIX') + newWisata.foto;

    return res.status(201).json({message: "Wisata berhasil terdaftar", data: newWisata})
}

async function updateWisata(req, res) {
    const { id_wisata } = req.params
    const { name, alamat, latitude, longitude, price } = req.body

    const wisata = await Wisata.findByPk(id_wisata)
    if (wisata == null || wisata.status == 0) return res.status(404).json({message: "Wisata tidak ditemukan"})

    await wisata.update({
        name: name,
        alamat: alamat,
        latitude: latitude,
        longitude: longitude,
        price: price,
        foto: '/api/assets/' + req.file?.filename
    })

    wisata.foto = env('PREFIX') + wisata.foto;

    return res.status(200).json({message: "Wisata berhasil diubah!", data: wisata})
}

async function deleteWisata(req, res) {
    const { id_wisata } = req.params
    
    const wisata = await Wisata.findByPk(id_wisata)
    if (wisata == null || wisata.status == 0) return res.status(404).json({message: "Wisata tidak ditemukan"})

    await wisata.update({ status: 0 })

    return res.status(200).json({message: "Wisata berhasil dihapus!"})
}

async function fetchWisata(req, res) {
    const { name } = req.query

    const wisatas = await Wisata.findAll({ where: { name: {[Op.like]: `%${name ? name : ""}%`}, status: 1}})

    for (let i = 0; i < wisatas.length; i++) {
        const wisata = wisatas[i];
        wisatas[i].foto = env('PREFIX') + wisata.foto
    }

    return res.status(200).json({data: wisatas})
}

async function getWisata(req, res) {
    const { id_wisata } = req.params

    const wisata = await Wisata.findByPk(id_wisata)
    if (wisata == null || wisata.status == 0) return res.status(404).json({message: "Wisata tidak ditemukan"})

    wisata.foto = env('PREFIX') + wisata.foto;

    return res.status(200).json({data: wisata})
}

module.exports = {
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
}