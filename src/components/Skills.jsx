import { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

function Skills() {
  const [animated, setAnimated] = useState(false);

  const technicalSkills = [
    {
      name: "JavaScript",
      level: 60,
      proficiency: "Intermediate",
      icon: "fab fa-js-square",
      description:
        "Experienced in ES6+, DOM manipulation, asynchronous programming, and building interactive web applications.",
    },
    {
      name: "MySQL",
      level: 60,
      proficiency: "Intermediate",
      icon: "fas fa-database",
      description:
        "Skilled in designing, querying, and optimizing relational databases for robust backend solutions.",
    },
    {
      name: "HTML & CSS",
      level: 85,
      proficiency: "Advanced",
      icon: "fab fa-html5",
      description:
        "Proficient in semantic HTML5, modern CSS3, Flexbox, Grid, and responsive design for visually appealing layouts.",
    },
    {
      name: "Bootstrap",
      level: 80,
      proficiency: "Advanced",
      icon: "fab fa-bootstrap",
      description:
        "Expert in using Bootstrap to rapidly develop responsive and mobile-first web interfaces.",
    },
    {
      name: "MERN Stack",
      level: 25,
      proficiency: "Beginner",
      icon: "fab fa-react",
      description:
        "Hands-on experience with MongoDB, Express.js, React, and Node.js for building full-stack web applications.",
    },
    {
      name: "C programming",
      level: 85,
      proficiency: "Advanced",
      icon: "fas fa-code",
      description:
        "Proficient in advanced C programming concepts, memory management, and building efficient algorithms and data structures.",
    },
    {
      name: "Java",
      level: 60,
      proficiency: "Intermediate",
      icon: "fab fa-java",
      description:
        "Solid understanding of Java OOP, collections, exception handling, and building backend logic for web applications.",
    },
  ];

  const toolsAndSoftSkills = [
    {
      name: "Canva",
      category: "Design Tool",
      icon: "fas fa-paint-brush",
      color: "#00c4cc",
    },
    {
      name: "VS Code",
      category: "Code Editor",
      icon: "fas fa-code",
      color: "#0078d7",
    },
    {
      name: "Team Management",
      category: "Soft Skill",
      icon: "fas fa-users",
      color: "#0d6efd",
    },
    {
      name: "Leadership",
      category: "Soft Skill",
      icon: "fas fa-chess-king",
      color: "#ffc107",
    },
  ];

  useEffect(() => {
    // A small delay to ensure the component is mounted before animating
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="skills-section section-padding section-with-bg-logo"
    >
      <Container>
        <h2 className="section-title">Skills</h2>
        <Row className="g-4 justify-content-center">
          {technicalSkills.map((skill, idx) => (
            <Col md={4} lg={3} key={idx} className="d-flex">
              <Card className="skills-card text-center h-100">
                <Card.Body className="d-flex flex-column">
                  <i className={`${skill.icon} fa-3x skills-icon`}></i>
                  <Card.Title as="h5" className="mt-3">
                    {skill.name}
                  </Card.Title>
                  <Card.Text as="p" className="flex-grow-1">
                    {skill.description}
                  </Card.Text>
                  <div className="mt-auto w-100">
                    <ProgressBar
                      now={animated ? skill.level : 0}
                      className="mb-2"
                      style={{ height: "8px" }}
                    />
                    <small className="text-muted">{skill.proficiency}</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h3 className="subsection-title mt-5">Tools and Soft Skills</h3>
        <Row className="g-4 justify-content-center">
          {toolsAndSoftSkills.map((tool, idx) => (
            <Col md={3} xs={6} key={idx} className="d-flex">
              <Card className="skills-card text-center h-100">
                <Card.Body>
                  <i
                    className={`${tool.icon} fa-2x skills-icon`}
                    style={{ color: tool.color }}
                  ></i>
                  <h6 className="mt-2 mb-1">{tool.name}</h6>
                  <small className="text-muted">{tool.category}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
