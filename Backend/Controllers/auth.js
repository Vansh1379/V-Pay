import { signupValidation, signinValidation } from "../Services/inputValidation.js";
import User from "../models/user.js"


export const signupAuth = async (req, res, next) => {
    try {
        const createPayload = req.body;
        const parsepayload = signupValidation.safeParse(createPayload);

        if (!parsepayload.success) {
            res.status(411).json({
                msg: "Wrong Imoput Sended Bitch!"
            })
            return
        }

        // Check first Wheather user is existing or not 
        const existingUser = await User.findOne({
            username: req.body.username
        })
        if (existingUser) {
            return res.status(411).json({
                msg: "Bsdk jake login kar"
            })
        }

        // after Input Validation we will connect moongose with it 
        await User.create({
            username: createPayload.username,
            firstName: createPayload.firstName,
            lastName: createPayload.lastName,
            password: createPayload.password
        })

        res.json({
            msg: " User Created Succesfully"
        })


    } catch (e) {
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

export const signinAuth = async (req, res, next) => {
    const loginPayload = req.body;
    const parsesigninPayload = signinValidation.safeParse(loginPayload);

    if (!parsesigninPayload.success) {
        res.status(411).json({
            msg: "Wrong Imoput Sended Bitch!"
        })
        return
    }
    console.log(loginPayload.username);

    // now we will check wheather user is already signup or not 
    const user = await User.findOne({
        username: loginPayload.username,
        password: loginPayload.password,
    });
}