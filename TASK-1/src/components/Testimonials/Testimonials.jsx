import { Container, Row, Col, Card } from "react-bootstrap";

const testimonials = [
  {
    quote: "This developer's work is outstanding! Highly recommend. 🌟",
    endorser: "John Doe",
  },
  {
    quote: "Amazing attention to detail and great communication. 💯",
    endorser: "Jane Smith",
  },
  {
    quote: "Delivered on time and exceeded expectations. 👏",
    endorser: "Michael Johnson",
  },
  {
    quote: "Great problem-solving skills and innovative solutions. 🚀",
    endorser: "Emily Davis",
  },
  {
    quote:
      "Always a pleasure to work with, consistently delivers high-quality work. 👍",
    endorser: "Chris Brown",
  },
  {
    quote: "Exceptional developer with a keen eye for design. 🎨",
    endorser: "Patricia Wilson",
  },
  {
    quote: "Highly skilled and professional, a true asset to any team. 💪",
    endorser: "Robert Lee",
  },
  {
    quote: "Goes above and beyond to ensure client satisfaction. 🌟",
    endorser: "Linda Martinez",
  },
];
const Testimonials = () => (
  <section id="testimonials" className="my-5">
    <Container>
      <h2 className="text-center mb-4">Testimonials</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col
            md={6}
            className={`mb-4 fade-in-up ${
              index > 0 ? `fade-in-up-delay${index}` : ""
            }`}
            key={index}
          >
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>{testimonial.quote}</p>
                  <footer className="blockquote-footer">
                    - {testimonial.endorser}
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Testimonials;
