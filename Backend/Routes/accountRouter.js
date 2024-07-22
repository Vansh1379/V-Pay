import { Router } from "express";
import { userBalance } from "../Controllers/accountAuth";
import authMiddleware from "../Middlewares/authMiddleware";

const router = Router();

router.get("/balance", authMiddleware, userBalance);
router.post("transfer", authMiddleware,);

export default router; 