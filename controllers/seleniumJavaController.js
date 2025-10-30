import { testngData } from "../public/data/seleniumJavaTestNg/index.js";

export const renderTestngFramework = (req, res) => {
    res.render("seleniumJava/testngFramework", { data: testngData });
}