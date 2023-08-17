const db = require('../models/db');

async function registrarUsuario(nick){
    return await db.insertOne("usuarios", {"nick": nick})
}

async function buscarUsuario(idUser){
    return await db.findOne("usuarios", idUser)
}

module.exports = {registrarUsuario, buscarUsuario}