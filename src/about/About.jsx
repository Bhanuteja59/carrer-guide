import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-center py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="display-4 fw-bold mb-3">About CareerGuide</h1>
            <p className="lead mb-4">
              Empowering your journey from learning to career success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-title mb-4">Our Mission</h2>
                <p className="lead">
                  To democratize career guidance and make professional development accessible to everyone, everywhere.
                </p>
                <p>
                  CareerGuide was born from the realization that many students and professionals struggle to find clear,
                  structured paths to achieve their career goals. We bridge the gap between ambition and achievement.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mission-image"
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                  alt="Career growth"
                  className="img-fluid rounded shadow"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="journey-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Your Success Journey</h2>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="journey-card card h-100 border-0 shadow-sm"
              >
                <div className="card-body text-center p-4">
                  <div className="journey-step">1</div>
                  <h3 className="h4 my-3">Assess Your Level</h3>
                  <p>
                    Start by identifying your current skill level through our assessment tools or by browsing our
                    categorized content for beginners, intermediate, and advanced learners.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="journey-card card h-100 border-0 shadow-sm"
              >
                <div className="card-body text-center p-4">
                  <div className="journey-step">2</div>
                  <h3 className="h4 my-3">Follow Learning Paths</h3>
                  <p>
                    Our structured learning paths guide you through essential concepts, projects, and resources
                    tailored to your goals, whether you're a student or a working professional.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="col-md-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="journey-card card h-100 border-0 shadow-sm"
              >
                <div className="card-body text-center p-4">
                  <div className="journey-step">3</div>
                  <h3 className="h4 my-3">Achieve Your Goals</h3>
                  <p>
                    With consistent practice using our recommended resources and projects, you'll build the skills
                    and portfolio needed to advance your career or land your dream job.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Real World Impact</h2>
          
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="impact-stats mb-4">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <div className="stat-card p-3 text-center">
                        <h3 className="stat-number">10,000+</h3>
                        <p className="stat-label">Active Learners</p>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="stat-card p-3 text-center">
                        <h3 className="stat-number">500+</h3>
                        <p className="stat-label">Career Transitions</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-card p-3 text-center">
                        <h3 className="stat-number">50+</h3>
                        <p className="stat-label">Countries Reached</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="stat-card p-3 text-center">
                        <h3 className="stat-number">95%</h3>
                        <p className="stat-label">Satisfaction Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="impact-testimonials">
                  <div className="testimonial-card card p-4 mb-3">
                    <p className="mb-3">
                      "CareerGuide helped me transition from mechanical engineering to software development.
                      The structured path made all the difference in my learning journey."
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User"
                        className="rounded-circle me-3"
                        width="50"
                      />
                      <div>
                        <h6 className="mb-0">Rajesh Kumar</h6>
                        <small className="text-muted">Software Engineer at TechCorp</small>
                      </div>
                    </div>
                  </div>
                  
                  <div className="testimonial-card card p-4">
                    <p className="mb-3">
                      "As a college student, I was overwhelmed with what to learn. CareerGuide's B.Tech year-wise
                      roadmap gave me perfect direction for each semester."
                    </p>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="rounded-circle me-3"
                        width="50"
                      />
                      <div>
                        <h6 className="mb-0">Priya Sharma</h6>
                        <small className="text-muted">Computer Science Student</small>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Ready to Transform Your Career?</h2>
            <p className="lead mb-4">
              Join thousands of learners who have accelerated their careers with our Web page
            </p>
            <Link to="/" className="btn btn-light btn-lg px-4 me-2">
              Get Started
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;