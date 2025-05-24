import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const levels = [
    {
      name: "Beginner",
      color: "primary",
      link: "/beginner",
      desc: "Start your coding journey with the basics of programming and logical thinking.",
      icon: "bi-arrow-right-circle",
    },
    {
      name: "Intermediate",
      color: "secondary",
      link: "/intermediate",
      desc: "Work on real-world projects, APIs, and start mastering frameworks.",
      icon: "bi-lightning-charge",
    },
    {
      name: "Advanced",
      color: "success",
      link: "/advanced",
      desc: "Dive into complex topics like system design, optimization, and advanced DSA.",
      icon: "bi-graph-up-arrow",
    },
  ];
  const features = [
    { src: 'https://univariety.s3.ap-south-1.amazonaws.com/img/personalised_bg.png', title: 'Personalized Guidance through Web-page', description: 'Get recommendations based on your skills and interests' },
    { src: 'https://www.pagekits.com/wp-content/uploads/2021/10/development-4536630_1280.png', title: 'Learning Resources', description: 'Access curated learning materials for your career path' },
    { src: 'https://www.edureka.co/blog/wp-content/uploads/2019/09/Picture3-4.png', title: 'Career Growth', description: 'Plan your career trajectory with our expert advice' }
  ];

  const struggles = [
    {
      name: "DSA",
      desc: "Build a strong foundation in problem-solving with essential DSA concepts like arrays, trees, graphs, and dynamic programming. This is crucial for coding interviews and competitive programming.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
      icon: "bi-diagram-3",
      links: [
        { text: "Learn DSA Basics", url: "https://www.geeksforgeeks.org/data-structures/" },
        { text: "Practice on LeetCode", url: "https://leetcode.com" },
      ],
    },
    {
      name: "Web Development",
      desc: "Master front-end and back-end technologies such as HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build beautiful, functional, and responsive web applications from scratch.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=60",
      icon: "bi-code-slash",
      links: [
        { text: "FreeCodeCamp Web Dev Path", url: "https://www.freecodecamp.org" },
        { text: "React Official Docs", url: "https://react.dev/learn" },
      ],
    },
    {
      name: "Placement Prep",
      desc: "Prepare for campus placements with aptitude, HR questions, resume tips, and mock interviews. Get real-world insights into what companies expect.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
      icon: "bi-person-check",
      links: [
        { text: "InterviewBit", url: "https://www.interviewbit.com" },
        { text: "Top Interview Questions", url: "https://www.geeksforgeeks.org/placement-papers/" },
      ],
    },
    {
      name: "Projects",
      desc: "Work on hands-on beginner to advanced projects in web development, data analysis, ML/AI, and more. Showcase your skills with a strong GitHub portfolio.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      icon: "bi-lightbulb",
      links: [
        { text: "Awesome Project Ideas", url: "https://github.com/florinpop17/app-ideas" },
        { text: "Deploy Projects with Netlify", url: "https://www.netlify.com" },
      ],
    },
  ];


  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h1 className="hero-title mb-3">Find Your Perfect Career Path</h1>
              <p className="hero-subtitle mb-4">
                A free platform where <span className="highlight">dreams come true</span>.
                We help you discover your potential and guide you to success.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4">Get Started</button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-160390,resizemode-75,msid-99779913/jobs/fresher/career-guidance-what-it-is-when-you-need-it-and-how-it-helps-shape-your-future.jpg"
                alt="Career Guidance"
                className="img-fluid hero-image rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Level Selection */}
      <section className="py-5 bg-yellow-50">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 fs-1">Which level are you at?</h2>
            <p className="text-muted lead fs-5">Choose your current level and explore personalized learning paths</p>
          </div>

          <div className="row justify-content-center g-4">
            {levels.map((level) => (
              <div key={level.name} className="col-12 col-sm-8 col-md-6 col-lg-4">
                <Link
                  to={level.link}
                  className="text-decoration-none h-100 d-flex"
                >
                  <div
                    className={`card w-100 h-100 border-0 rounded-4 shadow-sm d-flex flex-column bg-gradient-to-${level.color} hover-scale`}
                    style={{
                      backgroundImage:
                        level.color === "primary"
                          ? "linear-gradient(135deg, #cfe2ff, #9ec5fe)"
                          : level.color === "secondary"
                            ? "linear-gradient(135deg, #e2e3e5, #b8babf)"
                            : "linear-gradient(135deg, #d1e7dd, #a3cfbb)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div className={`text-${level.color} pt-4 pb-2 d-flex justify-content-center`}>
                      <i className={`bi ${level.icon}`} style={{ fontSize: "4rem" }}></i>
                    </div>

                    <div className="card-body d-flex flex-column text-center px-4">
                      <h3 className={`card-title fw-bold mb-3 fs-3 text-${level.color}`}>
                        {level.name}
                      </h3>
                      <p className="card-text text-secondary flex-grow-1 fs-6">{level.desc}</p>
                    </div>

                    <div className="card-footer bg-transparent border-0 d-flex justify-content-center pb-4">
                      <span className={`btn btn-${level.color} px-5 fs-5`}>Explore</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>{`
        .hover-scale:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }
        .bg-gradient-to-primary {
          background: linear-gradient(135deg, #cfe2ff, #9ec5fe);
        }
        .bg-gradient-to-secondary {
          background: linear-gradient(135deg, #e2e3e5, #b8babf);
        }
        .bg-gradient-to-success {
          background: linear-gradient(135deg, #d1e7dd, #a3cfbb);
        }
      `}</style>
      </section>

      {/* Preparation */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">What are you struggling with?</h2>
            <p className="lead text-muted">Explore curated learning paths, projects, and prep guides to level up your skills</p>
          </div>

          {struggles.map((item, index) => (
            <div className="row align-items-center mb-5" key={index}>
              {/* Image */}
              <div className={`col-md-6 ${index % 2 !== 0 ? "order-md-2" : ""}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid rounded shadow"
                />
              </div>

              {/* Text */}
              <div className={`col-md-6 ${index % 2 !== 0 ? "order-md-1 text-md-end" : ""}`}>
                <div className="px-3 text-center text-md-start bg-light">
                  <h3 className="fw-bold mb-3">
                    <i className={`bi ${item.icon} text-primary me-2`}></i>
                    {item.name}
                  </h3>
                  <p className="text-muted">{item.desc}</p>

                  <ul className="list-unstyled">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.url} className="text-decoration-none text-primary" target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-box-arrow-up-right me-1"></i> {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="btn btn-outline-primary mt-3"
                  >
                    Explore Resources <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="features-section py-5 bg-info">
        <div className="container">
          <h2 className="section-title text-center mb-5">How We Can Help You</h2>
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="feature-card card h-100 border-0 shadow-md hover-effect">
                  <div className="card-body text-center p-4">
                    <div className="icon-wrapper mb-4">
                      <img src={feature.src} alt="images" />
                    </div>
                    <h3 className="h5 mb-3">{feature.title}</h3>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5 bg-light ">
        <div className="container">
          <h2 className="section-title text-center mb-5">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="testimonial-card card h-100 p-4">
                <div className="d-flex mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="User"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-1">Sarah Johnson</h5>
                    <p className="text-muted mb-0">Computer Science Student</p>
                  </div>
                </div>
                <p className="mb-0">"This platform helped me land my dream internship at StartUp. The career guidance through Web page was spot on!"</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="testimonial-card card h-100 p-4">
                <div className="d-flex mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="User"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-1">Michael Chen</h5>
                    <p className="text-muted mb-0">Software Engineer</p>
                  </div>
                </div>
                <p className="mb-0">"The learning path for data structures was incredibly well-structured. I aced my technical interviews!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-amber-50 text-amber-900 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* CareerGuide Info */}
          <div>
            <h2 className="text-xl font-bold text-amber-800 mb-3 font-serif">CareerGuide</h2>
            <p className="text-sm text-amber-700">
              Your one-stop platform for career guidance and skill development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-amber-700 ">
              <li>
                <Link
                  to="/"
                  className="hover:text-amber-600 transition-colors no-underline text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-600 transition-colors no-underline text-decoration-none"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-amber-600 transition-colors no-underline text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>


          {/* Developer Socials - Highlighted Box */}
          <div className="bg-white border border-amber-200 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Connect with Developer</h3>
            <p className="text-sm text-amber-700 mb-3">Follow or reach out via:</p>
            <div className="flex gap-4 items-center text-amber-800">

              {/* GitHub */}
              <a href="https://github.com/Bhanuteja59" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="w-7 h-7 hover:text-amber-600 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0.5C5.73 0.5 0.5 5.73 0.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2.01-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.17-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.18a10.89 10.89 0 0 1 2.86-.39c.97.01 1.95.13 2.86.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.73.81 1.17 1.84 1.17 3.1 0 4.43-2.68 5.4-5.24 5.69.41.35.77 1.03.77 2.08 0 1.5-.01 2.71-.01 3.08 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27 0.5 12 0.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/bhanuteja59/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-7 h-7 hover:text-amber-600 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.07-.93-2.07-2.08 0-1.14.93-2.07 2.07-2.07s2.08.93 2.08 2.07c0 1.15-.93 2.08-2.08 2.08zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.96v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z" />
                </svg>
              </a>

              {/* Portfolio (using globe icon) */}
              <a href="https://bhanuteja59.github.io/portfolio/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <svg className="w-7 h-7 hover:text-amber-600 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.85 0-3.55-.63-4.9-1.69.06-.83.12-1.89.12-2.93 0-2.09-.49-4.21-.98-6.21 1.24-.34 2.62-.54 3.96-.59.54 1.45 1.29 3.41 1.8 5.05 1.3-.46 2.58-.94 3.77-1.46.41.86.71 1.8.71 2.83 0 2.34-1.43 4.35-3.47 5.35A9.97 9.97 0 0 1 12 20z" />
                </svg>
              </a>

              {/* Gmail */}
              <a href="mailto:bhanutejareddy59@gmail.com" aria-label="Gmail">
                <svg className="w-7 h-7 hover:text-amber-600 transition-transform hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065L2 6.5v11.11c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5V6.5l-10 6.565zM21.5 4h-19C1.67 4 1 4.67 1 5.5v.77l11 7.23 11-7.23v-.77c0-.83-.67-1.5-1.5-1.5z" />
                </svg>
              </a>

            </div>
          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;
