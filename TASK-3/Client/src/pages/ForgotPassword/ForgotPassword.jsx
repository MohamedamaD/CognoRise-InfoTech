import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useForgotPassword } from "../../hooks/Query";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { isPending: loading, mutateAsync } = useForgotPassword();
  const handleSubmit = async (event) => {
    event.preventDefault();
    mutateAsync({ email });
  };

  return (
    <Container className="my-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          variant="dark"
          className="fw-bold"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
