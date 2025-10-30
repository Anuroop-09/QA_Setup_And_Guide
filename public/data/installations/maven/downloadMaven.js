export const downloadMaven = {
    sectionId: "download_maven",
    subsections: [
        {
            title: "Apache Maven Installation",
            summary: "Apache Maven is a build automation and project management tool primarily used for Java projects. It helps developers compile, test, package, and deploy code easily — all using a standard structure and configuration."
        },
        {
            subtitle: "Key Features",
            listItems: [
                "<strong>Dependency Management :</strong> Automatically downloads and manages external libraries (JAR files) and their versions from repositories like Maven Central.",
                "<strong>Standard Directory Structure :</strong> Enforces a uniform project layout for source code, resources, and test files, making projects easier to understand and maintain.",
                "<strong>Build Lifecycle :</strong> Provides predefined build phases (like compile, test, package, install, deploy) that standardize the build process across projects.",
                "<strong>Plugin-Based Architecture :</strong> Uses plugins to perform specific tasks such as compiling code, running tests, generating documentation, and deploying artifacts.",
                "<strong>Project Object Model (POM) :</strong> Central configuration file (<code>pom.xml</code>) that defines project details, dependencies, plugins, and build instructions."
            ]
        },
        {
            subtitle: "Minimum Requirements",
            listItems: [
                "<strong>Operating System :</strong> Compatible with Windows, macOS, or Linux (any OS supporting Java).",
                "<strong>Java Version :</strong> Requires Java JDK 8 or higher (Java 17+ recommended for latest versions).",
                "<strong>RAM :</strong> Minimum 512 MB (1 GB or more recommended for large projects).",
                "<strong>Disk Space :</strong> At least 100 MB for Maven installation and additional space for local repository (~500 MB+).",
                "<strong>Internet Connection :</strong> Needed initially to download dependencies and plugins from remote repositories."
            ]
        },
        {
            subtitle: "Download Maven from Official Page",
            contents: [
                {
                    contentTitle: "Step 1: Navigate to Apache Maven Official Page",
                    blocks: [
                        {
                            text: "Navigate to <a href='https://maven.apache.org/download.cgi'>Apache Maven downloads</a> page. Look for <strong>Files</strong> section in the page and scroll down to the section.",
                            image: {
                                imgSource: "img/installations/maven/1_maven_downlaods_page.png",
                                altImgText: "Apache Maven Downloads Page"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Choose Archive Package",
                    blocks: [
                        {
                            text: "From Files section you will see a table for downloading archives package file in respective format. Choose <strong>Binary zip archive</strong> row. Click on the link which will be started to downloading file to the users system <strong>Downloads</strong> folder (If it is default Downloads location).",
                            image: {
                                imgSource: "img/installations/maven/2.1_archive_download_inprogress.png",
                                altImgText: "Apache Maven Binary Zip Archive Download In-Progress"
                            }
                        },
                        {
                            text: "Once the archive package file is downloaded user can find the downloaded file from that particular downloads folder.",
                            image: {
                                imgSource: "img/installations/maven/2.2_archive_download_completed.png",
                                altImgText: "Apache Maven Binary Zip Archive Download Completed"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Extract the Downloaded Archive",
                    blocks: [
                        {
                            text: "Now, move the downloaded zip file to the following location <strong>C Drive: Program Files/Maven/...</strong>. If Maven folder is not found create a folder in Program Files. Extract the zip file. (<strong>Note:</strong> The given folder loaction is just a recommanded path. You can choose any path you like).",
                            image: {
                                imgSource: "img/installations/maven/3._archive_file_extracted.png",
                                altImgText: "Apache Maven Archive File Extracted"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}