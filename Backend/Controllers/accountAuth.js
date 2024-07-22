import User from "../models/user";


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

export const transferFunds = async (req, res, next) => {

}