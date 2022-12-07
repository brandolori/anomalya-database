import pkg from 'mongodb'
const { MongoClient } = pkg


import { readFile } from 'fs/promises'
const file = await readFile('./data/5e-SRD-Equipment.json')
const data: any[] = JSON.parse(file.toString())

const uri =
    "mongodb://127.0.0.1:27017"
const client = new MongoClient(uri)
await client.connect()
const database = client.db('anomalya')
const equipment = database.collection('equipment')

console.log("droppo")

try {
    await equipment.drop()
} catch (e) { }

console.log("carico")

await equipment.insertMany(data)

client.close()

