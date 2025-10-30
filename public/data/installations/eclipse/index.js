import { downloadEclipse } from "./downloadEclipse.js";
import { installEclipse } from "./installEclipse.js";
import { launchEclipse } from "./launchEclipse.js";
import { sidebar } from "./sidebar.js";

export const eclipseInstallationData = {
    pageTitle: "Installations | Eclipse IDE Tool",
    metaDescription: "",
    sidebar,
    mainContent: [
        downloadEclipse,
        installEclipse,
        launchEclipse
    ]

}