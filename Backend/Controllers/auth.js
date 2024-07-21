import { signupValidation } from "../Services/inputValidation.js"


export const signupAuth = async (req, res, next) => {
    try {
        const createPayload = req.body;
        const parsepayload = signupValidation.safeParse(createPayload);
        
        if(!parsepayload.success){
            res.status(411).json({
                msg: "Wrong Imoput Sended Bitch!"
            })
            return
        }

        // after Input Validation we will connect moongose with it 
        
    } catch (e) {

    }
}

export const login = (req, res, next) => {

}