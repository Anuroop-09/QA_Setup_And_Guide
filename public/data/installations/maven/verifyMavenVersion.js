export const verifyMavenVersion = {
    sectionId: "verify_maven",
    subsections: [
        {
            subtitle: "Verify Maven Via Command Prompt",
            contents: [
                {
                    blocks: [
                        {
                            text: "Now we are set with required things. Lets verify the version from Command prompt. Open <strong>Command Propmt</strong> and type the following command <code class='content-unit__text-code'>mvn --version</code> and hit the Enter. Verify the version details.",
                            image: {
                                imgSource: "img/installations/maven/8_maven_version_check.png",
                                altImgText: "Maven Version verification on command prompt"
                            }
                        }
                    ]
                },
                {
                    blocks: [
                        {
                            text: "If you didn't get any details after the command, then there might be an issue with your installation process or <strong>MAVEN_HOME</strong> path setup. Re-check the paths the file got installed. And also close all your existing command prompts and open a new command prompt and try the same."
                        }
                    ]
                }
            ]
        }
    ]
}