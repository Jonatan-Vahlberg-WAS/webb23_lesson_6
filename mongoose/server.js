const mongoose = require("mongoose");

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

//TODO: get all users
//TODO: get all users with name [NAME]
//TODO: get user by id or ObjectId

async function run() {
  await mongoose.connect(DATABASE_PATH);
    console.log("Mongoose has connected to ", DATABASE_PATH);
    await insertUser({
        name: "Jonatan",
        age: "26",
        isTeacher: true
    })
  await mongoose.disconnect();
  console.log("Mongoose has disconnected from ", DATABASE_PATH);
}

run();
