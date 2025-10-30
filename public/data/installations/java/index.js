import { sidebar } from "./sidebar.js";
import { downloadJdk } from "./downloadJdk.js";
import { installJdk } from "./installJdk.js";
import { configureJdk } from "./configureJdk.js";
import { verifyJdkVersion } from "./verifyJdkVersion.js";

export const javaInstallationData = {
    pageTitle: "Installations | JDK (Java Development Kit)",
    metaDescription: "The Java Development Kit (JDK) is a software package used to develop, compile, and run Java applications. It includes the Java Runtime Environment (JRE), compiler, and essential development tools.",
    sidebar,
    mainContent: [
        downloadJdk,
        installJdk,
        configureJdk,
        verifyJdkVersion
    ]
}