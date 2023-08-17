const salaModel = require("../models/salaModel");

exports.get = async(req,res) => {
    return await salaModel.listarSalas();
}

exports.entrar = async (idsala, iduser) => {
    const sala = await salaModel.buscarSala(idsala)
    let usuarioModel = require('../models/usuarioModel');
    let user = await usuarioModel.buscarUsuario(iduser)
    console.log(user);
    user.sala = {_id:sala.id, nome: sala.nome, tipo: sala.tipo}
}
