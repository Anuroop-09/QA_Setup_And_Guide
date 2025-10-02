import express from "express";
import homeRoute from "./routes/home.js";
import seleniumJavaRoute from "./routes/selenium.js";
import { logger } from "./middleware/logger.js";
import { underConstruction } from "./middleware/errorHandlers.js";

const PORT = 5050;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public", {
    maxAge: "1d", // Caching files for 1 day
    etag: false
}));
app.use(express.urlencoded({ extended: true }));

// LOGGERS
app.use(logger);

// PAGE DEFAULTS
app.use((req, res, next) => {
    res.locals.title = "";
    res.locals.metaDescription = "";
    next();
})

// MODULAR ROUTES
app.use("/", homeRoute);
app.use("/", seleniumJavaRoute);

// ERROR HANDLING
app.use(underConstruction);

app.listen(PORT, () => {
    console.log(`Server started running on PORT: ${PORT}. \nVisit: http://localhost:${PORT}`);
});