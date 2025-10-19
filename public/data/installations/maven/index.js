import { sidebar } from "../maven/sidebar.js";
import { downloadMaven } from "./downloadMaven.js";
import { configureMaven } from "./configureMaven.js";
import { verifyMavenVersion } from "./verifyMavenVersion.js";

export const mavenInstallationData = {
    pageTitle: "",
    metaDescription: "",
    sidebar,
    mainContent: [
        downloadMaven,
        configureMaven,
        verifyMavenVersion
    ]
}