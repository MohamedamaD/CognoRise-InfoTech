import { Container, Card } from "react-bootstrap";

const Background = () => (
  <Container
    style={{ animation: "fadeInUp 1s ease-out" }}
    className="p-4 vh-100 text-center "
  >
    <h2 className="fade-in-up mb-4">Background 🎓</h2>
    <div className="row">
      <div className="col-md-6 mb-3">
        <Card className="fade-in-up-delay h-100">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/800x400?text=Education"
          />
          <Card.Body>
            <Card.Title>Education 📚</Card.Title>
            <Card.Text>
              🎓 **Bachelor of Science in Computer Science** <br />
              University of Tech, 2015 - 2019 <br />
              🏅 **Master of Science in Software Engineering** <br />
              Tech Institute, 2019 - 2021 <br />
              📜 **PhD in Artificial Intelligence** <br />
              Innovate University, 2021 - Present
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-3">
        <Card className="fade-in-up-delay-long h-100">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/800x400?text=Certifications"
          />
          <Card.Body>
            <Card.Title>Certifications 🏆</Card.Title>
            <Card.Text>
              🖥️ **Certified Kubernetes Administrator** <br />
              🌐 **Certified Web Developer** <br />
              📊 **Data Science Certification** <br />
              💻 **Full Stack Developer Bootcamp** <br />
              🔐 **Certified Ethical Hacker**
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </Container>
);

export default Background;
