const User = require('../models/User');
const Wisata = require('../models/Wisata');
const Item = require('../models/Item');
const HTrans = require('../models/HTrans');
const Appointment = require('../models/Appointment');
const Bundle = require('../models/Bundle');

const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi');
const validator = require('../validations/Validator');

async function createTrans(req, res){
    
}

async function getStatusTrans(req, res){
    const { id_trans } = req.params
}

module.exports = {
    createTrans, getStatusTrans
}