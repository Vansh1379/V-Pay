import mongoose from "mongoose";
import User from "../models/user.js";
import Account from "../models/accounts.js";


export const userBalance = async (req, res, next) => {
    try {
        const userID = req.userId;
        const account = await User.findById({
            _id: userID
        });

        console.log(account, "user account detail account controler");

        res.status(200).json({
            balance: account.balance,
        })
    }
    catch (e) {
        res.status(500).json({
            msg: "The user Does not exist in account database"
        })
        console.log(e, "The error in UserBalance controller");
    }
}

// ..............................................................................................................................

export const transferFunds = async (req, res, next) => {
    try {
        // first we will start the session
        const session = await mongoose.startSession();

        // then we will initialize the transaction
        session.startTransaction();
        // and fetch the amunt and reciver id 
        const { amount, to } = req.body;

        // we will check wheather the the user sending money exists or not 
        const userID = req.userId;
        const account = await Account.findOne({
            userID
        }).session(session);
        // .session(session) meand that to continue the process or the process is not ended

        // we will check wheather the the user sending money have sufficient balance or not  
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                msg: "Insuffient Balance or user does not exist in database"
            })
        }

        // we will check whether the reciver is present or not 
        const amountTo = await Account.findOne({
            to
        }).session(session);

        // if the reciver is not present then we will simply abort the tramsaction / session
        if (!amountTo) {
            await session.abortTransaction();
            res.status(400).json({
                msg: "Invalid account || account does not exist"
            })
        }

        // we will update the sender account and will decrese the amount from it 
        await Account.updateOne({
            userID
        }, {
            $inc: {
                balance: -amount
            }
        }).session(session);

        // we will update the reciver balance and will add the money to it 
        await Account.updateOne({
            to
        }, {
            $inc: {
                balance: amount
            }
        })

        // one the transaction is done then we will commit the transaction and then the session will end 
        await session.commitTransaction();

        res.json({
            msg: "Payment Tranfered Successfully"
        })
    }
    catch (e) {
        res.status(500).json({
            msg: "Internal Server Error cannot procced with with your transaction"
        })
        console.log(e, "transaction error");
    }
}