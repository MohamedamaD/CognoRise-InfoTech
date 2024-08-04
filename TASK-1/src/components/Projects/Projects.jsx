import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";

const projectData = [
  {
    title: "Project Alpha",
    description:
      "A comprehensive web application for managing tasks and projects with real-time collaboration features.",
    tech: "React, Node.js, Express",
    outcome: "Streamlined project management and improved team collaboration.",
    image: "https://via.placeholder.com/350x200?text=Project+Alpha",
  },
  {
    title: "E-Commerce Platform",
    description:
      "An online store with a user-friendly interface, secure payment gateways, and inventory management.",
    tech: "Vue.js, Laravel, MySQL",
    outcome: "Increased sales and improved customer experience.",
    image: "https://via.placeholder.com/350x200?text=E-Commerce+Platform",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal website showcasing a developer's portfolio, skills, and contact information.",
    tech: "HTML, CSS, JavaScript",
    outcome: "Enhanced online presence and easier client acquisition.",
    image: "https://via.placeholder.com/350x200?text=Portfolio+Website",
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting app that provides real-time weather updates and forecasts.",
    tech: "Angular, TypeScript, OpenWeatherMap API",
    outcome: "Accurate weather information and better user engagement.",
    image: "https://via.placeholder.com/350x200?text=Weather+App",
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat application with features like private messaging and group chats.",
    tech: "React, Firebase",
    outcome: "Improved communication and user interaction.",
    image: "https://via.placeholder.com/350x200?text=Chat+Application",
  },
  {
    title: "Fitness Tracker",
    description:
      "An app that tracks fitness activities, provides workout recommendations, and monitors progress.",
    tech: "Flutter, Dart",
    outcome: "Enhanced fitness tracking and user motivation.",
    image: "https://via.placeholder.com/350x200?text=Fitness+Tracker",
  },
];

const Project = ({ title, description, tech, outcome }) => (
  <Col xs={12} md={6} lg={4} className="mb-4">
    <Card>
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/350x200?text=Project+Image"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Tech Used:</strong> {tech}
        </Card.Text>
        <Card.Text>
          <strong>Outcome:</strong> {outcome}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  outcome: PropTypes.string.isRequired,
};
const Projects = () => (
  <Container className="p-4 vh-100 text-center fade-in-up">
    <h2 className="text-center mb-4">Projects 🚀</h2>
    <Row className="">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
          outcome={project.outcome}
          image={project.image}
        />
      ))}{" "}
    </Row>
  </Container>
);

export default Projects;
