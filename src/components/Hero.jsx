import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <Container className="hero-content-container">
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="hero-title animate-on-scroll">
              Hi, I&apos;m{" "}
              <span style={{ color: "var(--accent-color)" }}>
                Sanjayraj G. T.
              </span>
            </h1>
            <h2 className="hero-subtitle animate-on-scroll">
              Full Stack Developer
            </h2>
            <p className="hero-description animate-on-scroll">
              Passionate and dedicated developer with experience in creating
              dynamic web applications using JavaScript, MySQL, PHP, MERN and
              modern frontend technologies like ReactJS, Bootstrap. Seeking
              opportunities to build impactful software and solve real-world
              problems.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
                as={Link}
                to="/projects"
                className="btn-custom btn-primary-custom"
              >
                View My Work
              </Button>
              <Button
                as={Link}
                to="/contact"
                className="btn-custom btn-outline-custom"
              >
                Get In Touch
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/uc?export=download&id=1D5x804ypK7AGz2XhhZBUThEA5Ft6Kwsj"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom btn-outline-custom"
              >
                <i className="fas fa-download me-2"></i> Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
