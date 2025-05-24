import React from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const DeveloperContact = () => {
  return (
    <section className="developer-contact-page py-5 bg-light">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Contact the Developer</h1>
          <p className="lead text-muted">Reach out for collaborations, questions, or feedback.</p>
        </div>

        {/* Developer Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card shadow-lg border-0 overflow-hidden"
        >
          <div className="row g-0">
            {/* Left - Profile */}
            <div className="col-md-5 bg-white p-4 d-flex flex-column align-items-center justify-content-center text-center">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" 
                alt="Developer" 
                className="img-fluid rounded mb-3" 
                style={{ maxWidth: "250px" }}
              />
              <h2 className="fw-bold mb-1">R. Bhanu Teja</h2>
              <p className="text-muted">Full Stack Developer</p>
            </div>

            {/* Right - Contact Info */}
            <div className="col-md-7 p-4">
              <h4 className="fw-bold mb-4">Contact Information</h4>

              {/* Email */}
              <ContactMethod
                icon="https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png"
                title="Email"
                link="mailto:bhanutejareddy59@gmail.com"
                label="bhanutejareddy59@gmail.com"
              />

              {/* LinkedIn */}
              <ContactMethod
                icon="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                title="LinkedIn"
                link="https://www.linkedin.com/in/bhanuteja59/"
                label="linkedin.com/in/bhanuteja59"
              />

              {/* GitHub */}
              <ContactMethod
                icon="https://a.slack-edge.com/80588/img/plugins/github/service_512.png"
                title="GitHub"
                link="https://github.com/Bhanuteja59"
                label="github.com/Bhanuteja59"
              />

              {/* Portfolio */}
              <ContactMethod
                icon="https://static.thenounproject.com/png/995687-200.png"
                title="Portfolio"
                link="https://bhanuteja59.github.io/portfolio/"
                label="bhanuteja59.github.io/portfolio"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactMethod = ({ icon, title, link, label }) => (
  <div className="d-flex align-items-center mb-3">
    <img src={icon} alt={title} style={{ width: 40, height: 40 }} className="me-3" />
    <div>
      <h6 className="mb-1 fw-semibold">{title}</h6>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary">
        {label}
      </a>
    </div>
  </div>
);

export default DeveloperContact;
