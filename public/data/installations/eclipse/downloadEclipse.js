export const downloadEclipse = {
    sectionId: "download_eclipse",
    subsections: [
        {
            title: "Eclipse IDE Installation",
            summary: "Eclipse IDE is a powerful, open-source integrated development environment widely used for Java development, though it also supports languages like C++, Python, and PHP through plugins. It offers features such as code editing, debugging, version control integration, and project management, making it a versatile tool for software development."
        },
        {
            subtitle: "Key Features",
            listItems: [
                "<strong>Extensible Plugin System :</strong> Supports thousands of plugins to add languages, tools, and frameworks for customized development environments.",
                "<strong>Powerful Code Editor :</strong> Offers syntax highlighting, code completion, refactoring, and intelligent error detection for efficient coding.",
                "<strong>Integrated Debugger :</strong> Provides step-by-step debugging, breakpoints, and variable inspection for easy troubleshooting.",
                "<strong>Version Control Integration :</strong> Seamlessly integrates with Git, SVN, and other version control systems for collaborative development.",
                "<strong>Cross-Platform Support :</strong> Runs on Windows, macOS, and Linux, ensuring a consistent development experience across operating systems."
            ]
        },
        {
            subtitle: "Minimum Requirements",
            listItems: [
                "<strong>Operating System :</strong> Windows 10 or later, macOS 10.15 or later, or a modern Linux distribution (e.g., Ubuntu, Fedora).",
                "<strong>Processor :</strong> Dual-core CPU (Intel or AMD) or higher.",
                "<strong>Memory (RAM) :</strong> Minimum 2 GB (4 GB or more recommended for smoother performance).",
                "<strong>Storage :</strong> At least 500 MB of free disk space for installation (additional space required for projects and plugins).",
                "<strong>Java Runtime Environment (JRE) :</strong> Requires Java 11 or higher (preferably a matching JDK for the Eclipse version)."
            ]
        },
        {
            subtitle: "Download Eclipse IDE From Official Page",
            contents: [
                {
                    contentTitle: "Step 1: Navigate to Eclipse IDE official page",
                    blocks: [
                        {
                            text: "Navigate to <a href='https://www.eclipse.org/downloads/'>Eclipse IDE downloads</a> page. Look for <strong>Download</strong> button from Eclipse IDE Packages section from the page and click on it.",
                            image: {
                                imgSource: "img/installations/eclipse/1_eclipse_ide_downloads.png",
                                altImgText: "Eclipse IDE Downloads Page"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Download IDE Package file",
                    blocks: [
                        {
                            text: "Now you can see the package download page. Here you can see a <strong>Download</strong> button.",
                            image: {
                                imgSource: "img/installations/eclipse/2.1_eclipse_ide_download_file.png",
                                altImgText: "Eclipse Package File Download Page"
                            }
                        },
                        {
                            text: "Click on Download button which will be started downloading file to the users system <strong>Downloads</strong> folder (If it is default Downloads location).",
                            image: {
                                imgSource: "img/installations/eclipse/2.2_eclipse_download_inprogress.png",
                                altImgText: "Eclipse Package Download In Progress"
                            }
                        },
                        {
                            text: "Once the package file is downloaded user can find the downloaded file from that particular downloads folder.",
                            image: {
                                imgSource: "img/installations/eclipse/2.3_eclipse_download_completed.png",
                                altImgText: "Eclipse Package Download Completed"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}