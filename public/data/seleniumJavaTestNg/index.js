import { sidebar } from "./sidebar.js";
import { gettingStarted } from "./gettingStarted.js";
import { createProject } from "./createProject.js";
import { structureProject } from "./structureProject.js";
import { addDependencies } from "./addDependencies.js";
import { setUpBase } from "./setUpBase.js";
import { reporting } from "./reporting.js";
import { convertToTestng } from "./convertToTestng.js";
import { addTestngIntegration } from "./addTestngIntegration.js";
import { createProfiles } from "./createProfiles.js";

export const testngData = {
    pageTitle: "Selenium Java | TestNg Framework",
    metaDescription: "Comprehensive Selenium Java TestNG framework guide. Learn automation testing, set up your environment, and execute robust test cases efficiently.",
    sidebar,
    mainContent: [
        gettingStarted,
        createProject,
        structureProject,
        addDependencies,
        setUpBase,
        reporting,
        convertToTestng,
        addTestngIntegration,
        createProfiles
    ]
}