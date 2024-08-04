import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "https://via.placeholder.com/40?text=JS",
        proficiency: "Advanced",
        bgColor: "#f0db4f", 
      },
      {
        name: "Python",
        icon: "https://via.placeholder.com/40?text=Py",
        proficiency: "Intermediate",
        bgColor: "#306998", 
      },
      {
        name: "Java",
        icon: "https://via.placeholder.com/40?text=J",
        proficiency: "Beginner",
        bgColor: "#f89820", 
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        name: "React",
        icon: "https://via.placeholder.com/40?text=R",
        proficiency: "Advanced",
        bgColor: "#61DAFB", 
      },
      {
        name: "Angular",
        icon: "https://via.placeholder.com/40?text=A",
        proficiency: "Intermediate",
        bgColor: "#DD0031", 
      },
      {
        name: "Vue.js",
        icon: "https://via.placeholder.com/40?text=V",
        proficiency: "Beginner",
        bgColor: "#42b883", 
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        icon: "https://via.placeholder.com/40?text=G",
        proficiency: "Advanced",
        bgColor: "#F1502F", 
      },
      {
        name: "Docker",
        icon: "https://via.placeholder.com/40?text=D",
        proficiency: "Intermediate",
        bgColor: "#0db7ed", 
      },
      {
        name: "Jenkins",
        icon: "https://via.placeholder.com/40?text=J",
        proficiency: "Beginner",
        bgColor: "#d44f27", 
      },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-5 bg-light">
    <Container>
      <h2 className="text-center mb-4">Skills 🛠️</h2>
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-5">
          <h3 className="mb-3">{category.category}</h3>
          <Row className="justify-content-between">
            {category.skills.map((skill, skillIndex) => (
              <Col xs={12} md={6} key={skillIndex} className="mb-4 text-white">
                <div
                  className="d-flex align-items-center p-3 border rounded shadow-sm"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon} alt={skill.name} className="me-3" />
                  <div>
                    <h5>{skill.name}</h5>
                    <p className="mb-0 text-muted text-white">
                      Proficiency: {skill.proficiency}  
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  </section>
);

export default Skills;
