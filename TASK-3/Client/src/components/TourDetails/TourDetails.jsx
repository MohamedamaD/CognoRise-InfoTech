import { useNavigate, useParams } from "react-router-dom";
import { useBookTour, useTourDetails } from "../../hooks";
import { Badge, Button, Card, Container } from "react-bootstrap";
import { Loading } from "../../pages";
import { UnBookButton } from "../BookedTours/BookedTours";

const TourDetails = () => {
  const { id } = useParams();
  const { data, isPending: tourLoading } = useTourDetails(id);
  const { mutate: bookTour } = useBookTour();

  const navigate = useNavigate();

  console.log(data)

  if (tourLoading) <Loading />;
  return (
    <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>
      <Card>
        <Card.Img
          variant="top"
          height={400}
          className="object-fit-cover"
          src={data?.tour?.imageUrl}
        />
        <Card.Body>
          {data?.tour?.badge && (
            <Badge pill bg="danger" className="mb-2">
              {data?.tour.badge}
            </Badge>
          )}
          <Card.Title>{data?.tour?.title}</Card.Title>
          <Card.Text>
            <span>
              <i className="bi bi-clock-fill"></i> {data?.tour?.duration}
            </span>
            <br />
            <span className="text-warning">
              {"★".repeat(5)} ({data?.tour?.reviews} Review)
            </span>
            <br />
            <span>{data?.tour?.description}</span>
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            {data?.tour?.oldPrice && (
              <span className="text-muted text-decoration-line-through">
                ${data?.tour.oldPrice}
              </span>
            )}
            <span className="text-danger fs-4">
              From ${data?.tour?.price?.toLocaleString()}
            </span>
          </div>
          <div className="d-flex mt-3">
            {!data?.isBooked ? (
              <Button
                variant="primary"
                className="me-2 w-100"
                onClick={() => bookTour(data?.tour?._id)}
              >
                Book Now
              </Button>
            ) : (
             <UnBookButton id={data?.isBooked?._id}/>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TourDetails;
