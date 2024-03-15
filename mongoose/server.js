const mongoose = require("mongoose");
const { getRandomUser } = require("./utils/factories/userFactory");

const DATABASE_PATH = "mongodb://127.0.0.1:27017/mongoose";

const User = mongoose.model("User", {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  isTeacher: { type: Boolean, required: false },
});

async function insertUser(userData = {}) {
  const user = new User(userData);

  try {
    const result = await user.save();
    console.log("User created: ", result);
  } catch (error) {
    console.log("ERROR: user not created", error);
  }
}


async function getUsers(name = "") {
    try {
        let filter = {}
        if (name) {
            filter.name = name
        }
        const users = await User.find(filter);
        console.log("Users:", users)
        return users
    } catch (error) {
        console.log("Error: getting users", error)
    }
}

//TODO: get user by id or ObjectId
async function getUser(id = "") {
  try {
    const user = await User.findById(id)
      if (!user) {
        throw new Error("User not found")
    }
      console.log("User:", user);
    return user;
  } catch (error) {
    console.log("Error: getting users", error);
  }
}

async function run() {
  await mongoose.connect(DATABASE_PATH);
  console.log("Mongoose has connected to ", DATABASE_PATH);
    // await insertUser(getRandomUser());
    // await getUsers("Helen Moore")
    await getUser("65f43f41103bcbabae849dbe");
  await mongoose.disconnect();
  console.log("Mongoose has disconnected from ", DATABASE_PATH);
}

run();
