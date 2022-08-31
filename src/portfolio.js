/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Aman",
  logo_name: "import aman.parary as ap",
  //nickname: "hrishi1999 / picleric",
  full_name: "Aman Parary",
  subTitle: "Data Scientist, Machine Learning Enthusiast. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1XgFEzHRf1Kx5u2ZoCklEbgqeTKUCO_gI/view?usp=sharing",
  mail: "mailto:aman.parary@ucdconnect.ie",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/aman2388",
  linkedin: "https://www.linkedin.com/in/aman-parary-1677b91b5/",
  gmail: "aman.parary@ucdconnect.ie",
};

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience of working with Data Analytics, Machine Learning and Deep Learning",
        "⚡ Certifications by Udemy online",
        "⚡ Experience with 10+ projects, including academic and personal",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "logos:streamlit",
          style: {
            backgroundColor: "transparent",
            color: "#6E6E6E",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib-icon",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "logos:seaborn",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "cib:apache-spark",
          style: {
            color: "#00A7D0",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#00A7D0",
          },
        },
      ],
    },
    {
      title: "Website Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed building responsive front-end websites using ReactJS",
        "⚡ Incorporated website version control with Git",
        "⚡ Designed and deployed WordPress websites for small business",
        "⚡ Experience with website migration, hosting and domain registration",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "bi:wordpress",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Databases & Cloud Computing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platforms",
        "⚡ Experinece data management and wrangling with relational and non-relational databases",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Deta Cloud",
          fontAwesomeClassname: "dashicons:database",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UCD Smurfit Business School",
      subtitle: "MSc. Financial Data Science",
      logo_path: "ucd.png",
      alt_name: "fin",
      duration: "2022 - 2023",
      descriptions: ["⚡ Expected to graduate in September 2023"],
      website_link:
        "https://www.smurfitschool.ie/programmes/masters/mscinfinancialdatascience/",
    },
    {
      title: "University College Dublin",
      subtitle: "BSc. Computer Science with Data Science",
      logo_path: "ucd.png",
      alt_name: "comp",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Grade: First Class Honours",
        "⚡ Relevant modules: Distributed Systems, Machine Learning, Recommender Systems, Cloud Computing, Programming for Big Data",
      ],
      website_link: "https://www.myucd.ie/courses/science/computer-science/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "The Data Science Course 2020: Complete Data Science Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-38293df6-35be-4de5-abc6-ade796dc5bb0/",
      alt_name: "udemy",
      color_code: "#47A048",
    },
    {
      title: "SQL - MySQL for Data Analytics and Business Intelligence",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-f1ebe3e0-af4c-417d-a59c-5880bbd8b41a/",
      alt_name: "udemy",
      color_code: "#F6B808",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I've completed an internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   experiences: [
    //     {
    //       title: "Full Stack Developer",
    //       company: "Quicko",
    //       company_url: "https://quicko.com/",
    //       logo_path: "quicko.jpg",
    //       duration: "June 2021 - October 2021",
    //       location: "Ahmedabad",
    //       description:
    //         "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
    //       color: "#2962FF",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Scientist",
          company: "Liberty Mutual Insurance",
          company_url: "https://www.libertymutual.com/",
          logo_path: "liberty.png",
          duration: "March 2021 - August 2021",
          location: "Dublin, Ireland",
          description: [
            "⚡Developed and deployed machine learning models to predict the retention probabilities of customers and business partners for renewals.",
            "⚡Supported Senior Data Scientist implementing price optimisation techniques and analyse impacted results",
            "⚡Designed dashboards, analysing model impact using Power-BI.",
            "⚡Presented to stakeholders, a POC of ML-Ops practises adapting to the team's data science projects.",
            "⚡Participated in all sorts of Agile ceremonies (sprint planning, sprint retrospectives, scrum stand-up call) with team sizes over ten.",
          ],
          color: "#6C63FF",
        },
        // {
        //   title: "Android App Developer Intern",
        //   company: "IAS4Sure",
        //   company_url: " ",
        //   logo_path: "buld.jpg",
        //   duration: "December 2019 - February 2020",
        //   location: "Work From Home",
        //   description:
        //     "Internship task was to make a native Android application. ",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Web Developer",
        //   company: "Wrighter Writing Solutions",
        //   company_url: " ",
        //   logo_path: "wrighter.jpg",
        //   duration: "August 2020",
        //   location: "",
        //   description: "Develop a website using PHP and jQuery.",
        //   color: "#56A4D3",
        // },
        // {
        //   title: "Front-End Developer",
        //   company: "VJ TechServe",
        //   company_url: " ",
        //   logo_path: "vjt.png",
        //   duration: "September 2020",
        //   location: "",
        //   description: "Develop a portfolio website using ReactJS",
        //   color: "#800000",
        // },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Summer of 2017 / 18 / 20",
    //       location: " ",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Google Code-In Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Winter of 2017 / 18 / 19",
    //       location: " ",
    //       description:
    //         "Day to day resposibilites of this mentorship was to help out children aged 13-17 get started with programming and open-source, review their work and approve them.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Board Member at Codeuino",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "codeuino.jpg",
    //       duration: "2018 - 2019",
    //       location: " ",
    //       description: "Previous Board during early days of Codeuino",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "BluWings Club",
    //       company: " ",
    //       company_url: " ",
    //       logo_path: "b.png",
    //       duration: "2018 - On Going",
    //       location: " ",
    //       description:
    //         "Co-Founder and President of the programming club called BluWings. Have organized several workshops which introduced programming and related tools to freshers.",
    //       color: "#D83B01",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
// const contactPageData = {
//   contactSection: {
//     title: "Contact Me",
//     profile_image_path: "ap.jpg",
//     description:
//       "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
//   },
//   blogSection: {
//     title: "Blogs",
//     subtitle:
//       "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
//     link: "https://medium.com/@hrishipatel99",
//     avatar_image_path: "blogs_image.svg",
//   },
// };

const projects = {
  data: [
    {
      id: "50",
      name: "Deep Learning for Symbol Detection",
      url: "https://github.com/aman2388/UCD_Final_Year_Project.git",
      description:
        "A research and development in integrating neural networks in conventional algorithms that recover data-bits (symbols) over wireless communication systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos-pytorch",
        },
        {
          name: "Numpy",
          iconifyClass: "logos-numpy",
        },
      ],
    },
    {
      id: "51",
      name: "Bank Marketing Campaign",
      url: "https://github.com/aman2388/Bank_Marketing_Case_Study.git",
      description:
        "Developed binary classification models to predict a customers subscription to a bank term deposit.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Scikit-learn",
          iconifyClass: "carbon:machine-learning",
        },
        {
          name: "Optuna",
          iconifyClass: "ph:spiral-bold",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos:matplotlib-icon",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
      ],
    },
    {
      id: "0",
      name: "Streamlit: Bank Marketing Campaign",
      url: "https://streamlit-classification.herokuapp.com/",
      description:
        "Applied ML-Ops practises creating dashboards with incoming data sources and monitoring model performance.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
        },
        {
          name: "Matplotlib",
          iconifyClass: "logos:matplotlib-icon",
        },
        {
          name: "Seaborn",
          iconifyClass: "logos:seaborn-icon",
        },
        {
          name: "Streamlit",
          iconifyClass: "logos:streamlit",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //contactPageData,
  projects,
};
