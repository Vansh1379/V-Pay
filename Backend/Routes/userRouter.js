import { Router } from "express";
import { signinAuth, signupAuth, updateAuth } from "../Controllers/auth.js";
import authMiddleware from "../Middlewares/authMiddleware.js";

const router = Router();

router.post("/signup", signupAuth);
router.post("/signin", signinAuth);
router.put("/", authMiddleware, updateAuth);
router.get('/bulk', )

export default router;