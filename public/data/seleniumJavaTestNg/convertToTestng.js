export const convertToTestng = {
    sectionId: "convert_to_testng",
    subsections: [
        {
            subtitle: "Convert Project to TestNG",
            contents: [
                {
                    contentTitle: "Step 1: Converting to TestNG",
                    blocks: [
                        {
                            text: "Right Click on Project -> Hover over TestNG -> Click on Convert to TestNG",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/13_convert_project_testng.png",
                                altImgText: "Convert Project to Testng"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Review and Proceed with testng.xml process",
                    blocks: [
                        {
                            text: "Generate testng.xml popup got displayed. Review the Test Files and Click on Next button",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/14_testng_xml_inprogress.png",
                                altImgText: "Testng xml in progress"
                            }
                        },
                        {
                            text: "Click on Next button and Complete the testng.xml creation process",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/15_testng_xml_finish_process.png",
                                altImgText: "Testng xml in finish"
                            }
                        },
                        {
                            text: "testng.xml got created on Project folder level",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/16_testng_xml_created.png",
                                altImgText: "Testng xml created"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Re-configure testng.xml file",
                    blocks: [
                        {
                            text: "Re-structure the testng.xml file by including with your desired test files",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/17_testng_xml_configure.png",
                                altImgText: "Testng xml configuration"
                            }
                        },
                        {
                            text: "Add the Listener file to generate reports after test ran",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/18_testng_xml_listener.png",
                                altImgText: "Testng xml Listener configuration"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}