import { Router } from "express";
import ContactCotroller from "../../controllers/contact/contact.cotroller.js";

const router = new Router();

router.get('/contact', ContactCotroller.contactPage);

export default router;