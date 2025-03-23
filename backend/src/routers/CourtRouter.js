import { Router } from "express";
import { createCourt, getCourt, getCourtById, updateCourt, deleteCourt } from "../controllers/CourtController";

const router = Router();

router.post("/court", createCourt); // Tạo mới Court
router.put("/court/:id", updateCourt); // Cập nhật Court theo ID
router.get("/court/:id", getCourtById); // Lấy một Court theo ID
router.get("/court", getCourt); // Lấy danh sách tất cả Court
router.delete("/court/:id", deleteCourt); // Xóa Court theo ID

export default router;
