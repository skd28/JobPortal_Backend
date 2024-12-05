import express from "express";
import authenticated from "../middlewears/authenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/companyController.js";
import { singleUpload } from "../middlewears/multer.js";

const router = express.Router();

router.route("/register").post(authenticated,registerCompany);
router.route("/get").get(authenticated,getCompany);
router.route("/get/:id").get(authenticated,getCompanyById);
router.route("/update/:id").put(authenticated,singleUpload,updateCompany);

export default router;

