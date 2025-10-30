import express from "express";
const router = express.Router();

import { 
    renderJavaInstallationFrame,
    renderMavenInstallationFrame,
    renderEclipseInstallationFrame,
    renderJenkinsInstallationFrame
} from "../controllers/installationsController.js";

router.get("/java_installation", renderJavaInstallationFrame);
router.get("/maven_installation", renderMavenInstallationFrame);
router.get("/eclipse_installation", renderEclipseInstallationFrame);
router.get("/jenkins_installation", renderJenkinsInstallationFrame);

export default router;