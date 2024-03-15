const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/test6";
const client = new MongoClient(uri)

async function connect() {
    try {
        await client.connect()
        console.log("Connected to ", uri)
    } catch (error) {
        console.log("ERROR: connecting to ", uri, error)
    }
}

async function insertUser(user) {
    try {
        //Access collection
        const database = client.db('test6')
        const collection = database.collection('users')
        

        //Insert user
        const result = await collection.insertOne(user)
        console.log("User has been inserted at users/", result.insertedId)
    } catch (error) {
        console.log("User not inserted")
    }
}

//TODO: get users

//TODO: update user

async function main() {
    await connect()
    // await insertUser({
    //     name: "Jonatan",
    //     age: 26,
    //     isTeacher: true
    // })
    // await client.db("test6").collection("users").deleteMany()
    client.close()
}

main()