export const importDependencies = {
    sectionId: "import_dependencies",
    subsections: [
        {
            subtitle: "Import Required Dependencies",
            summary: "After restructuring the project we can start working with Dependencies required to the project. Below are list of dependencies that are needed to start with. The below dependencies can be found in <a href='https://mvnrepository.com/'>mvnrepository</a>.",
            listItems: [
                '<strong>selenium-java</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-java">Click here</a>',
                '<strong>testng</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/org.testng/testng">Click here</a>',
                '<strong>jackson-binddata</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind">Click here</a>',
                '<strong>commons-io</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/commons-io/commons-io">Click here</a>',
                '<strong>extentreports</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/com.aventstack/extentreports">Click here</a>',
                '<strong>poi</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/org.apache.poi/poi">Click here</a>',
                '<strong>poi-ooxml</strong> – <a class="section__item-link" href="https://mvnrepository.com/artifact/org.apache.poi/poi-ooxml">Click here</a>'
            ],
            contents: [
                {
                    blocks: [
                        {
                            text: "The dependencies should be added in the <code class='content-unit__text-code'>pom.xml</code> file of the project. Once they are added save the file by using shortcut commnand <strong>Ctrl + S</strong>. This will start fetching and downloading the files from mvn repository and save them in <strong>.m2</strong> folder of your local system.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/9_dependencies_pom_file.png",
                                altImgText: "POM Required Dependencies"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}