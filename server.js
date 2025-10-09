import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import homeRoute from "./routes/home.js";
import seleniumJavaRoute from "./routes/selenium.js";
import { logger } from "./middleware/logger.js";
import { underConstruction } from "./middleware/errorHandlers.js";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

// SECURITY HEADERS
app.use(helmet());
// CSP header global
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "script-src 'self' https://unpkg.com;");
  next();
});

// VIEW ENGINE
app.set("view engine", "ejs");

// STATIC FILES
app.use(express.static("public", {
    maxAge: "1d", // Caching files for 1 day
    etag: false
}));

// BODY PARSER
app.use(express.urlencoded({ extended: true }));

// LOGGERS
// app.use(logger);

// PAGE DEFAULTS
app.use((req, res, next) => {
    res.locals.title = "";
    res.locals.metaDescription = "";
    next();
});

// MODULAR ROUTES
app.use("/", homeRoute);
app.use("/", seleniumJavaRoute);

// ERROR HANDLING
app.use(underConstruction);

app.listen(PORT, () => {
    console.log(`Server started running on PORT: ${PORT}.\nVisit: http://localhost:${PORT}`);
});
