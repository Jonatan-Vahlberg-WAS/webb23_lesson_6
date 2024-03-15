const mongoose = require("mongoose");
const { getRandomUser } = require("./utils/factories/userFactory");
const User = require("./models/user.model");
const Post = require("./models/post.model");

const DATABASE_PATH = "mongodb://127.0.0.1:27017/mongoose";

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

async function createPost(user, postData = {}) {
    try {
        const post = new Post({
            user,
            ...postData
        })
        const result = await post.save();
        console.log("Post created: ", result);
    } catch (error) {
        console.log("Error creating Post", error)
    }
}

//TODO: get posts
//TODO: get posts from a user

async function run() {
  await mongoose.connect(DATABASE_PATH);
  console.log("Mongoose has connected to ", DATABASE_PATH);
    // await insertUser(getRandomUser());
    // await getUsers("Helen Moore")
    // await getUser("65f43f41103bcbabae849dbe");
    await createPost("65f43f3323e0ffe0574d7164", {
      title: "Hello world from user 2",
      content: "hello world from user 2",
    });
  await mongoose.disconnect();
  console.log("Mongoose has disconnected from ", DATABASE_PATH);
}

run();
