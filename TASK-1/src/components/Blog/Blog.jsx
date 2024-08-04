import { Container, Row, Col, Card } from "react-bootstrap";

const blogs = [
  {
    title: "Understanding React Hooks",
    link: "https://example.com/article1",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "A Guide to Modern JavaScript",
    link: "https://example.com/article2",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "CSS Tricks and Tips",
    link: "https://example.com/article3",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Building RESTful APIs with Node.js",
    link: "https://example.com/article4",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Introduction to TypeScript",
    link: "https://example.com/article5",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "State Management with Redux",
    link: "https://example.com/article6",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Optimizing Web Performance",
    link: "https://example.com/article7",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Responsive Web Design Best Practices",
    link: "https://example.com/article8",
    image: "https://via.placeholder.com/150",
  },
];

const Blog = () => (
  <section id="blog" className="my-5">
    <Container>
      <h2 className="text-center mb-4">Blog/Articles</h2>
      <Row>
        {blogs.map((blog, index) => (
          <Col
            md={6}
            className={`mb-4 fade-in-up ${
              index > 0 ? `fade-in-up-delay${index}` : ""
            }`}
            key={index}
          >
            <Card>
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Link
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Blog;
