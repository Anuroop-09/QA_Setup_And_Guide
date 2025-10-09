import { sidebar } from "./sidebar.js";
import { introToFramework } from "./introToFramework.js";
import { gettingStarted } from "./gettingStarted.js";
import { frameworkStandards } from "./frameworkStandards.js";
import { importDependencies } from "./importDependencies.js";
import { configureBaseclass } from "./configureBaseclass.js";
import { reporting } from "./reporting.js";
import { convertToTestng } from "./convertToTestng.js";
import { addTestngIntegration } from "./addTestngIntegration.js";
import { createProfiles } from "./createProfiles.js";

export const testngData = {
    pageTitle: "Selenium Java | TestNG Framework",
    metaDescription: "Comprehensive Selenium Java TestNG framework guide. Learn automation testing, set up your environment, and execute robust test cases efficiently.",
    sidebar,
    mainContent: [
        introToFramework,
        gettingStarted,
        frameworkStandards,
        importDependencies,
        configureBaseclass,
        reporting,
        convertToTestng,
        addTestngIntegration,
        createProfiles
    ]
}