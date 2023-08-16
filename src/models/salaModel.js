// function listarSalas(){
//     return [
//     {
//         "_id": {
//             "$oid": "342352353251236",
//         },
//         "nome": "Guerreiros da InfoCimol",
//         "tipo": "publica"
//     },
//     {
//         "_id": {
//             "$oid": "241421412442136",
//         },
//         "nome": "Só os confirmados",
//         "tipo": "publica",
//         "chave": "pr2424i22"
//     },
//     {
//         "_id": {
//             "$oid": "342352353251236",
//         },
//         "nome": "Teste 3",
//         "tipo": "publica"
//     },
// ]
// }

const db = require('./db');
async function listarSalas(){
    return await db.findAll("salas");
}

module.exports = {listarSalas}