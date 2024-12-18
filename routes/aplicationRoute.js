import express from "express";
import authenticated from "../middlewears/authenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/aplicationController.js";
 
const router = express.Router();

router.route("/apply/:id").post(authenticated, applyJob);
router.route("/get").get(authenticated, getAppliedJobs);
router.route("/:id/applicants").get(authenticated, getApplicants);
router.route("/status/:id/update").post(authenticated, updateStatus);
 

export default router;

