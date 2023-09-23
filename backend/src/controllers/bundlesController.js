const User = require('../models/User');
const Bundle = require('../models/Bundle');
const Item = require('../models/Bundle_Item');
const { Op, QueryTypes } = require('sequelize')
const Joi = require('joi');
const validator = require('../validations/Validator');
const Wisata = require('../models/Wisata');
const Bundle_Item = require('../models/Bundle_Item');

const cekBundle = {
    name: Joi.string().required(),
    price: Joi.number().required(),
    items: Joi.array().required()
}

async function createBundle(req, res) {
    const data = req.body;

    // Validation Joi
    const validation = await validator(cekBundle, data)
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    if (data.items.length === 0) return res.status(400).json({message: "Items harus ada isinya"});
    for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        const wisata = await Wisata.findByPk(item.wisata_id);
        if (!wisata) return res.status(400).json({message:"Wisata dengan id " + item.wisata_id + " tidak ditemukan"})

        if (item.percentage < 1) return res.status(400).json({message:"Percentage harus lebih dari 0"});
        if (item.percentage > 100) return res.status(400).json({message:"Percentage maksimal 100"});
    }

    const newBundle = await Bundle.create({
        name: data.name,
        price: data.price,
        status: 1
    });
    
    for (let i = 0; i < data.items.length; i++) {
        const item = data.items[i];
        await Item.create({
            bundle_id: newBundle.id,
            wisata_id: item.wisata_id,
            percentage: item.percentage
        });
    }
    const newItems = await Item.findAll({
        where: {
            bundle_id: newBundle.id
        }
    });

    newBundle.dataValues.items = newItems;

    return res.status(201).json({message: "Bundle berhasil terdaftar", data: newBundle})
}

async function updateBundle(req, res) {
    const { id_bundle } = req.params
    const { name, price } = req.body

    const bundle = await Bundle.findByPk(id_bundle)
    if (!bundle || bundle.status == 0) return res.status(404).json({message: "Bundle tidak ditemukan"})

    const updatedData = await bundle.update({
        name: name,
        price: parseInt(price)
    })

    return res.status(200).json({message: "Bundle berhasil diubah!", data: updatedData})
}

async function deleteBundle(req, res) {
    const { id_bundle } = req.params
    
    const bundle = await Bundle.findByPk(id_bundle)
    if (bundle == null || bundle.status == 0) return res.status(404).json({message: "Bundle tidak ditemukan"})

    await bundle.update({ status: 0 })

    return res.status(200).json({message: "Bundle berhasil dihapus!"})
}

async function fetchBundle(req, res) {
    const { name } = req.query

    const bundles = await Bundle.findAll({
        where: {
            name: {[Op.like]: `%${name ? name : ""}%`},
            status: 1
        },
        include: {
            model: Item,
            include: Wisata
        }
    })

    for (let i = 0; i < bundles.length; i++) {
        const bund = bundles[i];
        
        let prev = 0;
        for (let j = 0; j < bund.dataValues.Bundle_Items.length; j++) {
            const bun = bund.dataValues.Bundle_Items[j];
            const price = bun.Wisatum.price
            prev += price
        }
        bundles[i].dataValues.normal_price = prev;
    }

    return res.status(200).json({data: bundles})
}

async function getBundle(req, res) {
    const { id_bundle } = req.params

    const bundles = await Bundle.findAll({
        where: {
            id: id_bundle,
            status: 1
        },
        include: {
            model: Item,
            include: Wisata
        }
    })

    for (let i = 0; i < bundles.length; i++) {
        const bund = bundles[i];
        
        let prev = 0;
        for (let j = 0; j < bund.dataValues.Bundle_Items.length; j++) {
            const bun = bund.dataValues.Bundle_Items[j];
            const price = bun.Wisatum.price
            prev += price
        }
        bundles[i].dataValues.normal_price = prev;
    }

    return res.status(200).json({data: bundles})
}

module.exports = {
    createBundle, updateBundle, deleteBundle, fetchBundle, getBundle
}