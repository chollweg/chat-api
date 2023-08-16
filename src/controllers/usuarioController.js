const usuarioModel = require('../models/usuarioModel');
const token = require ('../util/token');

exports.entrar = async (nick) => {
    let resp = await usuarioModel.registrarUsuario(nick)
    console.log(resp)
    
    if(resp.insertedId){
        return {
            "idUser": resp.insertedId,
            "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ''), nick),
            "nick": nick
        }
    }
}
