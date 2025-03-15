import Router from "express";
import { shareLink, shareLinkcreate } from "../../controllers/link.controller";
import { userMiddleware } from "../../middleware/auth.middleware";


const shareRoutes = Router();

shareRoutes.post("/",userMiddleware,  shareLinkcreate);
shareRoutes.post("/:shareLink", shareLink );


export default shareRoutes;