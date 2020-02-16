var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function get() {
    return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db("domains")
            const ilCollection = db.collection('co.il').find();

            resolve(await ilCollection.toArray());
            client.close();
        } catch (ex) {
            reject(ex);
        }
    })
}

function getOne(id) {
    return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db("domains")
            const item = db.collection('co.il').findOne({ _id: id });

            resolve(item);
            client.close();
        } catch (ex) {
            reject(ex);
        }
    })
}


function update(id, entity) {
    return new Promise(async (resolve, reject) => {
        const client = new MongoClient(url);
        try {
            await client.connect();
            const db = client.db("domains")
            const item = db.collection('co.il').findOneAndReplace({ _id: id }, entity);

            resolve(item);
            client.close();
        } catch (ex) {
            reject(ex);
        }
    })
}
// get().then(res => console.log(res));
// getOne('ckmisrael.co.il').then(res => console.log(res));

module.exports = {
    get: get,
    getOne: getOne,
    update: update
}
