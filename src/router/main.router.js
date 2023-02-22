import { Router } from "express";
import Main from "../controllers/main.controller.js";
const router = new Router();

router.get("/" , Main.homePage)
router.get("/courses" , Main.coursesPage)
router.get("/pricing" , Main.pricingPage);
router.get("/contact" , Main.contactPage);

export default router









