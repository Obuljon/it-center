import { Router } from "express";
import Courses from "../../controllers/curses/curses.controler.js";

const router = new Router();

router.get("/courses", Courses.coursesPage);
router.get("/coursesadd", Courses.coursesAdd);

export default router





