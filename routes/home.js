import express from "express";
const router = express.Router();

import { renderHome } from "../controllers/homeController.js";

router.get("/", renderHome);

export default router;