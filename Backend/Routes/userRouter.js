import { Router } from "express";
import { signinAuth, signupAuth } from "../Controllers/auth.js";

const router = Router();

router.post("/signup", signupAuth);
router.post("/signin", signinAuth);

export default router;