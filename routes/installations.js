import express from "express";
const router = express.Router();

import { renderJavaInstallationFrame } from "../controllers/installationsController.js";
import { renderMavenInstallationFrame } from "../controllers/installationsController.js";

router.get("/java_installation", renderJavaInstallationFrame);
router.get("/maven_installation", renderMavenInstallationFrame);

export default router;