import mongoose from "mongoose";

// User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    }
});


const User = mongoose.model("User", UserSchema);

export default User;
