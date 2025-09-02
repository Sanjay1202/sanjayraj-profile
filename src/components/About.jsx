import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import img1 from "../assets/img/sanjay1.jpg";
import img2 from "../assets/img/sanjay2.jpg";
import img3 from "../assets/img/sanjay3.jpg";
import img4 from "../assets/img/sanjay4.jpg";
import img5 from "../assets/img/sanjay5.jpg";
import img6 from "../assets/img/sanjay6.jpg";
import img7 from "../assets/img/sanjay7.jpg";

function About() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * images.length)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, [images.length]);

  return (
    <>
      <section
        id="about"
        className="about-section section-padding section-with-bg-logo"
      >
        <Container>
          <Row>
            <Col>
              <h2 className="section-title">About Me</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="about-image">
                <img
                  src={images[currentImageIndex]}
                  alt="Sanjayraj G T"
                  className="img-fluid rounded-circle mx-auto d-block"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
            <Col lg={6}>
              <h3 className="mb-3" style={{ color: "var(--primary-color)" }}>
                Sanjayraj G T - Full Stack Developer
              </h3>
              <p className="lead mb-4">
                With a strong foundation in both frontend and backend
                technologies, I specialize in building robust web applications.
                Passionate about coding and continuously learning new skills to
                stay updated with industry trends.
              </p>
              <p className="mb-4">
                I thrive in collaborative environments and enjoy working on
                projects that challenge me to think creatively and solve complex
                problems.Interested in making a positivee impactful through my
                projects.
              </p>
              <p className="mb-4">
                When I&apos;m not coding you can find me exploring the
                outdoors,listening to music, or experimenting with new recipes
                in the kitchen.
              </p>
              <p>
                And also Interested in exploring the other side of thrilling
                life in bikes and in hills
              </p>
              <Row className="mt-4">
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Location:</strong> Namakkal, Tamilnadu
                    </li>
                    <li>
                      <strong>Experience:</strong> Fresher
                    </li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Focus:</strong> Full Stack Development
                    </li>
                    <li>
                      <strong>Availability:</strong> Open to opportunities
                    </li>
                  </ul>
                </Col>
              </Row>
              <div className="mt-4">
                <Button
                  as="a"
                  href="https://drive.google.com/uc?export=download&id=1D5x804ypK7AGz2XhhZBUThEA5Ft6Kwsj"
                  className="btn-custom btn-primary-custom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download me-2"></i> Download My Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-light reveal-section" id="education">
        <Container>
          <h2 className="section-title">Education</h2>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="education-card h-100 text-center">
                <Card.Body>
                  <i className="fas fa-graduation-cap fa-3x mb-3 text-primary"></i>
                  <Card.Title as="h5">
                    B.E in Computer Science and Engineering
                  </Card.Title>
                  <p className="card-text mb-1">
                    Sri Ramakrishna Institute of Technology
                  </p>
                  <Badge bg="primary" className="mb-2">
                    2022 - 2026
                  </Badge>
                  <p className="text-muted small mb-0">
                    Expected Graduation: 2026
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="education-card h-100 text-center">
                <Card.Body>
                  <i className="fas fa-university fa-3x mb-3 text-success"></i>
                  <Card.Title as="h5">HSC</Card.Title>
                  <p className="card-text mb-1">
                    Sri Sarasvathi Vidhya Mandhir Matric Hr Sec School
                  </p>
                  <Badge bg="success" className="mb-2">
                    2020 - 2022
                  </Badge>
                  <p className="text-muted small mb-0">Completed: 2022</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="education-card h-100 text-center">
                <Card.Body>
                  <i className="fas fa-school fa-3x mb-3 text-warning"></i>
                  <Card.Title as="h5">SSLC</Card.Title>
                  <p className="card-text mb-1">
                    R.N Oxford Matriculation School
                  </p>
                  <Badge bg="warning" className="text-dark mb-2">
                    2014 - 2020
                  </Badge>
                  <p className="text-muted small mb-0">Completed: 2020</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
