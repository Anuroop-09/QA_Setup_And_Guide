export const addTestngIntegration = {
    sectionId: "add_testng_integration",
    subsections: [
        {
            subtitle: "Add TestNG Integration in pom.xml",
            contents: [
                {
                    blocks: [
                        {
                            text: "Navigate to Maven TestNg Integration offical page and Get the surefire plugin <a href='https://maven.apache.org/surefire/maven-surefire-plugin/examples/testng.html'>Click here</a> (supports for command line execution)",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/19_maven_surefire_plugin_page.png",
                                altImgText: "Maven surefire plugin integration"
                            }
                        },
                        {
                            text: "Add maven integration in pom.xml file",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/20_maven_integration_pom.png",
                                altImgText: "Maven surefire plugin integration in pom"
                            }
                        },
                        {
                            text: "As we are running test via command line on change should be made in pom.xml for testng dependency. scope should be changed to compile or remove it.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/21_tesng_pom_update.png",
                                altImgText: "Profiles in pom.xml"
                            }
                        }
                    ]
                },

            ]
        }
    ]
}