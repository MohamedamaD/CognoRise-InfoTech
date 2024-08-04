import { Container, Row, Col, Card } from "react-bootstrap";

const achievements = [
  {
    title: "Best Developer Award",
    date: "June 2024",
    details:
      "Recognized for outstanding performance and contribution to major projects.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Top Innovator",
    date: "March 2024",
    details: "Awarded for innovative solutions and creative problem-solving.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Excellence in Project Management",
    date: "December 2023",
    details:
      "Achieved for exceptional leadership and project management skills.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Employee of the Year",
    date: "October 2023",
    details: "Honored as the most valuable employee for the year.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Outstanding Contribution to Team",
    date: "August 2023",
    details: "Awarded for significant contributions and team collaboration.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Best UX Design",
    date: "June 2023",
    details: "Recognized for exceptional user experience design.",
    image: "https://via.placeholder.com/150",
  },
];

const Achievements = () => (
  <section id="achievements" className="my-5">
    <Container>
      <h2 className="text-center mb-4">Achievements</h2>
      <Row>
        {achievements.map((achievement, index) => (
          <Col
            md={6}
            className={`mb-4 fade-in-up ${
              index > 0 ? `fade-in-up-delay${index}` : ""
            }`}
            key={index}
          >
            <Card>
              <Card.Img variant="top" src={achievement.image} />
              <Card.Body>
                <Card.Title>{achievement.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {achievement.date}
                </Card.Subtitle>
                <Card.Text>{achievement.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Achievements;
