export const gettingStarted = {
    sectionId: "getting_started",
    subsections: [
        {
            subtitle: "Getting Started With Project Creation",
            contents: [
                {
                    contentTitle: "Step 1: Open Eclipse IDE",
                    blocks: [
                        {
                            text: "After clicking on Eclipse IDE tool it prompts a directory/workspace folder selection popup. Click on <strong>Browse...</strong> button choose the desired folder location. Once project folder location was selected click on <strong>Launch</strong> button.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/1_workspace_selection.png",
                                altImgText: "Workspace folder selection start popup"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Select Maven Project Type",
                    blocks: [
                        {
                            text: "Once Eclipse IDE got started on desired workspace folder loaction, from ribbon tool bar click on <strong>File</strong> -> Select <strong>New</strong> -> Select <strong>Maven Project</strong>.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/2_select_maven_project.png",
                                altImgText: "Maven project type selection"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Select <code>maven-archetype-quickstart</code> As Base Template",
                    blocks: [
                        {
                            text: "<strong>New Maven Project</strong> popup displayed. Click on <strong>Next</strong> button from the dialog which moves to archetype selection.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/3_move_to_next.png",
                                altImgText: "Click on next button from New Maven Project popup"
                            }
                        },
                        {
                            text: 'From <strong>Filter: </strong> option enter the following archetype <code class="content-unit__text-code">maven-archetype-quickstart</code> template and wait for few seconds to load the archetypes matching to the name provided. Once all loaded, Select the one which is from <code class="content-unit__text-code">org.apache.maven.archetypes</code>. Then, click on <strong>Next</strong> button.',
                            image: {
                                imgSource: "img/selenium_java/testng_framework/4_archetype_selection.png",
                                altImgText: "Selecting Maven quick start archetype template"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 4: Complete Project Creation Process",
                    blocks: [
                        {
                            text: "Enter <strong>Group Id</strong> & <strong>Artifact Id</strong>. Group Id should be a project domain address(an example like com.company.in) & Artifact Id will be the Project name.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/5_project_name.png",
                                altImgText: "Enter Group & Artifact Id details"
                            }
                        },
                        {
                            text: "Click on <strong>Finish</strong> button. And project creation process gets started and logs will be shown in <strong>console</strong> tab. Once the process in completed its prompts to enter <strong>Y</strong>. Type it and hit Enter button.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/6_project_creation_inprogress.png",
                                altImgText: "Maven project creation In Progress"
                            }
                        },
                        {
                            text: "Project creation completed and able to see the Project in <strong>Package Explorer</strong> panel. And expand the Project you will be able to see the default project template structure.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/7_project_creation_completed.png",
                                altImgText: "Maven project creation Completed"
                            }
                        }
                    ]
                },
            ]
        }
    ]
}