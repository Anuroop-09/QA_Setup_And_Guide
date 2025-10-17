export const installJdk = {
    sectionId: "install_jdk",
    subsections: [
        {
            subtitle: "Install JDK On Your Machine",
            contents: [
                {
                    contentTitle: "Step 1: Open Downloaded JDK Installer",
                    blocks: [
                        {
                            text: "After downloading the MSI Installer file navigate to <strong>Downloads</strong> folder find the file and run the file in Adminstration mode (Right Click on File -> Click on <strong>Run as Adminstration</strong>).",
                            image: {
                                imgSource: "img/installations/jdk_java/7_jdk_initial_screen.png",
                                altImgText: "JDK File Installatiin Intiail Page"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Choose Installation Path",
                    blocks: [
                        {
                            text: "Click on <strong>Next</strong> button. You will be landing on installation path section. Here you can choose your desired path location by clicking on <strong>Change...</strong> to install the file or you can also leave it with the default file location displayed.",
                            image: {
                                imgSource: "img/installations/jdk_java/8_jdk_path_location.png",
                                altImgText: "Choose file installation path"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Proceed With Installing File",
                    blocks: [
                        {
                            text: "Click on <strong>Next</strong> button and the installation process is began. Wait for few mintues until the installation process completes.",
                            image: {
                                imgSource: "img/installations/jdk_java/9_jdk_install_progress.png",
                                altImgText: "JDK File Installation In-progress"
                            }
                        },
                        {
                            text: "Now the installation process has been completed and your be able to see JDK installed successful message and <strong>Close</strong> button.",
                            image: {
                                imgSource: "img/installations/jdk_java/10_jdk_install_complete.png",
                                altImgText: "JDK File Installation Completed"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}