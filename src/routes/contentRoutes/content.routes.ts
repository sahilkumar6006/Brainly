import { Router } from "express";
import { contentController, contentCreate } from "../../controllers/content.controller";
import { userMiddleware } from "../../middleware/auth.middleware";

const contentRoutes = Router();

contentRoutes.get("/",userMiddleware, contentController);
contentRoutes.post("/create", userMiddleware,contentCreate);

export default contentRoutes;
