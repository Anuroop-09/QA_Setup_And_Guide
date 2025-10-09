export const reporting = {
    sectionId: "reporting",
    subsections: [
        {
            subtitle: "Create Listeners & Reporting",
            summary: "By default we have a test execution report gets created in test-output folder. But the report is not having good way of representation in test execution details. So, we need to configure an external HTML reporting. For that as we already included a mvn package of <strong>avenstack</strong>. By using that package let's start configuring a HTML reporter.",
            contents: [
                {
                    contentTitle: "Step 1: Create A HTML Page Configuration",
                    blocks: [
                        {
                            text: "Using <strong>ExtentSparkReporter & ExtentReports</strong> class lets build a HTML report configuration. Starting with creating a reporter method by creating a new class file with name as ExtentReporterNG.java under <strong>listeners</strong>.",
                            code: {
                                codeTitle: "ExtentReporterNG.java",
                                snippet: `
                                        public static ExtentReports getExtentReporter() {
                                            // Set the HTML report to save
                                            String htmlPath = System.getProperty("user.dir")+"\\reports\\index.html";
                                            
                                            // HTML CONFIGURATION
                                            ExtentSparkReporter reporter = new ExtentSparkReporter(htmlPath);
                                            reporter.config().setDocumentTitle("TEST EXECUTION RESULTS");
                                            reporter.config().setReportName("TEST RESULTS");
                                            reporter.config().setEncoding("utf-8");
                                            reporter.config().setTimeStampFormat("dd-MM-yyyy HH:mm:ss");
                                            
                                            // TO CREATE CONSOLIDATE REPORTS USING REPORTER
                                            ExtentReports extent = new ExtentReports();
                                            extent.attachReporter(reporter);
                                            extent.setSystemInfo("Executed By", "Username");
                                            return extent;
                                        }`
                            }
                        },

                    ]
                },
                {
                    contentTitle: "Step 2: Implement/Invoke ITestListener Methods",
                    blocks: [
                        {
                            text: "Create a new file as Listeners.java. And implement the <strong>ITestListener</strong> class (to use the test related methods). <strong>Note:</strong> If ITestListener class didn't provoked to add methods follow the steps to add them manually. Right Click on Class file -> Click on Source -> Click on <strong>Override/Implement Methods</strong>.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/10_override_implement_methods.png",
                                altImgText: "Added ItestListener class and invoking unimplemented methods"
                            }
                        },
                        {
                            text: "From Override/Implements Methods popup -> Select ITestListener checkbox which will be auto selecting the below methods -> Click on OK button.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/11_listener_implement_methods.png",
                                altImgText: "Selecting ITestListener methods from the popup"
                            }
                        },
                    ]
                },
                {
                    contentTitle: "Step 3: Re-configure ITestListener Methods",
                    blocks: [
                        {
                            text: "Adjust the Listener class methods by starting with the following classes to initialize them in class level.",
                            code: {
                                codeTitle: "Listeners.java",
                                snippet: `
                                        public class Listeners extends BaseClass implements ITestListener {

                                            ExtentTest test;

                                            // IMPORTING REPORTER OBJECT
                                            ExtentReports extent = ExtentReporterNG.getExtentReporter();

                                            // RESPONSIBLE FOR PROVIDING UNIQUE KEY (PARALLEL EXECUTION FIX)
                                            ThreadLocal<ExtentTest> extentTest = new ThreadLocal<ExtentTest>();

                                        }`
                            }
                        },
                        {
                            text: "Configure <strong>onTestStart()</strong> method to start recording or listening to the test run with unique test id created (By using ThreadLocal it creates a unqiue id for the test run it starts which avoids confusion in parallel exection).",
                            code: {
                                codeTitle: "Listeners.java",
                                snippet: `
                                        @Override
                                        public void onTestStart(ITestResult result) {
                                            // TODO Auto-generated method stub
                                            test = extent.createTest(result.getMethod().getMethodName());
                                            extentTest.set(test);
                                        }`
                            }
                        },
                        {
                            text: "Configure <strong>onTestSuccess()</strong> method to set the status of the particular test as Passed.",
                            code: {
                                codeTitle: "Listeners.java",
                                snippet: `
                                        @Override
                                        public void onTestSuccess(ITestResult result) {
                                            // TODO Auto-generated method stub
                                            extentTest.get().log(Status.PASS,"Test Passed");
                                        }`
                            }
                        },
                        {
                            text: "Configure <strong>onTestFailure()</strong> method to take screenshot of the page and mark the test execution as Failed with logs and the screen shot attached to the HTML report.",
                            code: {
                                codeTitle: "Listeners.java",
                                snippet: `
                                        @Override
                                        public void onTestFailure(ITestResult result) {
                                            // TODO Auto-generated method stub
                                            extentTest.get().log(Status.FAIL,"Test Failed");
                                            extentTest.get().fail(result.getThrowable());
                                            try {
                                                driver = (WebDriver) result.getTestClass().getRealClass().getField("driver").get(result.getInstance());
                                            } catch (Exception err) {
                                                // TODO Auto-generated catch block
                                                System.out.println("Unable to get 'driver' "+err.getMessage());
                                            }
                                            
                                            String filePath = "";
                                            try {
                                                filePath = takeScreenShotOfThePage(driver, result.getMethod().getMethodName());
                                            } catch (IOException err) {
                                                // TODO Auto-generated catch block
                                                System.out.println("File Not Found " + err.getMessage());
                                            }
                                            extentTest.get().addScreenCaptureFromPath(filePath, result.getMethod().getMethodName());
                                        }`
                            }
                        },
                        {
                            text: "Configure <strong>onFinish()</strong> method to stop recording or listening the test execution once its completed.",
                            code: {
                                codeTitle: "Listeners.java",
                                snippet: `
                                        @Override
                                        public void onFinish(ITestContext context) {
                                            // TODO Auto-generated method stub
                                            extent.flush();
                                        }`
                            }
                        },
                    ]
                },
                {
                    contentTitle: "Step 4: Add Test Execution Retry Mechanism",
                    blocks: [
                        {
                            text: "IRetryAnalyzer class is used to listen the test execution failures and retry the tests again to max count of retries. So, create a RetryAnalzer.java class file and extend the class with implementing <strong>IRetryAnalyzer</strong> class methods.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/12_iretry_implement_methods.png",
                                altImgText: "Add unimplemented methods of IRetryAnalyzer"
                            }
                        },
                        {
                            text: "Configure Retry Mechanism in RetryAnalyzer.java file to run the test again to check whether its passing or not.",
                            code: {
                                codeTitle: "RetryAnalyzer.java",
                                snippet: `
                                        public class RetryAnalyzer implements IRetryAnalyzer {

                                            int count = 0;
                                            int maxTry = 1;
                                            @Override
                                            public boolean retry(ITestResult result) {
                                                // TODO Auto-generated method stub
                                                if (count < maxTry) {
                                                    count++;
                                                    return true;
                                                }
                                                return false;
                                            }

                                        }`
                            }
                        },
                    ]
                },
            ]
        }
    ]
}