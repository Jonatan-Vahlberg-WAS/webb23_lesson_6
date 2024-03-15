const { MongoClient, ObjectId } = require('mongodb');

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

function getUserCollection() {
    return client.db("test6").collection("users")
}

async function insertUser(user) {
    try {
        //Access collection
        const collection = getUserCollection()
        
        //Insert user
        const result = await collection.insertOne(user)
        console.log("User has been inserted at users/", result.insertedId)
    } catch (error) {
        console.log("User not inserted")
    }
}

async function getUsers() {
    const userCollection = getUserCollection()

    //Get many => find
    const users = await userCollection.find().toArray()
    console.log("Users", users)

}

async function getUser(objectid = "") {
    const userCollection = getUserCollection();
    console.log("objectid", objectid)
    const user = await userCollection.findOne({
        _id: new ObjectId(objectid)
    })
    console.log("User: ", user)
}

async function updateUser(objectid = "", updatedUser) {
  const userCollection = getUserCollection();
    const user = await userCollection.findOneAndUpdate(
      {
        _id: new ObjectId(objectid),
      },
      {
        $set: updatedUser,
      }
    );
  console.log("User: ", user);
}

//TODO: update user

async function main() {
    await connect()
    // await insertUser({
    //     name: "Alex",
    //     age: 31,
    //     isTeacher: true
    // })
    // await getUsers()
    // await getUser("65f41f3fa086853254a0649f");
    await updateUser("65f41f3fa086853254a0649f", {
        name: "Alexander"
    });
    // await client.db("test6").collection("users").deleteMany()
    client.close()
}

main()