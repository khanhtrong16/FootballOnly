import { Router } from "express";
import {
    createCourtChild,
    getCourtChild,
    getOneCourtChild,
    updateCourtChild,
    deleteCourtChild,
    getCourtChildByCourtId,
} from "../controllers/CourtChidrent";
const routerCourtChild = Router();

routerCourtChild.post("/courtChild", createCourtChild);
routerCourtChild.get("/courtChild", getCourtChild);
routerCourtChild.get("/courtChild/:id", getOneCourtChild);
routerCourtChild.put("/courtChild/:id", updateCourtChild);
routerCourtChild.delete("/courtChild/:id", deleteCourtChild);
routerCourtChild.get("/courtChild/court/:courtId", getCourtChildByCourtId);
export default routerCourtChild;
