const User = require('../models/User');
const Joi = require('joi');
const validator = require('../validations/Validator');

const cekRegister = {
    username: Joi.string().external(async (username)=>{
        // Cek Username Unique
        const users = await User.findAll({username: username});
        if (users.length > 0) return res.status(400).json({message: "Username telah dipakai!"})
    }).required(),
    password: Joi.string().required(),
    conf_pass: Joi.any().valid(Joi.ref('password')).required(),
    display_name: Joi.string().required(),
    email: Joi.string().email().external(async (email)=>{
        // Cek Username Unique
        const users = await User.findAll({email: email});
        if (users.length > 0) return res.status(400).json({message: "Email telah dipakai!"})
    }).required(),
    no_telp: Joi.string().required(),
    role: Joi.string().required(),
}
async function registerUser(req, res) {
    const data = req.body;

    // Validation Joi
    const validation = await validator(cekRegister, data)
    if (validation.message)
        return res.status(400).json({message: validation.message.replace("\"", "").replace("\"", "")})

    // Cek Username Unique
    const users = await User.findAll({username: data.username});
    if (users.length > 0) return res.status(400).json({message: "Username telah dipakai!"})

    const newUser = await User.create({
        username: data.username,
        password: data.password,
        display_name: data.display_name,
        no_telp: data.no_telp,
        role: data.role,
        status: 1
    })

    return res.status(201).json({message: "User berhasil terdaftar", data: newUser})
}

async function loginUser(req, res) {

}

async function fetchUser(req, res) {
    // const user = await User.findAll();
    return res.status(200).json("user");
}

module.exports = {
    registerUser, loginUser ,fetchUser
}

// const addUserSchema = {
//     customer_id: Joi.string().required()
// }

// export async function addUser(req, res) {
//     const data = req.body;

//     const validation = await validator(addUserSchema, data);
//     if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });

//     try {
//         const developer = await Developer.fetchByUsername(req.body.developer)

//         if(!developer){
//             return res.status(StatusCode.INTERNAL_SERVER).json({
//                 message: "Internal Server Error"
//             });
//         }
    
//         if(await User.checkCustomerID(data.customer_id, developer.developer_id) != " "){
//             return res.status(StatusCode.BAD_REQUEST).json({
//                 message: "customer_id already registered"
//             });
//         }
    
//         User.create(data.customer_id, developer.developer_id)
    
//         return res.status(StatusCode.CREATED).json({
//             customer_id: data.customer_id,
//             status: 1
//         });
        
//     } catch (error) {
//         return res.status(StatusCode.INTERNAL_SERVER).json({
//             message: "Internal server error: "
//         })
//     }
// };