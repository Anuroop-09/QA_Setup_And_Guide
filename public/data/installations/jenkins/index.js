import { sidebar } from "./sidebar.js";
import { downloadJenkins } from "./downloadJenkins.js";
import { installJenkins } from "./installJenkins.js";
import { initializeJenkins } from "./initializeJenkins.js";


export const jenkinsInstallationData = {
    pageTitle: "Installations | Jenkins",
    metaDescription: ".",
    sidebar,
    mainContent: [
        downloadJenkins,
        installJenkins,
        initializeJenkins
    ]
}