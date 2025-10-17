import { sidebar } from "./sidebar.js";
import { downloadJdk } from "./downloadJdk.js";
import { installJdk } from "./installJdk.js";
import { configureEnvPath } from "./configureEnvPath.js";
import { verifyVersion } from "./verifyVersion.js";

export const javaInstallationData = {
    pageTitle: "",
    metaDescription: "",
    sidebar,
    mainContent: [
        downloadJdk,
        installJdk,
        configureEnvPath,
        verifyVersion
    ]
}