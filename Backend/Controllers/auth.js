import signupValidation from "../Services/inputValidation.js"
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

        // after Input Validation we will connect moongose with it 
        await User.create({
            username: createPayload.username,
            firstName: createPayload.firstName,
            lastName: createPayload.lastName,
            password: createPayload.password
        })

        res.json({
            mag: " User Created Succesfully"
        })


    } catch (e) {
        res.status(500).json({
            msg: "Internal Server Error"
        });
    }
}

export const login = (req, res, next) => {

}