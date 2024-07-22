import { Router } from "express";
import { transferFunds, userBalance } from "../Controllers/accountAuth.js";
import authMiddleware from "../Middlewares/authMiddleware.js";

const router = Router();

router.get("/balance", authMiddleware, userBalance);
router.post("/transfer", authMiddleware, transferFunds);

export default router; 