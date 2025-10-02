export const gettingStarted = {
    sectionId: "getting_started",
    subsections: [
        {
            title: "Selenium Java TestNG Framework",
            summary: "The Selenium Java TestNG Framework is a popular combination used for automated web application testing. It integrates Selenium WebDriver (for browser automation) with TestNG (a testing framework inspired by JUnit, designed for test configuration, grouping, parallel execution, and reporting)."
        },
        {
            subtitle: "Key Features",
            listItems: [
                "<strong>Annotations :</strong> Define and manage test structure using tags like @Test, @BeforeMethod, @AfterClass, etc.",
                "<strong>Parallel Execution :</strong> Run multiple tests or test classes at the same time to reduce execution time.",
                "<strong>Data-Driven Testing :</strong> Execute the same test with different data sets using @DataProvider or TestNG XML.",
                "<strong>Suite Execution via XML :</strong> Configure and organize test execution through a single TestNG XML file.",
                "<strong>Detailed Reporting :</strong> Generate built-in HTML and XML reports showing test status, errors, and logs.",
                "<strong>CI/CD Integration :</strong> Seamlessly integrate with continuous integration tools like Jenkins for automated test execution."
            ]
        }
    ]
}