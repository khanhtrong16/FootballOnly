import express from "express";
import mongoose from "mongoose";
import routerCourt from "./routers/CourtRouter";
import routerAuth from "./routers/AuthRouter";
import routerUser from "./routers/UserRouter";
import env from "dotenv";
import cors from "cors";
import routerShift from "./routers/ShiftRouter";
import routerCourtChild from "./routers/CourtChildRouter";
const app = express();
app.use(express.json());
env.config();
app.use(cors());
// Kết nối db
// mongoose.connect(`mongodb://localhost:27017/${process.env.Name_DB}`);
mongoose.connect(`mongodb+srv://khanhden005:khanhden@cluster0.v1c6s.mongodb.net/projectBooking?retryWrites=true&w=majority&appName=Cluster0`);

app.use("/api", routerCourt);
app.use("/api", routerAuth);
app.use("/api", routerUser);
app.use("/api", routerShift);
app.use("/api", routerCourtChild);

// routers

export const viteNodeApp = app;
