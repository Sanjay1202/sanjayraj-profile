import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "Health Monitoring System",
      description:
        "A fully JavaScript-based project that utilizes simple and compact concepts to monitor and display health-related data in real time.",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["JavaScript", "HTML", "CSS", "TailwindCSS"],
      githubUrl: "https://github.com/Sanjayraj-G-T/Health_monitoring_system",
    },
    {
      title: "Online Food Ordering System",
      description:
        "A dynamic web application using Java, MySQL, and PHP for the server side, designed to provide a seamless food ordering experience. Built on a robust database management system (DBMS).",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["Java", "MySQL", "PHP"],
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and professional portfolio website developed with HTML5, Bootstrap, and JavaScript to showcase projects and skills.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["HTML5", "Bootstrap", "JavaScript"],
      githubUrl: "https://github.com/Sanjayraj-G-T/portfolio",
    },
    {
      title: "Inventory Management System",
      description:
        "A web-based application for managing inventory, built with HTML, CSS, JavaScript, and PHP. Utilizes MySQL for robust data storage and retrieval. Features include product tracking, stock updates, and reporting.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/Sanjayraj-G-T/Inventory_management_system",
    },
  ];

  return (
    <section id="projects" className="section-padding section-with-bg-logo">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
          </Col>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="project-card position-relative">
                {project.status && (
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 end-0 m-2"
                    style={{ zIndex: 1 }}
                  >
                    {project.status}
                  </Badge>
                )}
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-overlay">
                    <div className="project-links">
                      <Button href={project.githubUrl} variant="outline-light">
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="mb-3">{project.title}</Card.Title>
                  <Card.Text className="mb-3">{project.description}</Card.Text>
                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="me-1"
                        style={{
                          backgroundColor: "var(--secondary-color)",
                          color: "white",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
