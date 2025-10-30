export const configureJdk = {
    sectionId: "configure_jdk",
    subsections: [
        {
            subtitle: "Configure Environment System Variables",
            contents: [
                {
                    contentTitle: "Step 1: Copy JDK Source & Bin Paths",
                    blocks: [
                        {
                            text: "Now to configure or set Environment Variables lets copy the source and bin paths. If you have left the installation file path as default, you can open it from the following path <strong>C: Drive -> Program Files > Java > jdk-xx</strong> (If you choose a different location open the java file installed folder location. Copy the paths).",
                            image: {
                                imgSource: "img/installations/java/11_jdk_source_path.png",
                                altImgText: "jdk Source Folder Path"
                            }
                        },
                        {
                            text: "Now go inside the <strong>bin</strong> folder and copy the path.",
                            image: {
                                imgSource: "img/installations/java/12_jdk_bin_path.png",
                                altImgText: "jdk bin Folder Path"
                            }
                        }

                    ]
                },
                {
                    contentTitle: "Step 2: Open System Variables application",
                    blocks: [
                        {
                            text: "Open Windows search and type <strong>Environment Variables</strong>. You can see an application <strong>Edit the system environment variables</strong> get resulted. Click on Open.",
                            image: {
                                imgSource: "img/installations/java/13.1_system_variables_app.png",
                                altImgText: "Search System Variables Application"
                            }
                        },
                        {
                            text: "<strong>System Properties</strong> popup get displayed. Click on <strong>Environment Variables</strong> button.",
                            image: {
                                imgSource: "img/installations/java/13.2_environment_variables_popup.png",
                                altImgText: "Environment Variables Application popup"
                            }
                        },
                        {
                            text: "Environment Variables popup gets displayed. User can see <strong>User variables for {system_name}</strong> and <strong>System variables</strong> sections.",
                            image: {
                                imgSource: "img/installations/java/13.3_environment_variables_configure_popup.png",
                                altImgText: "Configure Env Variables Application popup"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Set JAVA_HOME Path",
                    blocks: [
                        {
                            text: "Under <strong>System variables</strong> section click on <strong>New</strong> button. <strong>New System Variable</strong> popup gets displayed.",
                            image: {
                                imgSource: "img/installations/java/14.1_new_variable.png",
                                altImgText: "New Variable Creation"
                            }
                        },
                        {
                            text: "Now from the popup enter <strong>JAVA_HOME</strong> as Variable name. Paste the copied source path <strong>(C: Drive -> Program Files > Java > jdk-xx)</strong> as Variable value. Click on <strong>OK</strong> button.",
                            image: {
                                imgSource: "img/installations/java/14.2_java_home_setup.png",
                                altImgText: "Java Home Path Setup"
                            }
                        },
                        {
                            text: "Now verify the JAVA_HOME from <strong>System variables</strong> section.",
                            image: {
                                imgSource: "img/installations/java/14.3_java_home_verify.png",
                                altImgText: "Java Home Path verification"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 4: Setup Bin Path in Path variable",
                    blocks: [
                        {
                            text: "Now look for <strong>Path</strong> variable in System variables section. Select the Path variable click on <strong>Edit</strong> button.",
                            image: {
                                imgSource: "img/installations/java/15.1_Path_variable_edit.png",
                                altImgText: "Path variable Edit"
                            }
                        },
                        {
                            text: "<strong>Edit Environment Variable</strong> popup gets displayed. Click on <strong>New</strong> button.",
                            image: {
                                imgSource: "img/installations/java/15.2_add_new_path.png",
                                altImgText: "Create New Entry For Bin Path"
                            }
                        },
                        {
                            text: "Paste the copied Bin path on the new entry. Click on <strong>OK</strong> button.",
                            image: {
                                imgSource: "img/installations/java/15.3_java_bin_path.png",
                                altImgText: "Add Java Bin Path Location"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}