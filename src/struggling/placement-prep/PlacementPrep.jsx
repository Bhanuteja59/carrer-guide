import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PlacementPrep.css";

const PlacementPrep = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Placement Preparation Hub</h1>
      <div className="row g-4">
        {sections.map((section, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">{section.title}</h4>
                <ul className="list-unstyled">
                  {section.topics.map((topic, i) => (
                    <li key={i}>📘 {topic}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <h6>📺 Recommended Videos:</h6>
                  {section.videos.map((video, i) => (
                    <a href={video.url} key={i} target="_blank" rel="noreferrer" className="d-block mb-1 text-decoration-none text-primary">
                      ▶️ {video.title}
                    </a>
                  ))}
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

const sections = [
  {
    title: "Aptitude",
    topics: ["Percentages", "Time & Work", "Speed & Distance", "Profit & Loss"],
    videos: [
      { title: "Aptitude Tricks by TalentBattle", url: "https://www.youtube.com/watch?v=tzsgS9fRYbU" },
      { title: "Quantitative Aptitude Crash Course", url: "https://www.youtube.com/watch?v=85z53bAebsI" },
    ],
    links: [
      { title: "IndiaBix Aptitude", url: "https://www.indiabix.com/aptitude/questions-and-answers/" },
      { title: "GeeksforGeeks Quant", url: "https://www.geeksforgeeks.org/quantitative-aptitude/" },
    ],
  },
  {
    title: "Logical Reasoning",
    topics: ["Puzzles", "Blood Relations", "Seating Arrangement", "Syllogism"],
    videos: [
      { title: "Reasoning Basics | Unacademy", url: "https://www.youtube.com/watch?v=ZwlxZtXYrIA" },
    ],
    links: [
      { title: "IndiaBix Reasoning", url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/" },
      { title: "Hitbullseye", url: "https://www.hitbullseye.com/reasoning/" },
    ],
  },
  {
    title: "Verbal Ability",
    topics: ["Reading Comprehension", "Synonyms & Antonyms", "Error Spotting"],
    videos: [
      { title: "Verbal Tips for Placement", url: "https://www.youtube.com/watch?v=Ugu8QWyvxbY" },
    ],
    links: [
      { title: "IndiaBix Verbal", url: "https://www.indiabix.com/verbal-ability/questions-and-answers/" },
      { title: "ExamRace English", url: "https://www.examrace.com/English-Study-Material/" },
    ],
  },
  {
    title: "Coding Practice",
    topics: ["Arrays & Strings", "Recursion", "Linked List", "Sorting Algorithms"],
    videos: [
      { title: "Striver’s DSA Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw" },
      { title: "Love Babbar DSA", url: "https://www.youtube.com/watch?v=2Ji-clqUYnA" },
    ],
    links: [
      { title: "LeetCode", url: "https://leetcode.com/" },
      { title: "GeeksforGeeks Coding", url: "https://practice.geeksforgeeks.org/" },
    ],
  },
];

export default PlacementPrep;
