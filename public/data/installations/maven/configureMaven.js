export const configureMaven = {
    sectionId: "configure_maven",
    subsections: [
        {
            subtitle: "Configure Environment System Variables",
            contents: [
                {
                    contentTitle: "Step 1: Copy JDK File Source & Bin Paths",
                    blocks: [
                        {
                            text: "Now to configure or set Environment Variables lets copy the source and bin paths. If you have left the installation file path as default, you can open it from thae following path C: Drive -> Program Files > Java > jdk-21.  If you choose a different location open the java file installed folder location. Copy the path.",
                            image: {
                                imgSource: "img/installations/jdk_java/11_jdk_source_path.png",
                                altImgText: "jdk source folder path"
                            }
                        },
                        {
                            text: "Now go inside the bin folder and copy the path.",
                            image: {
                                imgSource: "img/installations/jdk_java/12_jdk_bin_path.png",
                                altImgText: "jdk bin folder path"
                            }
                        }
                        
                    ]
                },
                {
                    contentTitle: "Step 2: Setup Soruce Path",
                    blocks: [
                        {
                            text: "Open Windows search and type <strong>Environment Variables</strong>. You can see an application <strong>Edit system environment variables</strong> get resulted. Click on that application. <strong>System Properties</strong> popup get displayed. Click on <strong>Environment Variables</strong>. Environment Variables popup gets displayed.",
                            image: {
                                imgSource: "img/installations/jdk_java/env.png",
                                altImgText: "Environment Variables popup"
                            }
                        },
                        {
                            text: "Under <strong>System variables</strong> section click on <strong>New</strong> button. <strong>New System Variable</strong> popup gets displayed. Now from the popup enter <strong>JAVA_HOME</strong> as Variable name. Paste the copied source path <strong>(C: Drive -> Program Files > Java > jdk-21)</strong> as Variable value. Click on <strong>OK</strong> button.",
                            image: {
                                imgSource: "img/installations/jdk_java/13_java_home_setup.png",
                                altImgText: "Java Home Path Creation"
                            }
                        },
                        {
                            text: "Now verify the JAVA_HOME from <strong>System variables</strong> section.",
                            image: {
                                imgSource: "img/installations/jdk_java/14_java_home_verify.png",
                                altImgText: "Java Home Path verification"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Setup Bin Path",
                    blocks: [
                        {
                            text: "Now look for <strong>Path</strong> variable in System variables section. Select the Path variable click on <strong>Edit</strong> button. <strong>Edit Environment Variable</strong> popup gets displayed. Click on <strong>New</strong> button. Paste the copied Bin path on the new entry. Click on <strong>OK</strong> button.",
                            image: {
                                imgSource: "img/installations/jdk_java/15_java_bin_path.png",
                                altImgText: ""
                            }
                        }
                    ]
                }
            ]
        }
    ]
}