import Zod from "zod";

const signupValidation = Zod.object({
    username: Zod.string().email(),
    firstName: Zod.string().max(10),
    lastName: Zod.string().max(10),
    password: Zod.string().min(3).toLowerCase(),
})

const signinValidation = Zod.object({
    username: Zod.string().email(),
    password: Zod.string().min(3),
})

const updateValidation = Zod.object({
    password: Zod.string().min(3).toLowerCase(),
    firstName: Zod.string().max(10),
    lastName: Zod.string().max(10),
})

export { signupValidation, signinValidation, updateValidation };