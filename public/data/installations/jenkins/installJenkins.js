export const installJenkins = {
    sectionId: "install_jenkins",
    subsections: [
        {
            subtitle: "Install Jenkins on your machine",
            contents: [
                {
                    contentTitle: "Step 1: Open the folder in Command Prompt",
                    blocks: [
                        {
                            text: "Now, from the jenkins.war downloaded folder level open the command prompt",
                            image: {
                                imgSource: "img/installations/jenkins/2_open_command_prompt.png",
                                altImgText: "Open Command Prompt from Jenkins Download folder"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Start running jenkins.war file",
                    blocks: [
                        {
                            text: "Type the following command on the terminal <code class='content-unit__text-code'>java -jar jenkins.war httpPort=9090</code> (port is optional) and hit <strong>Enter</strong>.",
                            image: {
                                imgSource: "img/installations/jenkins/3.1_start_jenkins.png",
                                altImgText: "Start Jenkins on Terminal"
                            }
                        },
                        {
                            text: "Once the jenkins started it creates a <strong>.jenkins</strong> folder in Users Admin folder. All jenkins related files get installed here and managed.",
                            image: {
                                imgSource: "img/installations/jenkins/3.2_jekins_installation_folder.png",
                                altImgText: "Jenkins Installation Folder Loaction"
                            }
                        },
                        {
                            text: "Once the process is going on it reaches to Jenkins Initial setup process step with a secret key on the Command Prompt and it also starts the server which is hosted locally on the specified PORT (If PORT is not specified it serves on default PORT = 8080).",
                            image: {
                                imgSource: "img/installations/jenkins/3.3_jenkins_secret_key.png",
                                altImgText: "Jenkins Secret key"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Launch Jenkins on Browser",
                    blocks: [
                        {
                            text: "Now, navigate to any browser type the following url <strong>https://localhost:8080</strong> (by default it serves on 8080).",
                            image: {
                                imgSource: "img/installations/jenkins/4.1_server_started.png",
                                altImgText: "Jenkins Initial Start Screen"
                            }
                        },
                        {
                            text: "After accessign the URL you will landed on <strong>Unlock Jenkins</strong> screen. Here user can get the secret key from the specified directory as well (not only from the command prompt).",
                            image: {
                                imgSource: "img/installations/jenkins/4.2_unlock_jenkins.png",
                                altImgText: "Unlock Jenkins Screen"
                            }
                        },
                        {
                            text: "Enter/Paste the copied secret key and click on <strong>Continue</strong> button.",
                            image: {
                                imgSource: "img/installations/jenkins/4.3_continue_unlock_jenkins.png",
                                altImgText: "Continue Unlock Jenkins Screen"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 4: Install Required Plugins",
                    blocks: [
                        {
                            text: "You will be reached to <strong>Customize Jenkins</strong> Screen. Here you have two ways to install plugins. <strong>i. Install suggested plugins & ii. Select plugins to install</strong>. As a beignner you can choose <strong>Install suggested plugins</strong> step (as most of the required plugins are available here itself).",
                            image: {
                                imgSource: "img/installations/jenkins/5.1_plugins_selection.png",
                                altImgText: "Jenkins Plugins Installation Step"
                            }
                        },
                        {
                            text: "After selecting you will be reached to plugins installation process step. This might take sometime to download. Please wait!",
                            image: {
                                imgSource: "img/installations/jenkins/5.2_plugins_insallation_inprogress.png",
                                altImgText: "Jenkins plugins installation In-Progress"
                            }
                        },
                        {
                            text: "After few minutes the listed plugins installtion process is completed.",
                            image: {
                                imgSource: "img/installations/jenkins/5.3_plugins_insallation_completed.png",
                                altImgText: "Jenkins plugins installation Completed"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 5: Create User Setup",
                    blocks: [
                        {
                            text: "Now after plugins got installed we will be landing on User setup screen.",
                            image: {
                                imgSource: "img/installations/jenkins/6.1_create_user_setup.png",
                                altImgText: "Jenkins User Setup"
                            }
                        },
                        {
                            text: "Enter all the required details mentioned and click on <strong>Save and Continue</strong> button.",
                            image: {
                                imgSource: "img/installations/jenkins/6.2_user_setup_completed.png",
                                altImgText: "Jenkins User Setup Completed"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 6: Instance Configuration",
                    blocks: [
                        {
                            text: "Now we landed on Host Instance Configuration. Leave it as default what it provided. Click on <strong>Save and Finish</strong> button.",
                            image: {
                                imgSource: "img/installations/jenkins/7_instance_configuration.png",
                                altImgText: "Jenkins Host Configuration"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 7: Complete Jenkins Setup",
                    blocks: [
                        {
                            text: "We are successfully completed the setup. Click on <strong>Start using Jenkins</strong> button.",
                            image: {
                                imgSource: "img/installations/jenkins/8.1_jenkins_setup_completed.png",
                                altImgText: "Jenkins Setup Completed"
                            }
                        },
                        {
                            text: "Now you can see the Jenkins home screen.",
                            image: {
                                imgSource: "img/installations/jenkins/8.2_jenkins_home_screen.png",
                                altImgText: "Jenkins Home Screen"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}