import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import authenticated from "../middlewears/authenticated.js";

import { singleUpload } from "../middlewears/multer.js";
 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update").post(authenticated,singleUpload,updateProfile);

export default router;