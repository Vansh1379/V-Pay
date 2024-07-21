import { Router } from "express";
import { signupAuth } from "../Controllers/auth.js";

const router = Router();

router.post("/signup", signupAuth);

export default router;