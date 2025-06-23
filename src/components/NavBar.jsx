import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHeadset} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../auth/authContext';
import SupportDropdown from './dropdown/SupportDropdown';
import SupportCard from './card/SupportCard';
import './NavBar.css';

function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSupportItem, setSelectedSupportItem] = useState(null);
  const [submissionStatus, setSubmissionStatus] = useState(null); // State for submission status

  const { user, logout } = useAuth();

  useEffect(() => {
    function handleResize() {
      setIsCollapsed(window.innerWidth < 992);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsDropdownOpen(false);
  };

  const toggleSupportDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setSelectedSupportItem(null);
  };

  const handleSupportItemClick = (item) => {
    setSelectedSupportItem(item);
    setIsDropdownOpen(false);
  };

  const closeSupportCard = () => {
    setSelectedSupportItem(null);
    setSubmissionStatus(null); // Reset submission status when card is closed
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would handle the form submission here
    // (e.g., using fetch or Axios to send data to your server).

    // For this example, we'll simulate a successful submission
    setSubmissionStatus('success');

    // Optionally, you can reset the form fields after a short delay
    setTimeout(() => {
      // Reset form fields if needed
      event.target.reset();
      // Optionally, reset the submission status after a longer delay
      // setSubmissionStatus(null);
    }, 1500);
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Footer element with id 'footer' not found!");
    }
  };

  const supportItems = [
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const faqData = [
    {
      question: "What is your booking process?",
      answer: "Our booking process is simple. First, select your desired travel dates and destination. Then, browse the available options and choose the one that suits you best. Finally, fill in your details and complete the payment. You will receive a confirmation email shortly after."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, Mastercard, American Express) and PayPal."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Cancellation and modification policies vary depending on the specific booking and the provider. Please refer to the terms and conditions provided during the booking process or contact our customer support for assistance."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team via email at support@voyager.com or by phone at +91 12345 67890 (Monday - Saturday, 10:00 AM - 7:00 PM Indian Standard Time)."
    }
    // Add more FAQ items here
  ];

  const supportInfo = {
    faq: (
      <div className="faq-section">
        <h4>Frequently Asked Questions</h4>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h5>{faq.question}</h5>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="contact-us-card">
        <h4>Contact Us</h4>
        {submissionStatus === 'success' ? (
          <div className="alert alert-success" role="alert">
            Inquiry submitted successfully! We will get back to you within 24-48 business hours.
          </div>
        ) : (
          <>
            <p>We're here to assist you with your travel booking needs. Please feel free to reach out through the following channels:</p>
            <section className="contact-section">
              <h5>Email</h5>
              <p>For general inquiries and support, please email us at: <a href="mailto:support@voyager.com">support@voyager.com</a></p>
            </section>
            <section className="contact-section">
              <h5>Phone</h5>
              <p>You can reach our customer support team at: +91 12345 67890 (Monday - Saturday, 10:00 AM - 7:00 PM Indian Standard Time)</p>
            </section>
            <section className="contact-section">
              <h5>Contact Form</h5>
              <p>Alternatively, you can send us a message directly using the form below:</p>
              <form onSubmit={handleSubmit} method="POST" className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="name" name="name" value={user?.name || ''} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" name="email" value={user?.email || ''} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject:</label>
                  <input type="text" className="form-control" id="subject" name="subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-danger contact-form-submit-button">Submit Inquiry</button>
              </form>
            </section>
            <p className="mt-3 contact-response-time">We aim to respond to all inquiries within 24-48 business hours.</p>
          </>
        )}
      </div>
    ),
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light ">
      <span className="container">
        <a className="navbar-brand" href="/home">
          <img
            id="Voyager-logo"
            src="/assets/Voyager_logo.png"
            alt="Logo"
            draggable="false"
            height="45"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link mx-2" style={{ fontFamily: 'Roboto', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={scrollToFooter}>
              <b>About Us</b>
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ marginLeft: '4px', height: '16px' }}
              />
            </a>
          </li>
            <li className="nav-item position-relative navbar-support-dropdown">
              <div
                className="nav-link mx-2 navbar-support-toggle"
                style={{ fontFamily: 'Roboto', cursor: 'pointer' }}
                onClick={toggleSupportDropdown}
              >
                <b>Customer Support</b>
                <FontAwesomeIcon
                  icon={faHeadset}
                  style={{ marginLeft: '6px', height: '15px', marginBottom: '1px' }}
                />
              </div>
              {isDropdownOpen && (
                <SupportDropdown
                  items={supportItems}
                  onItemClick={handleSupportItemClick}
                />
              )}
              {selectedSupportItem && (
                <SupportCard
                  item={supportItems.find((item) => item.id === selectedSupportItem)}
                  info={supportInfo[selectedSupportItem]}
                  onClose={closeSupportCard}
                />
              )}
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-dark btn-rounded navbar-logout-button" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </span>
    </nav>
  );
}

export default NavBar;