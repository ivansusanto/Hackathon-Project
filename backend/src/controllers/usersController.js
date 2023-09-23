const User = require('../models/User');
const Joi = require('joi');
const validator = require('../validations/Validator');
const generateHashedPassword = require('../utils/Bcrypt');
const generateToken = require('../utils/JWT');
const bcrypt = require('bcrypt');
const { Op, QueryTypes } = require('sequelize')

const cekRegister = {
    username: Joi.string().external(async (username)=>{
        // Cek Username Unique
        const users = await User.findOne({where: {username: username}});
        if (users) throw new Error("Username telah dipakai!")
    }).required(),
    password: Joi.string().required(),
    conf_pass: Joi.any().valid(Joi.ref('password')).required(),
    display_name: Joi.string().required(),
    email: Joi.string().email().external(async (email)=>{
        // Cek Username Unique
        const users = await User.findOne({where: {email: email}});
        if (users) throw new Error("Email telah dipakai!")
    }).required(),
    no_telp: Joi.string().required(),
    role: Joi.string().required(),
}

const cekLogin = {
    username: Joi.string().required().external(async (username) => {
        const users = await User.findOne({where: {username: username}});
        if (!users) throw new Error("Username tidak ditemukan!")
    }),
    password: Joi.string().required()
}



async function registerUser(req, res) {
    const data = req.body;

    // Validation Joi
    const validation = await validator(cekRegister, data)
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    const newUser = await User.create({
        username: data.username,
        password: generateHashedPassword(data.password),
        display_name: data.display_name,
        no_telp: data.no_telp,
        role: data.role,
        email: data.email,
        status: 1
    })

    return res.status(201).json({message: "User berhasil terdaftar", data: newUser})
}

async function loginUser(req, res) {
    const data = req.body;

    // Validation Joi
    const validation = await validator(cekLogin, data)
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    const users = await User.findOne({where: {username: data.username}})

    if (!bcrypt.compareSync(data.password, users.password)) return res.status(400).json({message: "Password salah!"});

    const token = generateToken({
        username: users.username
    }, 3600)

    return res.status(200).json({message: "berhasil login", token: token, data: users});
}

async function fetchUser(req, res) {
    const master = await User.findByPk(req.user)
    if (master.role != 0) return res.status(400).json({message: "Unauthorized"})

    const users = await User.findAll({where: {
        [Op.and]: [
            { status: 1 },
            { role: {[Op.not]: 0} }
        ]
    }})

    return res.status(200).json({users: users});
}

async function getUser(req, res) {
    const master = await User.findByPk(req.user)
    if (master.role != 0) return res.status(400).json({message: "Unauthorized"})

    const { user_id } = req.params
    const user = await User.findByPk(user_id)
    if (user.role != 0) return res.status(400).json({message: "Unauthorized"})

    return res.status(200).json({user: user});
}

async function updateUser(req, res) {
    const master = await User.findByPk(req.user)
    if (master.role != 0) return res.status(400).json({message: "Unauthorized"})

    const { user_id } = req.params
    const { display_name, no_telp, email, no_rek } = req.body    
    const user = await User.findByPk(user_id)
    user.update({
        display_name: display_name,
        no_telp: no_telp,
        email: email, 
        no_rek: no_rek
    })
    user.reload()
    return res.status(201).json({message: "User berhasil diubah!", data: user})
}

async function getOwnUser(req, res) {
    const user = await User.findByPk(req.user)
    return res.status(200).json({user: user});
}

async function updateOwnUser(req, res) {
    const { display_name, no_telp } = req.body
    const user = await User.findByPk(req.user)
    await user.update({
        display_name: display_name,
        no_telp: no_telp,
    })
    user.reload()
    return res.status(201).json({message: "User berhasil diubah!", data: user})
}

module.exports = {
    registerUser, loginUser , fetchUser, getUser, updateUser, getOwnUser, updateOwnUser
}