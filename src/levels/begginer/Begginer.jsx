import React, { useState } from 'react';
import './Begginer.css';
import { href } from 'react-router-dom';

function Begginer() {

  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div className="begginer-page container-fluid">
      {/* Hero Section */}
      <section className="begginer-hero text-center ">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Beginner's Coding Journey</h1>
          <p className="lead mb-4">Everything you need to start your programming career in one place</p>
          <button className="btn btn-primary btn-lg">Start Learning Now</button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container my-5">
        {/* Learning Path Section */}
        <section className="learning-path mb-5">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">Start from the Basics of Coding</h2>
              <p className="lead">We'll guide you through the fundamentals of programming step by step</p>
              <p>You will learn the core concepts of these essential technologies:</p>
              <div className="row">
                {['HTML', 'CSS', 'JavaScript', 'C Basics', 'Java Basics', 'Python Basics'].map((tech, index) => (
                  <div key={index} className="col-md-6 mb-2">
                    <div className="tech-card p-3">
                      <i className={`bi ${getTechIcon(tech)} me-2`}></i>
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Coding Basics"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section mb-5">
          <h2 className="section-title text-center mb-5">Top Learning Resources</h2>
          <div className="row">
            {[
              { name: 'W3Schools', desc: 'Free web development tutorials', icon: 'bi-globe', href: "https://www.w3schools.com/" },
              { name: 'Codecademy', desc: 'Interactive coding courses', icon: 'bi-laptop', href: "https://www.codecademy.com/" },
              { name: 'FreeCodeCamp', desc: 'Project-based learning', icon: 'bi-code-square', href: "https://www.freecodecamp.org/" },
              { name: 'Coursera', desc: 'University-level courses', icon: 'bi-mortarboard', href: "https://www.coursera.org/" },
              { name: 'Udemy', desc: 'Affordable video courses', icon: 'bi-play-circle', href: "https://www.udemy.com/" },
              { name: 'MDN Web Docs', desc: 'Comprehensive documentation', icon: 'bi-file-text', href: "https://developer.mozilla.org/en-US/ " }
            ].map((resource, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="resource-card card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`${resource.icon} resource-icon mb-3`}></i>
                    <h3 className="h5">{resource.name}</h3>
                    <p className="text-muted">{resource.desc}</p>
                    <a href={resource.href} className="btn btn-outline-primary btn-sm" target='_blank'>Explore</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Projects Section */}
        <section className="projects-section mb-5">
          <h2 className="section-title text-center mb-5">Beginner Projects</h2>
          <div className="row">
            {[
              {
                name: 'Personal Portfolio',
                desc: 'Showcase your work and skills in a personal website.',
                skills: ['HTML', 'CSS', 'JavaScript']
              },
              {
                name: 'Simple Calculator',
                desc: 'Practice basic arithmetic and DOM manipulation.',
                skills: ['JavaScript', 'DOM']
              },
              {
                name: 'To-Do List',
                desc: 'Learn how to manage state and local storage.',
                skills: ['JavaScript', 'Local Storage']
              },
              {
                name: 'Weather App',
                desc: 'Use external APIs to fetch and display weather data.',
                skills: ['Fetch API', 'JSON']
              },
              {
                name: 'Simple Blog',
                desc: 'Understand CRUD operations and basic UI.',
                skills: ['HTML', 'CSS', 'JavaScript']
              },
              {
                name: 'Quiz App',
                desc: 'Build quizzes to test knowledge and logic.',
                skills: ['Arrays', 'Functions']
              }
            ].map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="project-card card h-100 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5">{project.name}</h3>
                    <p>{project.desc}</p>
                    <div className="skills-tags">
                      {project.skills.map((skill, i) => (
                        <span key={i} className="badge bg-light text-dark me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer bg-transparent">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => setSelectedProject(project)} // Set selected project on click
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for displaying project details */}
        {selectedProject && (
          <div
            className="modal fade show"
            style={{
              display: 'block',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1050,
            }}
            onClick={() => setSelectedProject(null)} // Close when clicking backdrop
          >
            <div
              className="modal-dialog modal-dialog-scrollable modal-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              style={{ pointerEvents: 'auto' }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="projectModalLabel">
                    {selectedProject.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setSelectedProject(null)}
                  />
                </div>
                <div className="modal-body">
                  <p><strong>Description:</strong> {selectedProject.desc}</p>
                  <p><strong>Skills:</strong></p>
                  <ul>
                    {selectedProject.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setSelectedProject(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tools Section */}
        <section className="tools-section mb-5">
          <h2 className="section-title text-center mb-5">Essential Developer Tools</h2>
          <div className="row justify-content-center">
            {['Visual Studio Code', 'Git & GitHub', 'Postman', 'Figma', 'Canva'].map((tool, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="tool-card text-center p-3">
                  <i className={`bi ${getToolIcon(tool)} tool-icon mb-3`}></i>
                  <h3 className="h6">{tool}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Channels Section */}
        <section className="youtube-section">
          <h2 className="section-title text-center mb-5">Recommended YouTube Channels</h2>
          <div className="row">
            {[
              { name: 'Apna College', subs: '2.3M', url: 'https://youtu.be/HcOc7P5BMi4?si=MM0n_fT6AZrgoDM6' },
              { name: 'CodeWithHarry', subs: '1.8M', url: 'https://youtu.be/ntLJmHOJ0ME?si=_XaTisC6HIhFJAdJ' },
              { name: 'CodeWithMosh', subs: '1.5M', url: 'https://youtu.be/_uQrJ0TkZlc?si=bwn59Gxm4mKUvb6g' },
              { name: 'Traversy Media', subs: '1.9M', url: 'https://youtu.be/PoFkd42WvQA?si=C7I4wJQ2ZuUQjp4T' },
              { name: 'Academind', subs: '700K', url: 'https://youtu.be/oQiEZ8adag0?si=aRwnEKU1NiqFUB1P' },
              { name: 'freeCodeCamp', subs: '5.2M', url: 'https://youtu.be/9He4UBLyk8Y?si=wszDBUPuG9s52OiU' }
            ].map((channel, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="channel-card card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="channel-avatar me-3">
                        {channel.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="h5 mb-0">{channel.name}</h3>
                        <small className="text-muted">{channel.subs} subscribers</small>
                      </div>
                    </div>
                    <div className="ratio ratio-16x9 mb-3">
                      <iframe width="560" height="315" src={channel.url}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                      </iframe>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent">
                    <a href={channel.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-danger">
                      <i className="bi bi-youtube me-1"></i> View Video
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

// Helper functions
function getTechIcon(tech) {
  const icons = {
    'HTML': 'bi-filetype-html',
    'CSS': 'bi-filetype-css',
    'JavaScript': 'bi-filetype-js',
    'C Basics': 'bi-filetype-c',
    'Java Basics': 'bi-filetype-java',
    'Python Basics': 'bi-filetype-py'
  };
  return icons[tech] || 'bi-code-square';
}

function getToolIcon(tool) {
  const icons = {
    'Visual Studio Code': 'bi-code-slash',
    'Git & GitHub': 'bi-git',
    'Postman': 'bi-plug',
    'Figma': 'bi-palette',
    'Canva': 'bi-images'
  };
  return icons[tool] || 'bi-tools';
}

export default Begginer;