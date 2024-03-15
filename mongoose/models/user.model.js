const { Schema, model} = require("mongoose")

//User schema 
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    age: { type: Number, min: 18, max: 121 }
}, {
    timestamps: true
});

//User model

const User = model("User", userSchema)

module.exports = User;