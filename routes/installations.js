import express from "express";
const router = express.Router();

import { renderJavaInstallationFramework } from "../controllers/installationsController.js";

router.get("/java_installation", renderJavaInstallationFramework);

export default router;