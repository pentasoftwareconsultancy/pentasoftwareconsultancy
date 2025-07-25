import React from 'react'
import styles from "./SoftwareTesting.module.css"

function SoftwareTesting() {
  return (
    <div className={styles.SoftwareTesting}>

      <div className={styles.Box}>
        <div className={styles.image}>
          <img src="https://i.pinimg.com/736x/f6/79/69/f67969ef6d620453c939b29f733c71d0.jpg" /></div>
        <div className={styles.Line}>Automation Testing Vs. Manual Testing: What’s the Difference</div>
        <div className={styles.sent}>Automation testing is a process of changing any manual test case into the test scripts
          by using automation testing tools, and scripting or programming language is called automation</div>
      </div>
      <div className={styles.section}>
        <div className={styles.Box1}>
          <div className={styles.image1}>
            <img src="https://i.pinimg.com/736x/18/78/a7/1878a722b4e3eec2c4805a6ef9d47525.jpg" /></div>
          <div className={styles.No}>
            <div className={styles.Line1}>What is Manual Testing?</div>
            <div className={styles.sent2}>Manual testing is testing of the software where tests are executed manually by a QA Analyst. It is performed to discover bugs in software under development.

              In Manual testing, the tester checks all the essential features of the given application or software. In this process, the software testers execute the test cases and generate the test reports without the help of any automation software testing tools.</div>
          </div></div>
        <div className={styles.Box2}>
          <div className={styles.Name}>What is Automation Testing?</div>
          <div className={styles.Lines}>
            In Automated Software Testing, testers write code/test scripts to automate test execution. Testers use appropriate automation tools to develop the test scripts and validate the software. The goal is to complete test execution in a less amount of time.<br /><br />
            Automated testing entirely relies on the pre-scripted test which runs automatically to compare actual result with the expected results. This helps the tester to determine whether or not an application performs as expected.<br /><br />
            Automated testing allows you to execute repetitive task and regression test without the intervention of manual tester. Even though all processes are performed automatically, automation requires some manual effort to create initial testing scripts.
          </div>
        </div>



        <div className={styles.Name2}>Difference Between Manual Testing and Automation Testing</div>
        <div className={styles.Box3}>
          <div className={styles.Section1}>
            <div className={styles.Header1}>Parameter</div>
            <div className={styles.No1}>Definition<br /><br />
              Processing time<br /><br />Exploratory Testing</div>
          </div>

          <div className={styles.Section2}>
            <div className={styles.Header2}>Automation Testing</div>
            <div className={styles.No3}>Automation Testing uses automation tools to execute test cases.<br /><br />
              Automated testing is significantly faster than a manual approach.<br /><br />
              Automation does not allow random testing </div>
          </div>

          <div className={styles.Section3}>
            <div className={styles.Header3}>Manual Testing</div>
            <div className={styles.No3}>In manual testing, test cases are executed by a human tester and software.<br /><br />
              Manual testing is time-consuming and takes up human resources.<br /><br />
              Exploratory testing is possible in Manual Testing</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SoftwareTesting
