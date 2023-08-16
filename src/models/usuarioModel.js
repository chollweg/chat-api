const db = require('../models/db');

async function registrarUsuario(nick){
    return await db.insertOne("usuarios", {"nick": nick})
}

let buscarUsuario = async (idUser) => {
    let user = db.findOne("usuarios", idUser)
}

module.exports = {registrarUsuario}