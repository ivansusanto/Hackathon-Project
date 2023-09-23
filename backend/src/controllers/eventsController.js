const User = require('../models/User');
const Event = require('../models/Event');
const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi');
const validator = require('../validations/Validator');

const cekEvent = {
    name: Joi.string().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    foto: Joi.allow(),
    event_id: Joi.number().required().external(async (id) => {
        const event = await event.findByPk(id);
        if (!event || event.status == 0) throw new Error("event tidak ditemukan");
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
        event_id: data.event_id,
        desc: data.desc,
        status: 1,
    })

    return res.status(201).json({message: "Event berhasil terdaftar", data: newEvent})
}

async function updateEvent(req, res) {
    const { id_event } = req.params
    const { name, start_date, end_date, desc } = req.body

    const event = await Event.findByPk(id_event)
    if (event == null || event.status == 0) return res.status(404).json({message: "Event tidak ditemukan"})

    await event.update({
        name: name,
        desc: desc,
        start_date: start_date,
        end_date: end_date
    })

    return res.status(200).json({message: "Event berhasil diubah!"})
}

async function deleteEvent(req, res) {
    const { id_event } = req.params
    
    const event = await Event.findByPk(id_event)
    if (event == null || event.status == 0) return res.status(404).json({message: "Event tidak ditemukan"})

    await event.update({ status: 0 })

    return res.status(200).json({message: "Event berhasil dihapus!"})
}

async function fetchEvent(req, res) {
    const { name } = req.query

    const events = await Event.findAll({ where: { name: {[Op.like]: `%${name ? name : ""}%`}, status: 1}})

    return res.status(200).json({data: events})
}

async function getEvent(req, res) {
    const { id_event } = req.params

    const event = await Event.findByPk(id_event)
    if (event == null || event.status == 0) return res.status(404).json({message: "Event tidak ditemukan"})

    return res.status(200).json({data: event})
}

module.exports = {
    createEvent, updateEvent, deleteEvent, fetchEvent, getEvent
}