export const downloadJenkins = {
    sectionId: "download_jenkins",
    subsections: [
        {
            title: "Jenkins Installation (.war)",
            summary: "Jenkins is an open-source automation server used to build, test, and deploy software continuously (CI/CD). It helps developers automate repetitive tasks, integrate code changes efficiently, and ensure faster, more reliable software delivery. Jenkins can be easily installed by downloading the jenkins.war file and running it with the command java -jar jenkins.war to start the server."
        },
        {
            subtitle: "Key Features",
            listItems: [
                "<strong>Pipeline Support :</strong> Enables creation of complex CI/CD pipelines using a simple, declarative syntax.",
                "<strong>Extensibility :</strong> Supports hundreds of plugins to integrate with various development, testing, and deployment tools.",
                "<strong>Distributed Builds :</strong> Allows workload distribution across multiple machines to speed up build processes.",
                "<strong>Easy Configuration :</strong> Provides a web-based interface and configuration-as-code for easier setup and management.",
                "<strong>Continuous Integration & Delivery :</strong> Automates code integration, testing, and deployment for faster software releases."
            ]
        },
        {
            subtitle: "Minimum Requirements",
            listItems: [
                "<strong>Java Runtime Environment (JRE) :</strong> Requires Java 11 or newer to run Jenkins.",
                "<strong>Processor :</strong> Minimum 2 GHz dual-core CPU for stable performance.",
                "<strong>Memory :</strong> At least 4 GB RAM recommended for small to medium workloads.",
                "<strong>Disk Space :</strong> Minimum 10 GB free disk space for Jenkins installation and build data.",
                "<strong>Operating System :</strong> Compatible with Windows, Linux, and macOS platforms."
            ]
        },
        {
            subtitle: "Download Jenkins from Official page",
            contents: [
                {
                    contentTitle: "Step 1: Navigate to Jenkins Official page",
                    blocks: [
                        {
                            text: "Navigate to <a href='https://www.jenkins.io/download/'>Jenkins Downloads</a> page to download latest stable version of Jenkins file. Choose which Jenkins version is currently stable and supported for Long-Term Support (LTS).",
                            image: {
                                imgSource: "img/installations/jenkins/1.1_jenkins_download_page.png",
                                altImgText: "Jenkins Downloads Page"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Choose Jenkins.war Package file",
                    blocks: [
                        {
                            text: "From LTS section look for <strong>Generic Java Package (.war)</strong> to download.",
                            image: {
                                imgSource: "img/installations/jenkins/1.2_download_jenkins_war.png",
                                altImgText: "Jenkins War File Download"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Download Jenkins.war Package file",
                    blocks: [
                        {
                            text: "Click on <strong>Generic Java Package.war</strong> which will be started downloading the package file to the users system <strong>Downloads</strong> folder (If it is default Downloads location).",
                            image: {
                                imgSource: "img/installations/jenkins/1.3_jenkins_download_inprrogress.png",
                                altImgText: "Jenkins Downloads In Progress"
                            }
                        },
                        {
                            text: "Once war file is downloaded user can find the downloaded file from that particular downloads folder.",
                            image: {
                                imgSource: "img/installations/jenkins/1.4_jenkins_download_completed.png",
                                altImgText: "Jenkins Downloads Completed"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}