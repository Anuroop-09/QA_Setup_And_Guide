export const verifyMavenVersion = {
    sectionId: "verify_maven",
    subsections: [
        {
            subtitle: "Verify Maven via Command Prompt",
            contents: [
                {
                    blocks: [
                        {
                            text: "Now we are set with required things. Lets verify the version from Command prompt. Open <strong>Command Propmt</strong> and type the following command <code class='content-unit__text-code'>mvn --version</code> and hit the Enter. Verify the version details.",
                            image: {
                                imgSource: "img/installations/maven/9_maven_version_check.png",
                                altImgText: "Maven Version verification on command prompt"
                            }
                        }
                    ]
                },
                {
                    blocks: [
                        {
                            text: "If you didn't get any details after the command, then there might be an issue with your <strong>MAVEN_HOME or Bin Path's</strong> setup. Re-check the paths the file got extracted. And also close all your existing command prompts and open a new command prompt and try the same."
                        }
                    ]
                }
            ]
        }
    ]
}