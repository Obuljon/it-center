import { Router } from "express";
import Courses from "../../controllers/curses/curses.controler.js";

const router = new Router();

router.get("/courses", Courses.corsesPage);

export default router





