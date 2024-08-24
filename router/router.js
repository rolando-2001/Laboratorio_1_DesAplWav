import express from "express";
import { about ,contact,index} from "../controller/controller.js";




const router = express.Router();

router.get("/", index);
router.get("/about", about);
router.get("/contact", contact) ;


export default router;
