import { sidebar } from "../maven/sidebar.js";
import { downloadMaven } from "./downloadMaven.js";
import { configureMaven } from "./configureMaven.js";
import { verifyMavenVersion } from "./verifyMavenVersion.js";

export const mavenInstallationData = {
    pageTitle: "Installations | Apache Maven",
    metaDescription: "Apache Maven is a powerful build automation and project management tool for Java and other programming languages. It simplifies dependency management, builds, and project configuration using a standard, declarative approach.",
    sidebar,
    mainContent: [
        downloadMaven,
        configureMaven,
        verifyMavenVersion
    ]
}