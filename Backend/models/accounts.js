import mongoose from "mongoose";

const accountsSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId, // reference to user model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true,

    }
})

const Account = mongoose.model("Account", accountsSchema);

export default Account;