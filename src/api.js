const express = require('express');
const app = express();
const token = require('../src/util/token');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = express.Router();

app.use('/', router.get("/", (req, res) => {
    res.status(200).send("<h1>API - CHAT </h1>")
}))

app.use("/", router.get("/sobre",(req, res, next) => {
    res.status(200).send({
        "nome": "API - CHAT",
        "versão": "0.1.0",
        "autor": "Cássio Hollweg"
    })
}));

app.use("/", router.get("/salas", async (req, res, next) => {
    const salaController = require('./controllers/salaController');
    let resp = await salaController.get();
    res.status(200).send(resp);
}))

app.use("/", router.post("/entrar", async (req, res, next) => {
    const usuarioController = require('./controllers/usuarioController')
    let resp = await usuarioController.entrar(req.body.nick)
    res.status(200).send(resp)
}))

app.use("/", router.put("/sala/entrar", async (req, res, next) => {
    if(!token.checktoken(req.headers.token, req.headers.iduser, req.headers.nick))
    return false
    const db = require('../src/models/db')
    const user = {
        iduser: req.headers.iduser,
        sala: req.headers.sala,
        nick: req.headers.nick
    }
    let resp = await db.findOne("salas", user)
    res.status(200).send(resp)
}))

module.exports = app