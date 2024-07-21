import { Router } from "express";
import { signupAuth } from "../Controllers/auth";

const router = Router();

router.post("signup", signupAuth);
router.post("signin", )

export default router;