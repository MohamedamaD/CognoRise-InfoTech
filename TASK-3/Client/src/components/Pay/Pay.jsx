import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import propTypes from "prop-types";
import api from "../../services/api";
import { Button, Col, Container, Row } from "react-bootstrap";
const stripePromise = loadStripe(import.meta.env.VITE_STRIP);

const PaymentForm = ({ tourId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.post("/api/payments/create-payment-intent", {
        tourId,
      });

      const clientSecret = data.clientSecret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setError("Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <Button className="my-4" type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay Now"}
      </Button>
      {error && <div>{error}</div>}
    </form>
  );
};
PaymentForm.propTypes = {
  tourId: propTypes.string,
};

const Pay = ({ tourId }) => (
  <Container className="payment-page">
    <Row className="justify-content-center">
      <Col md={6}>
        <div className="payment-card">
          <h2 className="payment-header">Secure Payment</h2>
          <Elements stripe={stripePromise}>
            <PaymentForm tourId={tourId} />
          </Elements>
        </div>
      </Col>
    </Row>
  </Container>
);

Pay.propTypes = {
  tourId: propTypes.string,
};

export default Pay;
