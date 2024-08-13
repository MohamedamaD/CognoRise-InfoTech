import { Link, useSearchParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import { useResetPassword } from "../../hooks/Query";
import { useState } from "react";
import Loading from "../Loading/Loading";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { mutateAsync, isPending } = useResetPassword();
  const [searchParams] = useSearchParams();

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(password)

    const token = searchParams.get("token");
    const email = searchParams.get("email");
    await mutateAsync({ password, email, token });
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="passwordConfirm" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirm}
            onChange={(ev) => setPasswordConfirm(ev.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3 d-flex gap-2">
          <Button disabled={password !== passwordConfirm} type="submit" className="fw-medium">
            {isPending ? <Loading /> : "Reset"}
          </Button>
          <Link
            to="/login"
            className="text-center d-block p-2 bg-body-secondary link-body-emphasis"
          >
            Back to Login
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ResetPassword;
