import { Router } from "express";
import home from "../controllers/home.controller.js";

const router = new Router();

router.get('/', home.homePage);

export default router