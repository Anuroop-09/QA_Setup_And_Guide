export const verifyJdkVersion = {
    sectionId: "verify_jdk",
    subsections: [
        {
            subtitle: "Verify JDK via Command Prompt",
            contents: [
                {
                    blocks: [
                        {
                            text: "Now we are set with required things. Lets verify the version from Command prompt. Open <strong>Command Propmt</strong> and type the following command <code class='content-unit__text-code'>java --version</code> and hit Enter. Verify the version details.",
                            image: {
                                imgSource: "img/installations/java/16_java_version_check.png",
                                altImgText: "Java Version verification on command prompt"
                            }
                        }
                    ]
                },
                {
                    blocks: [
                        {
                            text: "If you didn't get any details after the command, then there might be an issue with your installation process or <strong>JAVA_HOME or Bin Path's</strong> setup. Re-check the paths the file got installed. And also close all your existing command prompts and open a new command prompt and try the same."
                        }
                    ]
                }
            ]
        }
    ]
}