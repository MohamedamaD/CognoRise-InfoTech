import { Card, Button } from "react-bootstrap";
import { useUnBookTour } from "../../hooks";
import propTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { useBookedTours } from "../../hooks";
import { Loading } from "../../pages";
import { Link } from "react-router-dom";

export const UnBookButton = ({ id }) => {
  const { mutate, isPending } = useUnBookTour(id);
  return (
    <Button
      variant="danger"
      className="mt-2 d-block w-100 fw-medium"
      onClick={() => mutate()}
    >
      {isPending ? "removing..." : "Remove Booking"}
    </Button>
  );
};

UnBookButton.propTypes = {
  id: propTypes.string,
};

const BookedTourCard = ({ booking }) => {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        height={200}
        className="object-fit-cover"
        src={booking.tour.imageUrl}
      />
      <Card.Body>
        <Card.Title>{booking.tour.title}</Card.Title>
        <Card.Text>
          <span>
            <i className="bi bi-clock-fill"></i> {booking.tour.duration}
          </span>
          <br />
          <span className="text-warning">
            {"★".repeat(5)} ({booking.tour.reviews} Review)
          </span>
        </Card.Text>
        <span className="text-danger fs-4">
          From ${booking.tour.price.toLocaleString()}
        </span>
        <UnBookButton id={booking._id} />
        <Link className="d-block w-100 mt-2" to={`/pay/${booking?.tour?._id}`}>
          <Button variant="outline-primary" className="w-100 fw-bold">
            Pay
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

BookedTourCard.propTypes = {
  booking: propTypes.object,
};

const BookedTours = () => {
  const { data, isPending: loading } = useBookedTours();

  if (loading) return <Loading />;
  console.log(data);
  return (
    <Row>
      <h3 className="mb-3">Booked Tours</h3>

      {data?.length === 0 && (
        <p className="fs-4 text-capitalize">
          You have not booked any tours yet
        </p>
      )}
      {data?.map((booking) => (
        <Col key={booking._id} md={4}>
          <BookedTourCard booking={booking} />
        </Col>
      ))}
    </Row>
  );
};

export default BookedTours;
