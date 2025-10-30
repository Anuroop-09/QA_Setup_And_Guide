export const initializeJenkins = {
    sectionId: "initialize_jenkins",
    subsections: [
        {
            subtitle: "Start your using Jenkins",
            contents: [
                {
                    contentTitle: "Step 1: Start the Jenkins Server",
                    blocks: [
                        {
                            text: "After setup is completed you don't need to do this process again. You can start using the Jenkins directly by starting war file. Type the following command on the terminal <code class='content-unit__text-code'>java -jar jenkins.war</code> from the jenkins.war file folder level and hit <strong>Enter</strong>.",
                            image: {
                                imgSource: "img/installations/jenkins/9_jenkins_launch.png",
                                altImgText: "Jenkins Launch Process"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 2: Verify the Jenkins Server",
                    blocks: [
                        {
                            text: "Now the Jenkins server is completely loaded and hosted on PORT 8080.",
                            image: {
                                imgSource: "img/installations/jenkins/10_jenkins_server_started.png",
                                altImgText: "Jenkins Server Started"
                            }
                        }
                    ]
                },
                {
                    contentTitle: "Step 3: Launch the Jenkins Application",
                    blocks: [
                        {
                            text: "Now, navigate to any browser type the following url <strong>https://localhost:8080</strong> (by default it serves on 8080). You can see the Login page.",
                            image: {
                                imgSource: "img/installations/jenkins/11_jenkins_login_page.png",
                                altImgText: "Jenkins Login Page"
                            }
                        }
                    ]
                },
            ]
        }
    ]
}