export const configureBaseclass = {
    sectionId: "configure_baseclass",
    subsections: [
        {
            subtitle: "Configure Initializers in BaseClass",
            summary: "Now we are all set with required Industry Standard Project Template Structure and Dependencies. Now, lets start building the necessary functionalites that are required for test execution.",
            contents: [
                {
                    contentTitle: "Step 1: Declare Global Properties",
                    blocks: [
                        {
                            text: "Lets start with declaring some global properties which are common and used across entire project as well.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public class BaseClass() {
                                            private Properties properties; // Private to the class itself
                                            public WebDriver driver; // Public to entire project
                                        }`
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Create Global Properties file reading utility",
                    blocks: [
                        {
                            text: "Create an utility method which will be used to read properties from the Global Properties file.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public String getGlobalProperty(String keyName) throws IOException {
                                            properties = new Properties();
                                            FileInputStream configFile = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\resources\\config.properties");
                                            properties.load(configFile);
                                            return properties.getProperty(keyName);
                                        }`
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Create Browser Initialization and Launching Application methods",
                    blocks: [
                        {
                            text: "Lets create a method which will be reponsible for initializing the browser to run tests. Browser selection should be dynamic as we will be running tests via <strong>command prompt</strong>. So, it should have capability to read the params from command prompt. Once the browser instance is created assign it to <strong>driver</strong> variable.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public void initializeBrowser() throws IOException {

                                            // READING PARAMS FROM COMMAND PROMPT
                                            String cmdBrowser = System.getProperty("BROWSER");
                                            String browserToInitialize = cmdBrowser != null ? cmdBrowser : getGlobalProperty("BROWSER");

                                            try {
                                                System.out.println("Started Initializing Browser: "+browserToInitialize.toUpperCase());
                                                if (browserToInitialize.contains("chrome")) {
                                                    ChromeOptions options = new ChromeOptions();
                                                    if (browserToInitialize.contains("headless")) {
                                                        options.addArguments("headless");
                                                    }
                                                    driver = new ChromeDriver(options);
                                                } else if (browserToInitialize.equalsIgnoreCase("edge")) {
                                                    driver = new EdgeDriver();
                                                } else if (browserToInitialize.equalsIgnoreCase("firefox")) {
                                                    driver = new FirefoxDriver();
                                                } else {
                                                    throw new IllegalArgumentException("Browser not supported! Please provide 'CHORME | EDGE | FIREFOX'");
                                                }
                                                driver.manage().window().maximize();
                                            } catch (Exception err) {
                                                // TODO: handle exception
                                                System.out.println("Failed to initialize the browser "+err.getMessage());
                                            }
                                        }`
                            }
                        },
                        {
                            text: "Now create a method which will be launching the application on the initialized browser instance by reading the value from the global properties file.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public void launchApplication() {
                                            try {
                                                String applicationUrl = getGlobalProperty("APPLICATION_URL");
                                                driver.get(applicationUrl);
                                                System.out.println("Application launched successfully");
                                            } catch (Exception err) {
                                                // TODO: handle exception
                                                System.out.println("Failed to launch the application "+err.getMessage());
                                            }
                                        }`
                            }
                        },
                        {
                            text: "Create TestNG annotations of BeforeClass (responsible for initializing the browser and launch the application) and AfterClass (close the browser). Make sure the <strong>alwaysRun</strong> option for the annotations are set to true.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        // Run for every class before any method declared in the Class started executing
                                        @BeforeClass(alwaysRun = true)
                                        public void setUp() throws IOException {
                                            initializeBrowser();
                                            launchApplication();
                                        }

                                        // Run for every class after all methods declared are completed executing in the Class
                                        @AfterClass(alwaysRun = true)
                                        public void tearDown() {
                                            if (driver != null) {
                                                driver.quit();
                                                System.out.println("Browser Terminated & Session Closed");
                                            }
                                        }`
                            }
                        },
                    ]
                },
                {
                    contentTitle: "Step 4: Create an Utility for taking Screenshots on Test failure",
                    blocks: [
                        {
                            text: "Now, lets create a method which will be using to take screen shot of the page when the test run got failed at certain point of execution.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public String takeScreenShotOfThePage(WebDriver driver, String testCaseName) throws IOException {
                                            TakesScreenshot screenShot = (TakesScreenshot) driver;
                                            File sourceOfScreenShot = screenShot.getScreenshotAs(OutputType.FILE);
                                            String destinationPath = System.getProperty("user.dir")+"\\screenshots\\"+testCaseName+".png";
                                            File destinationToSaveFile = new File(destinationPath);
                                            FileUtils.copyFile(sourceOfScreenShot, destinationToSaveFile);
                                            return destinationPath;
                                        }`
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Additional useful methods:-",
                    blocks: [
                        {
                            text: "The following method is used to read and get json data out of a <strong>.JSON</strong> file and returns the data as a <strong>HashMap</strong> object.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public List<HashMap<String, String>> readAndGetJsonData(String filePath) throws IOException {
                                            String jsonData = FileUtils.readFileToString(new File(filePath), StandardCharsets.UTF_8);
                                            ObjectMapper mapper = new ObjectMapper();
                                            List<HashMap<String, String>> data = mapper.readValue(jsonData, new TypeReference<List<HashMap<String, String>>>() {});
                                            return data;
                                        }`
                            }
                        }
                    ]
                },
            ]
        }
    ]
}