import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intermediate.css';

function Intermediate() {
    const [selectedFocus, setSelectedFocus] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="intermediate-page">
            {/* Hero Section */}
            <section className="intermediate-hero text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3">Intermediate Coding Journey</h1>
                    <p className="lead mb-4">Take your skills to the next level with these intermediate concepts</p>
                    <button className="btn btn-warning btn-lg">Continue Learning</button>
                </div>
            </section>

            {/* Main Content */}
            <div className="container my-5">
                {/* Focus Area Section */}
                <section className="focus-area mb-5">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <h2 className="section-title mb-4">Choose Your Focus Area</h2>
                            <p className="lead">Build deeper expertise in specific technologies</p>
                            <div className="row mt-4">
                                {['Web Development', 'Mobile Apps', 'Data Science', 'Game Dev', 'DevOps', 'Cloud'].map((area, index) => (
                                    <div key={index} className="col-md-6 mb-3">
                                        <div
                                            className={`focus-card p-3 ${selectedFocus === area ? 'active' : ''}`}
                                            onClick={() => setSelectedFocus(area)}
                                        >
                                            <i className={`bi ${getFocusIcon(area)} me-2`}></i>
                                            {area}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                                alt="Intermediate Coding"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </section>

                {/* Intermediate Concepts Section */}
                <section className="concepts-section mb-5">
                    <h2 className="section-title text-center mb-5">Core Intermediate Concepts</h2>
                    <div className="row">
                        {[
                            {
                                title: 'Advanced JavaScript',
                                topics: ['Closures', 'Prototypes', 'Async/Await', 'ES6+ Features'],
                                icon: 'bi-filetype-js'
                            },
                            {
                                title: 'Framework Fundamentals',
                                topics: ['React/Vue', 'State Management', 'Component Lifecycle', 'Routing'],
                                icon: 'bi-puzzle'
                            },
                            {
                                title: 'API Development',
                                topics: ['REST Principles', 'Authentication', 'Middleware', 'Database Integration'],
                                icon: 'bi-plug'
                            },
                            {
                                title: 'Testing',
                                topics: ['Unit Testing', 'Integration Tests', 'Jest/Mocha', 'Test-Driven Dev'],
                                icon: 'bi-check-circle'
                            },
                            {
                                title: 'Performance',
                                topics: ['Optimization', 'Lazy Loading', 'Caching', 'Bundle Analysis'],
                                icon: 'bi-speedometer2'
                            },
                            {
                                title: 'Security',
                                topics: ['OWASP Top 10', 'CORS', 'XSS Prevention', 'Data Validation'],
                                icon: 'bi-shield-lock'
                            }
                        ].map((concept, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="concept-card card h-100 shadow-sm">
                                    <div className="card-body">
                                        <i className={`${concept.icon} concept-icon mb-3`}></i>
                                        <h3 className="h5">{concept.title}</h3>
                                        <ul className="list-unstyled">
                                            {concept.topics.map((topic, i) => (
                                                <li key={i} className="mb-2">
                                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="projects-section mb-5">
                    <h2 className="section-title text-center mb-5">Intermediate Project Ideas</h2>
                    <div className="row">
                        {[
                            {
                                name: 'E-commerce Site',
                                desc: 'Full-featured platform with cart, checkout, and payment integration.',
                                tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
                                frontend: 'React, Bootstrap, Redux',
                                backend: 'Node.js, Express, MongoDB',
                                other: 'Stripe API, JWT, Cloudinary',
                                resources: [
                                    'https://reactjs.org/docs/getting-started.html',
                                    'https://stripe.com/docs',
                                    'https://www.mongodb.com/docs/',
                                ]
                            },
                            {
                                name: 'Social Media App',
                                desc: 'Create a platform with real-time messaging and post sharing.',
                                tech: ['Firebase', 'WebSockets', 'Auth'],
                                frontend: 'React, Tailwind CSS',
                                backend: 'Firebase Realtime DB, Firebase Auth',
                                other: 'WebSockets, FCM, Firebase Hosting',
                                resources: [
                                    'https://firebase.google.com/docs',
                                    'https://socket.io/docs/v4/',
                                ]
                            },
                            {
                                name: 'Dashboard App',
                                desc: 'Analytics dashboard with charts and user management.',
                                tech: ['D3.js', 'Express', 'SQL'],
                                frontend: 'React, Chart.js or D3.js',
                                backend: 'Express, PostgreSQL',
                                other: 'JWT, REST APIs',
                                resources: [
                                    'https://www.chartjs.org/',
                                    'https://d3js.org/',
                                    'https://expressjs.com/',
                                ]
                            },
                            {
                                name: 'CMS Platform',
                                desc: 'Build your own Content Management System like WordPress.',
                                tech: ['React Admin', 'REST API', 'Auth0'],
                                frontend: 'React Admin, Bootstrap',
                                backend: 'Node.js, Express, MongoDB',
                                other: 'Auth0 for Authentication',
                                resources: [
                                    'https://marmelab.com/react-admin/',
                                    'https://auth0.com/docs',
                                ]
                            },
                            {
                                name: 'Booking System',
                                desc: 'Create a room/appointment booking system with calendar features.',
                                tech: ['FullCalendar', 'Node.js', 'JWT'],
                                frontend: 'React, FullCalendar.io',
                                backend: 'Node.js, Express',
                                other: 'JWT, Nodemailer',
                                resources: [
                                    'https://fullcalendar.io/docs/react',
                                    'https://jwt.io/introduction/',
                                ]
                            },
                            {
                                name: 'API Gateway',
                                desc: 'Create a microservices architecture with centralized API management.',
                                tech: ['GraphQL', 'Docker', 'Kong'],
                                frontend: 'Minimal — optional React dashboard',
                                backend: 'GraphQL services with Node.js',
                                other: 'Docker, Kong Gateway, Redis',
                                resources: [
                                    'https://graphql.org/learn/',
                                    'https://docs.docker.com/',
                                    'https://docs.konghq.com/',
                                ]
                            }
                        ].map((project, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4">
                                <div className="project-card card h-100 shadow-sm">
                                    <div className="card-body">
                                        <h3 className="h5">{project.name}</h3>
                                        <p>{project.desc}</p>
                                        <div className="tech-tags">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="badge bg-light text-dark me-1 mb-1">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent">
                                        <button
                                            className="btn btn-sm btn-outline-warning"
                                            data-bs-toggle="modal"
                                            data-bs-target="#projectModal"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Modal */}
                    <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="projectModalLabel">{selectedProject?.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <p><strong>Description:</strong> {selectedProject?.desc}</p>
                                    <p><strong>Frontend:</strong> {selectedProject?.frontend}</p>
                                    <p><strong>Backend:</strong> {selectedProject?.backend}</p>
                                    <p><strong>Other Technologies:</strong> {selectedProject?.other}</p>
                                    <p><strong>Resources:</strong></p>
                                    <ul>
                                        {selectedProject?.resources.map((link, i) => (
                                            <li key={i}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
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
function getFocusIcon(area) {
    const icons = {
        'Web Development': 'bi-globe',
        'Mobile Apps': 'bi-phone',
        'Data Science': 'bi-graph-up',
        'Game Dev': 'bi-controller',
        'DevOps': 'bi-gear-wide',
        'Cloud': 'bi-cloud'
    };
    return icons[area] || 'bi-code-square';
}

export default Intermediate;