import { Container, Row, Col } from "react-bootstrap";

const Introduction = () => (
  <Container
    fluid
    className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
    style={{ animation: "fadeInUp 1s ease-out" }}
  >
    <Row>
      <Col>
        <h1
          className="display-4"
          style={{ opacity: 0, animation: "fadeInUp 1s ease-out forwards" }}
        >
          Hello, I'm Your Name
        </h1>
        <p
          className="lead"
          style={{
            opacity: 0,
            animation: "fadeInUp 1s ease-out 0.5s forwards",
          }}
        >
          I'm passionate about Your Ambitions.
        </p>
        <div
          style={{ opacity: 0, animation: "fadeInUp 1s ease-out 1s forwards" }}
        >
          <p>
            I have experience in Web Development and enjoy creating interactive
            and responsive designs. I love learning new technologies and
            improving my skills.
          </p>
          <p>
            In my free time, I enjoy reading, hiking, and exploring new places.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Introduction;
