import express from "express";
const router = express.Router();

import { renderTestngFramework } from "../controllers/seleniumJavaController.js";

router.get("/testng_framework", renderTestngFramework);

export default router;