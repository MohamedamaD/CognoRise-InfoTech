import { useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRegister } from "../../hooks/Query";
import { Loading } from "../../pages";

const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    dateOfBirth: "",
  });

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const { mutateAsync, isPending } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutateAsync(data);
  };

  return (
    <Form onSubmit={handleSubmit} className="py-2">
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter your name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhone" className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={data.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formDOB" className="mb-3">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          name="dateOfBirth"
          type="date"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAddress" className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          type="text"
          placeholder="Enter your address"
          value={data.address}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="success" className="fw-bold" type="submit">
        {isPending ? <Loading /> : "Register"}
      </Button>
    </Form>
  );
};

export default RegisterForm;
