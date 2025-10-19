import { javaInstallationData } from "../public/data/installations/java/index.js";
import { mavenInstallationData } from "../public/data/installations/maven/index.js";

export const renderJavaInstallationFrame = (req, res) => {
    res.render("javaInstallation", { data: javaInstallationData });
}

export const renderMavenInstallationFrame = (req, res) => {
    res.render("mavenInstallation", { data: mavenInstallationData });
}