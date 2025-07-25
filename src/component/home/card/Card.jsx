import React, { useState } from 'react';
import styles from "./Card.module.css";
import { FaWindows } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { ImDatabase } from "react-icons/im";
import { GiRobotAntennas } from "react-icons/gi";
import { IoLogoAndroid } from "react-icons/io5";
import { RiJavaFill } from "react-icons/ri";
import { MdSettingsApplications } from "react-icons/md";
import { MdOutlineTrendingUp } from 'react-icons/md';

function Card() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const cardData = [
    {
      id: 1,
      title: "Software Testing",
      icon: <FaWindows size={50} />,
      shortDesc: "Automation testing is a process of changing any manual test case into the test scripts by using automation testing tools, scripting or programming",
      longDesc: "Software testing is a crucial part of the software development lifecycle that ensures quality and reliability. Our comprehensive testing services include unit testing, integration testing, system testing, and user acceptance testing. We specialize in automation testing using industry-leading tools like Selenium, Appium, and JMeter to improve efficiency and coverage. Our testing methodologies help identify defects early, reduce costs, and accelerate time-to-market while ensuring your applications perform flawlessly across all platforms and devices.",
      features: [
        "Automated test script development",
        "Performance and load testing",
        "Cross-browser and cross-device testing",
        "CI/CD pipeline integration",
        "Test management and reporting"
      ],
      techStack: ["Selenium", "Appium", "JMeter", "TestNG", "Cucumber"]
    },
    {
      id: 2,
      title: "Sales Force Services",
      icon: <FaSalesforce size={50} />,
      shortDesc: "This part of the Salesforce platform is focused on providing support and help to the customers. This helps in retaining the customers.",
      longDesc: "Salesforce services empower businesses to transform their customer relationship management. We offer end-to-end Salesforce solutions including implementation, customization, integration, and ongoing support. Our certified experts help you leverage Salesforce CRM, Marketing Cloud, Service Cloud, and Commerce Cloud to streamline operations, enhance customer engagement, and drive sales growth. We provide tailored solutions that align with your business processes and help you maximize ROI from your Salesforce investment.",
      features: [
        "CRM implementation and customization",
        "Sales Cloud and Service Cloud configuration",
        "Marketing automation",
        "Integration with existing systems",
        "Training and support"
      ],
      techStack: ["Salesforce CRM", "Apex", "Visualforce", "Lightning", "Heroku"]
    },
    {
      id: 3,
      title: "AWS Services",
      icon: <FaAws size={50} />,
      shortDesc: "AWS has significantly more services, and more features within those services, than any other cloud provider–from infrastructure technologies",
      longDesc: "Amazon Web Services (AWS) offers a comprehensive, secure cloud services platform with compute power, database storage, content delivery, and other functionality. Our AWS certified team provides services including cloud migration, architecture design, DevOps implementation, security configuration, and cost optimization. We help businesses leverage AWS services like EC2, S3, Lambda, RDS, and more to build scalable, reliable applications while reducing infrastructure costs and improving operational efficiency.",
      features: [
        "Cloud architecture design",
        "Migration and deployment",
        "Serverless applications",
        "Security and compliance",
        "Cost optimization"
      ],
      techStack: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"]
    },
    {
      id: 4,
      title: "Data Science & Machine learning",
      icon: <ImDatabase size={50} />,
      shortDesc: "Data science and machine learning are two concepts that fall within the field of technology and using data to further how we create and innovate.",
      longDesc: "Our data science and machine learning services help organizations turn raw data into actionable insights. We offer predictive analytics, natural language processing, computer vision, recommendation systems, and deep learning solutions. Our team of data scientists uses advanced algorithms and frameworks like TensorFlow, PyTorch, and Scikit-learn to build models that solve complex business problems. From data collection and cleaning to model deployment and monitoring, we provide end-to-end solutions that drive data-driven decision making.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "Recommendation systems",
        "Model deployment and monitoring"
      ],
      techStack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas"]
    },
    {
      id: 5,
      title: "RPA (Robotics Processing Automation)",
      icon: <GiRobotAntennas size={50} />,
      shortDesc: "With RPA, software users create software robots, or 'bots', that can learn, mimic, and then execute rules-based business processes.",
      longDesc: "Robotic Process Automation (RPA) enables businesses to automate repetitive, rule-based tasks to improve efficiency and accuracy. We implement RPA solutions using industry-leading platforms like UiPath, Automation Anywhere, and Blue Prism. Our services include process assessment, bot development, deployment, and maintenance. RPA can be applied to various functions including data entry, invoice processing, customer onboarding, and report generation, typically delivering 40-80% cost savings while eliminating human errors.",
      features: [
        "Process automation",
        "Bot development",
        "Workflow optimization",
        "Integration with legacy systems",
        "Monitoring and analytics"
      ],
      techStack: ["UiPath", "Automation Anywhere", "Blue Prism", "Python", "AI/ML integration"]
    },
    {
      id: 6,
      title: "Apps Development (Android & iOS)",
      icon: <IoLogoAndroid size={50} />,
      shortDesc: "Modern companies are seeking to expand their business into the digital world and more and more companies",
      longDesc: "We develop high-performance, user-friendly mobile applications for both Android and iOS platforms. Our full-cycle app development services include UI/UX design, native and cross-platform development, API integration, testing, and deployment. Using technologies like Kotlin, Swift, React Native, and Flutter, we create apps that deliver seamless user experiences across all devices. Whether you need a consumer-facing app, enterprise solution, or IoT-enabled application, we build secure, scalable mobile solutions that drive engagement and business growth.",
      features: [
        "Native iOS and Android development",
        "Cross-platform solutions",
        "UI/UX design",
        "API integration",
        "App store deployment"
      ],
      techStack: ["Kotlin", "Swift", "React Native", "Flutter", "Firebase"]
    },
    {
      id: 7,
      title: "Java Technology",
      icon: <RiJavaFill size={55} />,
      shortDesc: "Java is a programming language and Java is high-level, class-based, object-oriented programming language computing platform first released by Sun Microsystems in 1995 (now owned by Oracle).",
      longDesc: "Java remains one of the most popular and versatile programming languages. Our Java experts develop robust, scalable applications using Spring Boot, Hibernate, Microservices, and other modern Java frameworks. We offer services including enterprise application development, legacy system modernization, performance optimization, and cloud-native Java solutions. Java's platform independence, strong memory management, and rich ecosystem make it ideal for building everything from web applications to big data solutions and IoT systems.",
      features: [
        "Enterprise application development",
        "Microservices architecture",
        "Spring framework expertise",
        "Performance optimization",
        "Cloud-native solutions"
      ],
      techStack: ["Java EE", "Spring Boot", "Hibernate", "Microservices", "Kubernetes"]
    },
    {
      id: 8,
      title: "SAP Application Support",
      icon: <MdSettingsApplications size={50} />,
      shortDesc: "Most SAP user companies are facing the challenge of managing their investments in SAP system successfully and professionally",
      longDesc: "Our SAP application support services ensure your SAP systems run smoothly and deliver maximum business value. We provide 24/7 monitoring, incident management, performance tuning, patch management, and user support. Our SAP-certified consultants help with configuration, customization, and integration with other enterprise systems. We support all SAP modules including FI/CO, MM, SD, HCM, and SCM, helping you maintain system stability, security, and compliance while optimizing operational costs.",
      features: [
        "24/7 system monitoring",
        "Incident management",
        "Performance optimization",
        "Patch and upgrade management",
        "User training and support"
      ],
      techStack: ["SAP FI/CO", "SAP MM", "SAP SD", "SAP HCM", "SAP SCM"]
    },
    {
      id: 9,
      title: "Digital Marketing",
      icon: <MdOutlineTrendingUp size={50} />,
      shortDesc: "Boost your online presence with our comprehensive digital marketing solutions including DV-360. We specialize in SEO, social media, and targeted advertising campaigns.",
      longDesc: "Our full-service digital marketing solutions drive brand awareness, customer engagement, and revenue growth. We offer search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, email marketing, and marketing automation. Our data-driven approach combines creativity with analytics to deliver measurable results. Specializing in DV-360 and programmatic advertising, we help businesses reach their target audience effectively across multiple channels while optimizing marketing spend for maximum ROI.",
      features: [
        "Search engine optimization",
        "Programmatic advertising",
        "Social media marketing",
        "Content strategy",
        "Analytics and reporting"
      ],
      techStack: ["Google Ads", "DV-360", "Facebook Ads", "Google Analytics", "HubSpot"]
    }
  ];

  const handleReadMore = (cardId) => {
    setSelectedCard(cardData.find(card => card.id === cardId));
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className={styles.Card}>
      {/* Top Sections */}
      <div className={styles.topContainer}>
        {cardData.slice(0, 3).map((card) => (
          <div className={styles.box} key={card.id}>
            <div className={styles.logo}>{card.icon}</div>
            <div className={styles.Word}>{card.title}</div>
            <div className={styles.Line}>{card.shortDesc}</div>
            <button className={styles.Button} onClick={() => handleReadMore(card.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>
      
      <div className={styles.Container2}>
        {cardData.slice(3, 6).map((card) => (
          <div className={styles.box} key={card.id}>
            <div className={styles.logo}>{card.icon}</div>
            <div className={styles.Word}>{card.title}</div>
            <div className={styles.Line}>{card.shortDesc}</div>
            <button className={styles.Button} onClick={() => handleReadMore(card.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className={styles.Container3}>
        {cardData.slice(6, 9).map((card) => (
          <div className={styles.box} key={card.id}>
            <div className={styles.logo}>{card.icon}</div>
            <div className={styles.Word}>{card.title}</div>
            <div className={styles.Line}>{card.shortDesc}</div>
            <button className={styles.Button} onClick={() => handleReadMore(card.id)}>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isPopupOpen && selectedCard && (
        <div className={styles.modalOverlay} onClick={closePopup}>
          <div 
            className={styles.modalContent} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalLogo}>{selectedCard.icon}</div>
              <h2>{selectedCard.title}</h2>
              <button className={styles.closeButton} onClick={closePopup}>×</button>
            </div>
            
            <div className={styles.modalBody}>
              <p>{selectedCard.longDesc}</p>
              
              <h3>Key Features</h3>
              <div className={styles.featureGrid}>
                {selectedCard.features.map((feature, index) => (
                  <div className={styles.featureItem} key={index}>
                    <h4>{feature}</h4>
                  </div>
                ))}
              </div>
              
              <h3>Technology Stack</h3>
              <div className={styles.techStack}>
                {selectedCard.techStack.map((tech, index) => (
                  <span className={styles.techItem} key={index}>{tech}</span>
                ))}
              </div>
            </div>
            
            {/* <div className={styles.modalFooter}>
              <button className={styles.contactButton}>
                Contact Us
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>   
  );
}

export default Card;