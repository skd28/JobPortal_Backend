import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import authenticated from "../middlewears/authenticated.js"
//import isAuthenticated from "../middlewares/isAuthenticated.js";//
//import { singleUpload } from "../middlewares/mutler.js";
 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(authenticated,updateProfile);

export default router;