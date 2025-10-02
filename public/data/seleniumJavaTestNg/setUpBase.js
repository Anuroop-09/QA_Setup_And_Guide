export const setUpBase = {
    sectionId: "setup_baseclass",
    subsections: [
        {
            subtitle: "Setup BaseClass.java",
            contents: [
                {
                    blocks: [
                        {
                            text: "Create a method to read configuration properties file.",
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
                        },
                        {
                            text: "Create a method to initialize a browser instance.",
                            code: {
                                codeTitle: "BaseClass.java",
                                snippet: `
                                        public void initializeBrowser() throws IOException {
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
                            text: "Create a method to launch the application.",
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
                            text: "Create BeforeClass annotation to invoke browser and launch the application. Similiarly, AfterClass annotation to close the browser.",
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
                        {
                            text: "Create a method to take screenshot of the page.",
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
                        },
                        {
                            text: "<strong>Additional useful methods:</strong> Method to read and get json data and returns back to hashmap object.",
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