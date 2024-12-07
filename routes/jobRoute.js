import express from "express";
import authenticated from "../middlewears/authenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/jobController.js";

const router = express.Router();

router.route("/post").post(authenticated, postJob);
router.route("/get").get(getAllJobs);
router.route("/getadminjobs").get(authenticated, getAdminJobs);
router.route("/get/:id").get( getJobById);

export default router;

