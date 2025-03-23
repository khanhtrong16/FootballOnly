import { Router } from "express";
import { getUserById, getAllUsers, createUser, updateUser, deleteUser } from "../controllers/UserController";

const routerUser = Router();

routerUser.get("/user", getAllUsers); // Lấy danh sách tất cả User
routerUser.get("/user/:id", getUserById); // Lấy một User theo ID
routerUser.post("/user", createUser); // Tạo mới User
routerUser.put("/user/:id", updateUser); // Cập nhật User theo ID
routerUser.delete("/user/:id", deleteUser); // Xóa User theo ID

export default routerUser;
