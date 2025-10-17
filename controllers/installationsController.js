import { javaInstallationData } from "../public/data/installations/java/index.js";

export const renderJavaInstallationFramework = (req, res) => {
    res.render("javaInstallation", { data: javaInstallationData });
}