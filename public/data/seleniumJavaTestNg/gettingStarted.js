export const gettingStarted = {
    sectionId: "getting_started",
    subsections: [
        {
            subtitle: "Getting started with Project creation",
            contents: [
                {
                    contentTitle: "Step 1: Open Eclipse IDE",
                    blocks: [
                        {
                            text: "After clicking on Eclipse IDE tool it prompts a directory folder selection popup. Click on <strong>Browse...</strong> button choose the desired folder location. Once project folder location was selected click on <strong>Launch</strong> button.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/1_workspace_selection.png",
                                altImgText: "Workspace folder selection start popup"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Select Maven Project type",
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
                    contentTitle: "Step 3: Select <code>maven-archetype-quickstart</code> as Base Template",
                    blocks: [
                        {
                            text: "<strong>New Maven Project</strong> popup displayed. Click on <strong>Next</strong> button from the dialog which moves to archetype selection stage.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/3_move_to_next.png",
                                altImgText: "Click on next button from New Maven Project popup"
                            }
                        },
                        {
                            text: 'From <strong>Filter: </strong> field option enter the following archetype <code class="content-unit__text-code">maven-archetype-quickstart</code> template in the input. Wait for few seconds to load the archetypes matching to the name provided. Once all loaded, select the one which is from <code class="content-unit__text-code">org.apache.maven.archetypes</code> organization. Then, click on <strong>Next</strong> button.',
                            image: {
                                imgSource: "img/selenium_java/testng_framework/4_archetype_selection.png",
                                altImgText: "Selecting Maven quick start archetype template"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 4: Complete project creation process",
                    blocks: [
                        {
                            text: "Enter <strong>Group Id</strong> & <strong>Artifact Id</strong>. Group Id should be a project domain address(an example like com.company.in) & Artifact Id will be the Project name.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/5_project_name.png",
                                altImgText: "Enter Group & Artifact Id details"
                            }
                        },
                        {
                            text: "Click on <strong>Finish</strong> button. Now, project creation process gets started and logs will be shown in <strong>console</strong> tab. Once the process in completed its prompts to enter <strong>Y</strong>. Type it and hit <strong>Enter</strong> button.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/6_project_creation_inprogress.png",
                                altImgText: "Maven project creation In Progress"
                            }
                        },
                        {
                            text: "Project creation completed and able to see the created Project from left side <strong>Package Explorer</strong> panel. Expand the Project which you will be able to see the default project template structure.",
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