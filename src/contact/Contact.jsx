import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const DeveloperContact = () => {
  return (
    <section>
        <title>Contact the Developer | CareerGuide</title>
        <meta name="description" content="Get in touch with the developer for collaborations or questions" />

      <div className="developer-contact-page">
        {/* Hero Section */}
        <section className="contact-hero text-center py-5">
          <div className="container">
            <h1 className="display-4 fw-bold mb-3">Contact the Developer</h1>
            <p className="lead mb-4">Get in touch for collaborations, questions, or feedback</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="developer-card card shadow-lg border-0"
              >
                <div className="row g-0">
                  {/* Developer Profile */}
                  <div className="col-md-5 developer-profile">
                    <div className="profile-image-wrapper">
                      <img 
                        src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" 
                        alt="Developer" 
                        className="profile-image" 
                      />
                    </div>
                    <div className="profile-info text-center p-4">
                      <h2 className="developer-name">R.Bhanu Teja</h2>
                      <p className="developer-title">Full Stack Developer</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="col-md-7">
                    <div className="card-body p-4">
                      <h3 className="card-title mb-4">Contact Information</h3>
                      
                      <div className="contact-method mb-4">
                        <div className="method-icon">
                          <img src="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png" alt="Gmail" />
                        </div>
                        <div className="method-details">
                          <h4>Email</h4>
                          <a href="mailto:bhanutejareddy59@gmail.com" className="contact-link">
                            bhanutejareddy59@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="contact-method mb-4">
                        <div className="method-icon">
                          <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Linked-in" />
                        </div>
                        <div className="method-details">
                          <h4>LinkedIn</h4>
                          <a 
                            href="https://www.linkedin.com/in/bhanuteja59/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-link"
                          >
                            linkedin.com/in/bhanuteja59
                          </a>
                        </div>
                      </div>

                      <div className="contact-method mb-4">
                        <div className="method-icon">
                          <img src="https://a.slack-edge.com/80588/img/plugins/github/service_512.png" alt="github" />
                        </div>
                        <div className="method-details">
                          <h4>GitHub</h4>
                          <a 
                            href="https://github.com/Bhanuteja59" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-link"
                          >
                            github.com/Bhanuteja59
                          </a>
                        </div>
                      </div>

                      <div className="contact-method">
                        <div className="method-icon">
                          <img src="https://static.thenounproject.com/png/995687-200.png" alt="Portfolio" />
                        </div>
                        <div className="method-details">
                          <h4>Portfolio</h4>
                          <a 
                            href="https://bhanuteja59.github.io/portfolio/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="contact-link"
                          >
                            My Developer Portfolio
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="contact-form-card card shadow-lg border-0 mt-4"
              >
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Send a Message</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" rows="5" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2">
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperContact;