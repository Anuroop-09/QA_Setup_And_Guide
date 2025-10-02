export const reporting = {
    sectionId: "reporting",
    subsections: [
        {
            subtitle: "Create Listeners & Reporting",
            contents: [
                {
                    contentTitle: "Step 1: Html Report Configuration",
                    blocks: [
                        {
                            text: "Create a method configure html report file.",
                            code: {
                                codeTitle: "ExtentReporterNG.java",
                                snippet: `
                                        public static ExtentReports getExtentReporter() {
                                            // Set the html report to save
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
                    contentTitle: "Step 2: Implement/Invoke ITestListener methods",
                    blocks: [
                        {
                            text: "Create a new file as Listeners.java. And implement the 'ITestListener' class to use the test related methods. <strong>Note:</strong> If ITestListener class didn't provoked to add methods do the following steps to add them. Right Click on Class file -> Click on Source -> Click on Override/Implement Methods",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/10_override_implements_methods.png",
                                altImgText: "Override implements"
                            }
                        },
                        {
                            text: "From Override/Implements Methods popup -> Select ITestListener checkbox which will be auto selecting the below methods -> Click on OK button",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/11_listener_implements.png",
                                altImgText: "Override implements"
                            }
                        },
                    ]
                },
                {
                    contentTitle: "Step 3: Configure listening to Test execution",
                    blocks: [
                        {
                            text: "Adjust the Listener class methods by start with the following classes initialize at the top level",
                            code: {
                                codeTitle: "Listeners.java",
                                snippet: `
                                        public class Listeners extends BaseClass implements ITestListener {

                                            ExtentTest test;
                                            ExtentReports extent = ExtentReporterNG.getExtentReporter();
                                            ThreadLocal<ExtentTest> extentTest = new ThreadLocal<ExtentTest>();

                                        }`
                            }
                        },
                        {
                            text: "Configure 'onTestStart' method",
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
                            text: "Configure 'onTestSuccess' method",
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
                            text: "Configure 'onTestFailure' method",
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
                            text: "Configure 'onFinish' method",
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
                    contentTitle: "Step 4: Configure IRetryAnalyzer method",
                    blocks: [
                        {
                            text: "IRetryAnalyzer class is used to listen the test execution. So, create a RetryAnalzer.java file and extend the IRetryAnalyzer class.",
                            image: {
                                imgSource: "img/selenium_java/testng_framework/12_iretry_methods.png",
                                altImgText: "Override implements"
                            }
                        },
                        {
                            text: "Configure Retry Mechanism in IRetryAnalyzer.java file",
                            code: {
                                codeTitle: "IRetryAnalyzer.java",
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