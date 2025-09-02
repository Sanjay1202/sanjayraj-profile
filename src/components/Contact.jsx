import { useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function Contact() {
  const form = useRef();
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const whatsappMessage = `Hi Sanjayraj, I'm contacting you from your portfolio.\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;

    const phoneNumber = "+918015052453";

    if (!phoneNumber) {
      console.error(
        "WhatsApp phone number is not configured in .env.local. Please add VITE_WHATSAPP_PHONE_NUMBER."
      );
      setError(
        "The contact feature is currently unavailable. Please try again later."
      );
      return;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title text-white">Get In Touch</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {/* Form Column */}
          <Col lg={7} className="mb-4 mb-lg-0">
            <div className="contact-form-wrapper">
              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}
              <Form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name" // This 'name' attribute must match your EmailJS template variable
                        required
                        placeholder="Your full name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email" // This 'name' attribute must match your EmailJS template variable
                        required
                        placeholder="your.email@example.com"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject" // This 'name' attribute must match your EmailJS template variable
                    placeholder="What's this about?"
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message" // This 'name' attribute must match your EmailJS template variable
                    required
                    placeholder="Tell me about your project..."
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn-custom btn-primary-custom"
                    size="lg"
                  >
                    <i className="fab fa-whatsapp me-2"></i> Send on WhatsApp
                  </Button>
                </div>
              </Form>
            </div>
          </Col>

          {/* Info Column */}
          <Col lg={5}>
            <div className="contact-info-wrapper">
              <h3 className="text-white mb-4">Contact Information</h3>
              <ul className="list-unstyled contact-info-list">
                <li>
                  <i className="fas fa-envelope me-3"></i>
                  <a href="mailto:sanjayraj.12022005@gmail.com">
                    sanjayraj.12022005@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fas fa-phone me-3"></i>
                  <a href="tel:+918015052453">+91 80150 52453</a>
                </li>
                <li>
                  <i className="fas fa-map-marker-alt me-3"></i>
                  <span>Namakkal, Tamilnadu, India</span>
                </li>
              </ul>
              <h4 className="text-white mb-4 mt-5 text-center">
                Connect With Me
              </h4>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanjayraj-g-t-a17a43253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/Sanjayraj-G-T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://x.com/Sanjayraj_G_T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/itz.lucifer_._?igsh=eHg1bnR0eTl2bzFu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
