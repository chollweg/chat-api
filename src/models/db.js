const {MongoClient, ObjectId} = require('mongodb');

let singleton;

async function connect(){
    if(singleton) return singleton;
    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB_DATABASE);
    return singleton
}

async function findAll(collection){
    const db = await connect();
    return db.collection(collection).find().toArray();
}

async function findOne(collection, _id){
    const db = await connect();
    let obj = await db.collection(collection).find({id: _id}).toArray()
    if(obj)
        return obj[0]
    return false;
}

async function insertOne(collection, object){
    const db = await connect();
    return db.collection(collection).insertOne(object)
}

module.exports = {findAll, findOne, insertOne}