export const addTestngIntegration = {
    sectionId: "add_testng_integration",
    subsections: [
        {
            subtitle: "Add Maven TestNG Integration",
            summary: "Now we are set with all basic needs but we are still left with few things before actually proceeding with creating tests i.e. Integrating testng. Lets complete that process.",
            contents: [
                {
                    contentTitle: "Integrate Maven TestNg Surefire Plugin",
                    blocks: [
                        {
                            text: "Inorder to provide knowledge in running TestNG tests via command prompt we need to configure a plugin in pom.xml file. Navigate to Maven TestNG Integration offical page and get the surefire plugin <a href='https://maven.apache.org/surefire/maven-surefire-plugin/examples/testng.html'>Click here</a>.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/19_maven_surefire_plugin_page.png",
                                altImgText: "Maven surefire plugin integration"
                            }
                        },
                        {
                            text: "Add Maven TestNG Integration in pom.xml file. <strong>Note:</strong> If you have the surefire plugin please remove or comment it.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/20_maven_integration_pom.png",
                                altImgText: "Maven surefire plugin integration in pom.xml file"
                            }
                        },
                        {
                            text: "<strong>One important thing to do</strong>: As we are running tests via command prompt one change should make in pom.xml which currently it fail running tests. The change should be made in <strong>testng</strong> dependency. Currently the dependency comes with <strong>scope</strong> attribute or tag which its value is set to <strong>test</strong>. Basically when tests are running it tries to find all TestNG annotations in <strong>tests</strong> folder. If it finds them any where it failes to execute the tests. So we can do two things to aviod such excution failures. Either we can change the scope to <strong>compile</strong> or we can remove that entire scope from the dependency.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/21_tesng_pom_update.png",
                                altImgText: "TestNG dependency scope tag update"
                            }
                        }
                    ]
                },

            ]
        }
    ]
}