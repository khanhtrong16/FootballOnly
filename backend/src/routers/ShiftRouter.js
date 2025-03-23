import { Router } from "express";
import { createShift, getOneShift, updateShift, deleteShift, getAllShifts } from "../controllers/Shift";

const routerShift = Router();

routerShift.post("/shift", createShift); // Tạo mới Shift
routerShift.get("/shift", getAllShifts); // Lấy danh sách tất cả Shift
routerShift.get("/shift/:id", getOneShift); // Lấy một Shift theo ID
routerShift.put("/shift/:id", updateShift); // Cập nhật Shift theo ID
routerShift.delete("/shift/:id", deleteShift); // Xóa Shift theo ID

export default routerShift;
