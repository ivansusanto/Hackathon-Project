const User = require('../models/User');
const Wisata = require('../models/Wisata');
const Joi = require('joi');
const validator = require('../validations/Validator');

const cekWisata = {
    name: Joi.string().required(),
    alamat: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    jenis: Joi.number().integer().required(),
    user_id: Joi.number().integer().external(async (user_id)=>{
        const user = await User.findByPk(user_id);
        if (user == null) throw new Error("User tidak ditemukan!")
    }).required(),
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
        user_id: data.user_id,
        status: 1,
    })

    return res.status(201).json({message: "Wisata berhasil terdaftar", data: newWisata})
}

async function updateWisata(req, res) {

}

async function deleteWisata(req, res) {
    
}

async function fetchWisata(req, res) {
    
}

async function getWisata(req, res) {
    
}

module.exports = {
    createWisata, updateWisata, deleteWisata, fetchWisata, getWisata
}