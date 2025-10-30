export const frameworkStandards = {
    sectionId: "framework_standards",
    subsections: [
        {
            subtitle: "Convert Project to Framework standards",
            contents: [
                {
                    blocks: [
                        {
                            text: "As per Industry Framework Standards the project default structure in not having right folders/packages. We need to re-structure the project folders/packages by creating necessary items which are responsible to there own duties. Please check the below image and project structure details for sample framework standard template which require to includes.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/8_restructure_project_folders.png",
                                altImgText: "Folder re-structure"
                            },
                            code: {
                                codeTitle: "Project Structure",
                                snippet: `
                                        ├── src/
                                        │   ├── main/
                                        │   │   ├── java/
                                        │   │   │   ├── base/
                                        │   │   │   │   └── BaseTest.java           # Base test class to initiate WebDriver
                                        │   │   │   ├── listeners/
                                        │   │   │   │   └── Listeners.java          # Listens to Test Results
                                        │   │   │   │   └── ExtentReporterNG.java   # HTML Report Configuration and initializer
                                        │   │   │   │   └── RetryAnalyzer.java      # Listens to Test Failures
                                        │   │   │   ├── pages/
                                        │   │   │   │   └── LoginPage.java          # Page Object Model class
                                        │   │   │   └── utils/
                                        │   │   │       └── LoginPage.java          # Utility functions for tests
                                        |   |   |
                                        │   │   └── resources/
                                        │   │       ├── excel_data/                 # Excel Test Files
                                        │   │       ├── json_data/                  # Json Test Files
                                        │   │       └── config.properties           # Global Properties File
                                        │   │
                                        │   └── test/
                                        │       └── java/
                                        │           └───tests/
                                        │                └── Logintest.java          # Unit test classes
                                        │
                                        ├── reports/
                                        |   └── Report.html                          # Test execution HTML Reports
                                        ├── screenshots/                             # Test Failures Screenshots
                                        ├── testsuites/
                                        │   └── testng.xml                           # TestNG Suite Execution files
                                        ├── pom.xml
                                        └── README.md
                                        `
                            }
                        }
                    ]
                },
            ]
        },
        {
            subtitle: "Project template structure details",
            listItems: [
                "<strong>src/main/java/../base/</strong> – Contains <code class='section__item-code'>BaseClass.java</code> which handles setup/teardown logic.",
                "<strong>src/main/java/../pages/</strong> – Page Object Model (POM) classes representing each page of the app.",
                "<strong>src/main/java/../listeners/</strong> – Custom TestNG listeners (<code class='section__item-code'>ITestListener</code>, <code class='section__item-code'>IRetryAnalyzer</code>), e.g., for logging, screenshots on failure.",
                "<strong>src/main/java/../utils/</strong> – Utility/helper classes like waiting.",
                "<strong>src/test/java/../tests/</strong> – TestNG test classes (e.g., <code class='section__item-code'>LoginTest.java</code>).",
                "<strong>src/main/resources/exceldata</strong> – Excel Data Files.",
                "<strong>src/main/resources/jsondata</strong> – JSON Data Files.",
                "<strong>src/main/resources/config.properties</strong> – Global configuration properties file.",
                "<strong>project_root/reports</strong> – Extent Report html files storage.",
                "<strong>project_root/screenshots</strong> – All failure test cases screenshots storage.",
                "<strong>project_root/testsuites</strong> – TestNG suite files which tests to run, groups, parameters, parallel execution etc.",
            ],
        }
    ]
}