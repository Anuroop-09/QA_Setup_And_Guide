import { javaInstallationData } from "../public/data/installations/java/index.js";
import { mavenInstallationData } from "../public/data/installations/maven/index.js";
import { eclipseInstallationData } from "../public/data/installations/eclipse/index.js";
import { jenkinsInstallationData } from "../public/data/installations/jenkins/index.js";

export const renderJavaInstallationFrame = (req, res) => {
    res.render("installations/javaInstallation", { data: javaInstallationData });
}

export const renderMavenInstallationFrame = (req, res) => {
    res.render("installations/mavenInstallation", { data: mavenInstallationData });
}

export const renderEclipseInstallationFrame = (req, res) => {
    res.render("installations/eclipseInstallation", { data: eclipseInstallationData });
}

export const renderJenkinsInstallationFrame = (req, res) => {
    res.render("installations/jenkinsInstallation", { data: jenkinsInstallationData });
}