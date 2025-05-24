import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const learningPath = [
    {
      stage: 'Foundations',
      topics: [
        {
          title: 'HTML5',
          description: 'Structure of web pages',
          concepts: ['Semantic HTML', 'Forms', 'Accessibility', 'SEO Basics'],
          resources: [
            { name: 'MDN HTML Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'HTML5 Specification', url: 'https://html.spec.whatwg.org/' }
          ]
        },
        {
          title: 'CSS3',
          description: 'Styling web pages',
          concepts: ['Flexbox', 'Grid', 'Animations', 'Responsive Design'],
          resources: [
            { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
            { name: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' }
          ]
        },
        {
          title: 'JavaScript Basics',
          description: 'Core programming concepts',
          concepts: ['Variables', 'Functions', 'DOM Manipulation', 'ES6+ Features'],
          resources: [
            { name: 'JavaScript.info', url: 'https://javascript.info/' },
            { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' }
          ]
        }
      ]
    },
    {
      stage: 'Frontend Development',
      topics: [
        {
          title: 'React.js',
          description: 'Popular frontend library',
          concepts: ['Components', 'Hooks', 'State Management', 'Context API'],
          resources: [
            { name: 'React Docs', url: 'https://reactjs.org/docs/getting-started.html' },
            { name: 'React Patterns', url: 'https://reactpatterns.com/' }
          ]
        },
        {
          title: 'Advanced CSS',
          description: 'Modern styling techniques',
          concepts: ['CSS Variables', 'BEM Methodology', 'CSS-in-JS', 'PostCSS'],
          resources: [
            { name: 'CSS Grid Garden', url: 'https://cssgridgarden.com/' },
            { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
          ]
        },
        {
          title: 'State Management',
          description: 'Managing application state',
          concepts: ['Redux', 'Context API', 'Recoil', 'Zustand'],
          resources: [
            { name: 'Redux Essentials', url: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts' }
          ]
        }
      ]
    },
    {
      stage: 'Backend Development',
      topics: [
        {
          title: 'Node.js',
          description: 'JavaScript runtime environment',
          concepts: ['Express.js', 'REST APIs', 'Middleware', 'Authentication'],
          resources: [
            { name: 'Node.js Docs', url: 'https://nodejs.org/en/docs/' },
            { name: 'Express Guide', url: 'https://expressjs.com/' }
          ]
        },
        {
          title: 'Databases',
          description: 'Storing and managing data',
          concepts: ['SQL', 'MongoDB', 'ORM/ODM', 'Database Design'],
          resources: [
            { name: 'SQLZoo', url: 'https://sqlzoo.net/' },
            { name: 'MongoDB University', url: 'https://university.mongodb.com/' }
          ]
        },
        {
          title: 'API Design',
          description: 'Building robust interfaces',
          concepts: ['REST Principles', 'GraphQL', 'WebSockets', 'gRPC'],
          resources: [
            { name: 'REST API Tutorial', url: 'https://restfulapi.net/' }
          ]
        }
      ]
    },
    {
      stage: 'Advanced Concepts',
      topics: [
        {
          title: 'Performance Optimization',
          description: 'Making apps blazing fast',
          concepts: ['Lazy Loading', 'Code Splitting', 'Caching', 'Bundle Analysis'],
          resources: [
            { name: 'Web.dev Performance', url: 'https://web.dev/learn/#performance' }
          ]
        },
        {
          title: 'Testing',
          description: 'Ensuring code quality',
          concepts: ['Jest', 'React Testing Library', 'Cypress', 'TDD'],
          resources: [
            { name: 'Testing JavaScript', url: 'https://testingjavascript.com/' }
          ]
        },
        {
          title: 'DevOps & Deployment',
          description: 'Getting apps to production',
          concepts: ['CI/CD', 'Docker', 'AWS/GCP', 'Serverless'],
          resources: [
            { name: 'Docker Getting Started', url: 'https://docs.docker.com/get-started/' }
          ]
        }
      ]
    }
  ];

  const projectIdeas = [
    {
      level: 'Beginner',
      ideas: [
        'Personal Portfolio Website',
        'To-Do List App',
        'Weather App with API',
        'Recipe Finder'
      ]
    },
    {
      level: 'Intermediate',
      ideas: [
        'E-commerce Store',
        'Blog Platform with CMS',
        'Real-time Chat Application',
        'Task Management System'
      ]
    },
    {
      level: 'Advanced',
      ideas: [
        'Social Media Platform',
        'Video Conferencing App',
        'Stock Trading Dashboard',
        'AI-Powered Application'
      ]
    }
  ];

  return (
    <div className="webdev-page">
      {/* Hero Section */}
      <section className="webdev-hero text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Web Development Roadmap</h1>
          <p className="lead mb-4">
            Master modern web development from fundamentals to advanced concepts
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg">Start Learning</button>
            <button className="btn btn-outline-light btn-lg">View Projects</button>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <div className="container my-5">
        {learningPath.map((stage, index) => (
          <section key={index} className="learning-stage mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="stage-number me-3">{index + 1}</div>
              <h2 className="stage-title mb-0">{stage.stage}</h2>
            </div>
            
            <div className="row">
              {stage.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="col-md-6 col-lg-4 mb-4">
                  <div className="topic-card card h-100 shadow-sm">
                    <div className="card-body">
                      <h3 className="h5">{topic.title}</h3>
                      <p className="text-muted small">{topic.description}</p>
                      
                      <div className="concepts mb-3">
                        <h6 className="mb-2">Key Concepts:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {topic.concepts.map((concept, i) => (
                            <span key={i} className="badge bg-light text-dark">{concept}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="resources">
                        <h6 className="mb-2">Resources:</h6>
                        <ul className="list-unstyled">
                          {topic.resources.map((resource, i) => (
                            <li key={i} className="mb-1">
                              <a 
                                href={resource.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-decoration-none"
                              >
                                <i className="bi bi-link-45deg me-1"></i>
                                {resource.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <button className="btn btn-sm btn-outline-primary">
                        Practice Exercises <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Project Ideas */}
      <section className="project-ideas py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Project Ideas</h2>
          <div className="row">
            {projectIdeas.map((level, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="project-level-card card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h5 text-center mb-4">{level.level} Projects</h3>
                    <ul className="list-unstyled">
                      {level.ideas.map((idea, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-transparent text-center">
                    <button className="btn btn-sm btn-outline-primary">
                      View Tutorials <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Essential Web Dev Tools</h2>
          <div className="row">
            {[
              {
                name: 'VS Code',
                category: 'Code Editor',
                icon: 'bi-code-square'
              },
              {
                name: 'Git & GitHub',
                category: 'Version Control',
                icon: 'bi-git'
              },
              {
                name: 'Chrome DevTools',
                category: 'Debugging',
                icon: 'bi-browser-chrome'
              },
              {
                name: 'Postman',
                category: 'API Testing',
                icon: 'bi-plug'
              },
              {
                name: 'Figma',
                category: 'UI/UX Design',
                icon: 'bi-palette'
              },
              {
                name: 'Docker',
                category: 'Containerization',
                icon: 'bi-box'
              }
            ].map((tool, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                <div className="tool-card text-center p-3">
                  <i className={`bi ${tool.icon} tool-icon mb-3`}></i>
                  <h3 className="h6 mb-1">{tool.name}</h3>
                  <small className="text-muted">{tool.category}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;