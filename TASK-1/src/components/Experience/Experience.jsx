import { Container, Row, Col, Card } from "react-bootstrap";

const experiences = [
  {
    role: "👨‍💻 Software Engineer at TechCorp",
    duration: "Jan 2022 - Present",
    title: "Frontend Developer",
    responsibilities: [
      "Developing user interfaces with React and Redux",
      "Collaborating with UX/UI designers to implement design specs",
      "Optimizing applications for maximum speed and scalability",
    ],
    contributions: [
      "🚀 Improved website performance by 30%",
      "🔧 Refactored codebase to enhance maintainability",
      "📈 Increased user engagement by implementing interactive features",
    ],
  },
  {
    role: "🛠️ Backend Developer at DevSolutions",
    duration: "Jun 2020 - Dec 2021",
    title: "Backend Developer",
    responsibilities: [
      "Designing and implementing RESTful APIs",
      "Managing database schemas and migrations",
      "Integrating third-party services and APIs",
    ],
    contributions: [
      "🔍 Enhanced data security and privacy",
      "⚙️ Streamlined backend processes",
      "📊 Reduced server response time by 20%",
    ],
  },
  {
    role: "🖥️ Junior Developer at CodeFactory",
    duration: "Jul 2018 - May 2020",
    title: "Junior Developer",
    responsibilities: [
      "Assisting in the development of web applications",
      "Testing and debugging code",
      "Participating in code reviews and team meetings",
    ],
    contributions: [
      "🔍 Found and fixed critical bugs",
      "⚙️ Implemented small features independently",
      "📊 Contributed to the success of several projects",
    ],
  },
];
const Experience = () => (
  <section id="experience" className="my-5">
    <Container>
      <h2 className="text-center mb-4">Experience</h2>
      <Row>
        {experiences.map((exp, index) => (
          <Col
            md={6}
            className={`mb-4 fade-in-up ${
              index > 0 ? `fade-in-up-delay${index}` : ""
            }`}
            key={index}
          >
            <Card>
              <Card.Body>
                <Card.Title>{exp.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {exp.duration}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Role:</strong> {exp.title}
                </Card.Text>
                <Card.Text>
                  <strong>Responsibilities:</strong>
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Contributions:</strong>
                  <ul>
                    {exp.contributions.map((contribution, idx) => (
                      <li key={idx}>{contribution}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Experience;
