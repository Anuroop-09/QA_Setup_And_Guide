export const convertToTestng = {
    sectionId: "convert_to_testng",
    subsections: [
        {
            subtitle: "Convert Project to TestNG",
            summary: "Now, we need to convert the Project to TestNG. So we can run all the created test files using a suite file i.e. testng.xml file. These suite files can be reconfigured according to the project needs.",
            contents: [
                {
                    contentTitle: "Step 1: Start Creating <code>testng.xml</code> file",
                    blocks: [
                        {
                            text: "Now lets convert the project to TestNG (to run the tests using testng.xml file). Right Click on Project -> Hover over <strong>TestNG</strong> -> Click on <strong>Convert to TestNG</strong>.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/13_convert_project_testng.png",
                                altImgText: "Convert Project to TestNG"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Review And Proceed With <code>testng.xml</code> Creation",
                    blocks: [
                        {
                            text: "You will get a <strong>Generate testng.xml</strong> popup displayed. Review the Test Files and Click on <strong>Next</strong> button.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/14_testng_xml_inprogress.png",
                                altImgText: "TestNG xml file creation in progress"
                            }
                        },
                        {
                            text: "Click on <strong>Finish</strong> button and complete the testng.xml file creation process.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/15_testng_xml_completed.png",
                                altImgText: "TestNG xml file creation completed"
                            }
                        },
                        {
                            text: "Now, testng.xml file got created and available at Project root folder level. Move the file to <strong>testsuites</strong> folder",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/16_testng_xml_created.png",
                                altImgText: "TestNG xml created"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Re-configure <code>testng.xml</code> file",
                    blocks: [
                        {
                            text: "As the current structure in file is basic configuration which only triggers the tests. Now we need to re-structure the <code class='content-unit__text-code'>testng.xml</code> file by including with our desired test files.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/17_testng_xml_tests.png",
                                altImgText: "TestNG xml tests configuration"
                            }
                        },
                        {
                            text: "Add Listener file to generate reports after test execution.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/18_testng_xml_listener.png",
                                altImgText: "TestNG xml Listener configuration"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}