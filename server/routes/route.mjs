import express from "express";
import { getImage } from "../controllers/getImage.mjs";
import sendTimings from "../controllers/sendTimings.mjs";
import { getDetails } from "../controllers/getDetail.mjs";
import { getTimings } from "../controllers/getTimings.mjs";

const router = express.Router();

router.route("/ringroad/image").get(getImage);
router.route("/ringroad").get(getDetails);
router.route("/att").get(getTimings).post(sendTimings);

export default router;
