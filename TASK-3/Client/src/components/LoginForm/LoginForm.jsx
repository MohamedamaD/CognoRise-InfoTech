import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLogin } from "../../hooks/Query";
import { Loading } from "../../pages";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutateAsync({ password, email });
  };
  if (isPending) return <Loading />;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <div className="d-flex align-items-center justify-content-start gap-2">
        <Button variant="primary" className="fw-bold" type="submit">
          Login
        </Button>
        <Link to={"/forgot-password"} className="text-white">
          <Button variant="dark" className="fw-bold" type="submit">
            Forgot Password?
          </Button>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
