export const downloadJdk = {
    sectionId: "download_jdk",
    subsections: [
        {
            title: "JDK (Java Development Kit) Installation",
            summary: "The JDK (Java Development Kit) is a comprehensive software development package provided by Oracle that includes everything needed to develop, test, and run Java applications. It contains essential tools such as compilers, debuggers, and various utilities that make Java development efficient and manageable. The JDK is a prerequisite for running any Java-based programs and supports the development of both standalone and web applications."
        },
        {
            subtitle: "Key Features",
            listItems: [
                "<strong>javac</strong>: A compiler that converts Java source code into bytecode, which can then be executed by the JVM (Java Virtual Machine).",
                "<strong>java</strong>: A runtime tool that launches and executes Java applications by interpreting compiled bytecode.",
                "<strong>javadoc</strong>: A tool that generates HTML-based documentation for Java classes and methods directly from the code’s comments.",
                "<strong>jdb</strong>: A debugger for diagnosing and fixing bugs in Java programs by stepping through code during execution.",
                "<strong>jar</strong>: A utility that bundles Java classes and resources into a single archive file for easier distribution and deployment."
            ]
        },
        {
            subtitle: "Minimum Requirements",
            listItems: [
                "<strong>Operating System:</strong> Windows 10 or later (64-bit), macOS 10.14 or later, or modern Linux distribution (64-bit)",
                "<strong>Processor (CPU):</strong> 2 GHz or higher, 2 cores",
                "<strong>RAM:</strong> 4 GB",
                "<strong>Storage:</strong> 2 GB of free space for JDK installation",
                "<strong>Display:</strong> 1366 x 768 resolution"
            ]
        },
        {
            subtitle: "Download JDK From Official Page",
            contents: [
                {
                    contentTitle: "Step 1: Navigate To Oracle Offical Page",
                    blocks: [
                        {
                            text: "Navigate to <a href='https://www.oracle.com/in/java/technologies/downloads/'><strong>Oracle</strong> JDK Downloads</a> page to download latest stable version of JDK installer. Choose which JDK version is currently stable and supported for Long-Term Support (LTS).",
                            image: {
                                imgSource: "img/installations/jdk_java/1_oracle_downloads_page.png",
                                altImgText: "Oracle JDK Downloads Page"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Choose JDK LTS Installer",
                    blocks: [
                        {
                            text: "After choosing the LTS supported JDK version from downloads page navigate to that version. Here JDK offers in multiple OS's like Linux, macOS, Windows. Based on your current OS (Operating System) please choose the respective one.",
                            image: {
                                imgSource: "img/installations/jdk_java/2_oracle_os_version.png",
                                altImgText: "Oracle OS version selection for JDK"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Download Installer File",
                    blocks: [
                        {
                            text: "Now, Look for MSI Installer package file from the respective OS <strong>(x64 MSI Installer)</strong>. Click on link which will be downloading the package file to the users system <strong>Downloads</strong> folder.",
                            image: {
                                imgSource: "img/installations/jdk_java/3_oracle_jdk_installer.png",
                                altImgText: "JDK MSI Installer Download"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}