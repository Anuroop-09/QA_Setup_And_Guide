import { homeData } from "../public/data/home/index.js";

export const renderHome = (req, res) => {
    res.render("home", { data: homeData });
}