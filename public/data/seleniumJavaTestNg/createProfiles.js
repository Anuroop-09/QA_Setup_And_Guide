export const createProfiles = {
    sectionId: "create_profiles",
    subsections: [
        {
            subtitle: "Create Profiles in pom.xml",
            summary: "Finally we are in the last stage of completing the configuration of project. As the project tests grows we need to manage them via different use cases like Regression, Smoke, Sanity, Sprint Cycles etc. To run these kind of tests we need to create some multiple testng.xml files which are configured based on the test needs. To run those all testng.xml files we need a smart way of doing it. That's where the <strong>Profiling</strong> comes to the picture.",
            contents: [
                {
                    contentTitle: "Creation of Profiles in <code>pom.xml</code> file",
                    blocks: [
                        {
                            text: "In <code class='content-unit__text-code'>pom.xml</code> file after dependencies declare <strong>profiles</strong>. Under profiles create profile with <strong>id</strong> and <strong>build</strong>. Bascially build is nothing but the maven surefire plugin with testng intergation. Under profiles you can create profile as many as you can with changing the id and testng.xml file.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/22_profile_in_pom.png",
                                altImgText: "Profiles setup in pom.xml file"
                            }
                        }
                    ]
                },

            ]
        }
    ]
}