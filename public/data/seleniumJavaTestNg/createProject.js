export const createProject = {
    sectionId: "create_project",
    subsections: [
        {
            subtitle: "Create a Maven Project",
            contents: [
                {
                    contentTitle: "Step 1: Open Eclipse IDE",
                    blocks: [
                        {
                            text: "Before opening IDE choose your desired folder location and open Eclipse IDE through the location.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/1_project_folder_selection.png",
                                altImgText: "Project folder selection"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Select Maven Project Type",
                    blocks: [
                        {
                            text: "Once the IDE got started, from ribbon tool bar Click on <strong>File</strong> -> Select <strong>New</strong> -> Select <strong>Maven Project</strong>",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/2_select_maven_project.png",
                                altImgText: "Project Type Selection"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Select <code>maven-archetype-quickstart</code> as base template",
                    blocks: [
                        {
                            text: "<strong>New Maven Project</strong> dialog displayed, Click on <strong>Next</strong> button from the New Maven Project dialog.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/3_select_next_maven_project.png",
                                altImgText: "Next button new maven project"
                            }
                        },
                        {
                            text: 'Filter <code class="content-unit__text-code">maven-archetype-quickstart</code> template and select the one which is from <code class="content-unit__text-code">org.apache.maven.archetypes</code>',
                            image: {
                                imgSource: "img/selenium_java/testng_framework/4_select_maven_quickstart.png",
                                altImgText: "Archetype Selection"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 4: Complete Project Creation Process",
                    blocks: [
                        {
                            text: "Enter Group Id & Artifact Id. (<strong>Note</strong>: Group Id should be a project domain address & Artifact Id is Project Name)",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/5_maven_project_name.png",
                                altImgText: "Project Name Details"
                            }
                        },
                        {
                            text: "Click on <strong>Finish</strong> button. Creation process gets started and logs will be shown in <strong>console</strong>. Once the process in completed its prompts to enter <strong>Y</strong>.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/6_maven_project_progress.png",
                                altImgText: "Project Creation Process"
                            }
                        },
                        {
                            text: "Project creation completed and able to see the default project structure.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/7_maven_project_completed.png",
                                altImgText: "Project Creation Completed"
                            }
                        }
                    ]
                },
            ]
        }
    ]
}