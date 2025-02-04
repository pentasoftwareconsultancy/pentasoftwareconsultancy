const softwareTestingData = {
  title: "Automation Testing Vs. Manual Testing: What’s the Difference",
  subtitle:
    "Automation testing is a process of transforming manual test cases into test scripts using automation testing tools, scripting, or programming languages.",
  sections: [
    {
      image: "https://i.pinimg.com/736x/18/78/a7/1878a722b4e3eec2c4805a6ef9d47525.jpg",
      title: "Manual Testing",
      description: [
        "Manual testing involves testing software where tests are executed manually by a QA Analyst. It is performed to identify bugs in the software under development.",
        "The tester manually checks all the essential features of the given application or software.",
        "In manual testing, software testers execute test cases and generate test reports without the help of any automation tools.",
      ],
      disadvantages: [
        "Less reliable testing method as it’s conducted by a human, making it prone to mistakes and errors.",
        "Manual testing processes cannot be recorded, making it impossible to reuse the same test.",
        "Certain tasks are difficult to perform manually, which may increase the software testing phase duration.",
      ],
    },
    {
      title: "What is Automation Testing?",
      description: [
        "Automation testing involves writing scripts to automate the execution of test cases.",
        "It uses appropriate tools to develop scripts and validate software.",
        "Automation testing relies on pre-scripted tests that run automatically to compare actual results with expected outcomes.",
      ],
    },

    
  ],
  comparison: {
    title: "Difference Between Manual Testing and Automation Testing",
    parameters: [
      {
        parameter: "Definition",
        automation: "Automation testing uses tools and scripts to automate test case execution.",
        manual: "Manual testing requires human intervention to execute test cases without using tools.",
      },
      {
        parameter: "Processing Time",
        automation: "Significantly faster due to automation tools and scripts.",
        manual: "Time-consuming as it relies on human execution.",
      },
      {
        parameter: "Exploratory Testing",
        automation: "Not suitable for exploratory testing due to predefined scripts.",
        manual: "Allows exploratory testing as testers can interact dynamically with the application.",
      },
    ],
  },
};

export default softwareTestingData;
