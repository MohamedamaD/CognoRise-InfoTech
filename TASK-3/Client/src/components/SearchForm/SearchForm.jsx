import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import {  useTourSearch } from "../../hooks/Query";
import Loading from "../../pages/Loading/Loading";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { data, isPending } = useTourSearch(query);

  console.log(data);
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container className="mb-2">
        <h1 className="text-center my-4">Search Tours</h1>
        <Form onSubmit={handleSearch}>
          <Form.Group controlId="searchQuery">
            <Form.Control
              type="text"
              placeholder="Search for a tour"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Container>

      <Container>
        <h2>Search Results</h2>

        <Container>
          <Row>
            {isPending && <Loading />}
            {data?.map((tour) => (
              <Col key={tour._id} md={4}>
                <Card className="mb-4">
                  <Card.Img
                    variant="top"
                    height={200}
                    className="object-fit-cover"
                    src={tour.imageUrl}
                  />
                  <Card.Body>
                    {tour.badge && (
                      <Badge pill bg="danger" className="mb-2">
                        {tour.badge}
                      </Badge>
                    )}
                    <Card.Title>{tour.title}</Card.Title>
                    <Card.Text>
                      <span>
                        <i className="bi bi-clock-fill"></i> {tour.duration}
                      </span>
                      <br />
                      <span className="text-warning">
                        {"★".repeat(5)} ({tour.reviews} Review)
                      </span>
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      {tour.oldPrice && (
                        <span className="text-muted text-decoration-line-through">
                          ${tour.oldPrice}
                        </span>
                      )}
                      <span className="text-danger fs-4">
                        From ${tour.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <Link to={`/tours/${tour._id}`} className="mt-2 d-block">
                      <Button className="w-100 fw-medium">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default SearchForm;
