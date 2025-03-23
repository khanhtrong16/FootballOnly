import { Router } from "express";
import { checkVerified, register, signin } from "../controllers/AuthController";

const router = Router();
router.post("/register", register);
router.post("/signin", signin);
router.get("/verify-email", checkVerified);
export default router;
