export const structureProject = {
    sectionId: "structure_project",
    subsections: [
        {
            subtitle: "Structure Project Folder",
            contents: [
                {
                    blocks: [
                        {
                            text: "As per frameworks standard project folder should be re-structure. As per below image create folders.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/8_maven_testng_project_folders.png",
                                altImgText: "Folder re-structure"
                            }
                        }
                    ]
                },
            ]
        },
        {
            listItems: [
                '<strong>base/</strong> – Contains <code class="section__item-code">BaseClass.java</code> which handles setup/teardown logic',
                '<strong>pages/</strong> – Page Object Model (POM) classes representing each page of the app.',
                '<strong>listeners/</strong> – Custom TestNG listeners (<code class="section__item-code">ITestListener</code>, <code class="section__item-code">IRetryAnalyzer</code>), e.g., for logging, screenshots on failure.',
                '<strong>utils/</strong> – Utility/helper classes like waiting.',
                '<strong>tests/</strong> – TestNG test classes (e.g., <code class="section__item-code">LoginTest.java</code>).',
                '<strong>src/main/resources/exceldata</strong> – Excel Data Files.',
                '<strong>src/main/resources/jsondata</strong> – JSON Data Files.',
                '<strong>src/main/resources/config.properties</strong> – Global configuration properties file.',
                '<strong>root/reports</strong> – Extent Report html files storage.',
                '<strong>root/screenshots</strong> – All failure test cases screenshots storage.',
                '<strong>root/testsuites</strong> – TestNG suite files which tests to run, groups, parameters, parallel execution etc..',
            ],
        }
    ]
}