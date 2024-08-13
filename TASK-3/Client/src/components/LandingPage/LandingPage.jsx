import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { carouselItems } from "../../constants";

const LandingPage = () => {
  return (
    <>
      <Carousel>
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 object-fit-cover"
              src={item.src}
              height={500}
              alt={`slide #${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{item.heading}</h3>
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-5 mb-5">
        <Row>
          <Col className="text-center">
            <h2>Plan Your Trip</h2>
            <p>Use our tools and tips to plan the perfect trip.</p>
            <Button variant="success">Start Planning</Button>
          </Col>
        </Row>
      </Container>

      <footer className="bg-light text-center py-4">
        <Container>
          <p className="m-0">© 2024 Travel Booking. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
