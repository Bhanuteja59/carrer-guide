import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Beginner Project Ideas</h1>
      <div className="row g-4">
        {categories.map((section, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{section.title}</h4>
                <ul className="list-unstyled">
                  {section.projects.map((project, i) => (
                    <li key={i}>🔧 {project}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <h6 className="mt-3">🌐 Websites:</h6>
                  {section.links.map((link, i) => (
                    <a href={link.url} key={i} target="_blank" rel="noreferrer" className="d-block text-decoration-none text-success">
                      🔗 {link.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Web Development",
    projects: ["Portfolio Website", "Blog CMS", "Todo App", "Weather App"],
    videos: [
      { title: "HTML/CSS/JS Crash Course", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
      { title: "React Beginner Project", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
    ],
    links: [
      { title: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
      { title: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
    ],
  },
  {
    title: "Data Analysis",
    projects: ["Sales Dashboard", "COVID-19 Tracker", "Survey Analysis"],
    videos: [
      { title: "Excel for Data Analysis", url: "https://www.youtube.com/watch?v=Vl0H-qTclOg" },
      { title: "Pandas Basics", url: "https://www.youtube.com/watch?v=vmEHCJofslg" },
    ],
    links: [
      { title: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
      { title: "DataCamp", url: "https://www.datacamp.com/" },
    ],
  },
  {
    title: "Data Science",
    projects: ["Exploratory Data Analysis", "Titanic Survival Prediction"],
    videos: [
      { title: "Intro to Data Science", url: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
      { title: "Python for Data Science", url: "https://www.youtube.com/watch?v=cKxRvEZd3Mw" },
    ],
    links: [
      { title: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { title: "Coursera Data Science", url: "https://www.coursera.org/specializations/jhu-data-science" },
    ],
  },
  {
    title: "AI / Machine Learning",
    projects: ["Spam Classifier", "Image Recognition", "Movie Recommendation"],
    videos: [
      { title: "ML Crash Course", url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI" },
      { title: "Build ML Projects", url: "https://www.youtube.com/watch?v=9fz4l2Fv5XA" },
    ],
    links: [
      { title: "Google AI", url: "https://ai.google/education/" },
      { title: "Machine Learning Mastery", url: "https://machinelearningmastery.com/" },
    ],
  },
  {
    title: "Mobile App Development",
    projects: ["Notes App", "Fitness Tracker", "Currency Converter"],
    videos: [
      { title: "React Native Tutorial", url: "https://www.youtube.com/watch?v=0-S5a0eXPoc" },
      { title: "Flutter for Beginners", url: "https://www.youtube.com/watch?v=x0uinJvhNxI" },
    ],
    links: [
      { title: "Flutter Docs", url: "https://flutter.dev/docs" },
      { title: "React Native", url: "https://reactnative.dev/" },
    ],
  },
  {
    title: "Cybersecurity",
    projects: ["Password Strength Checker", "Keylogger Detector", "Basic Firewall"],
    videos: [
      { title: "Cybersecurity for Beginners", url: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
    ],
    links: [
      { title: "TryHackMe", url: "https://tryhackme.com/" },
      { title: "Hack The Box", url: "https://www.hackthebox.com/" },
    ],
  },
];

export default Projects;
