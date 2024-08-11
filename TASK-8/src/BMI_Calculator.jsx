import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const BMI_Calculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2>BMI Calculator</h2>
      <Form>
        <Form.Group controlId="formWeight">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formHeight" className="mt-3">
          <Form.Label>Height (cm)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" className="mt-3" onClick={calculateBMI}>
          Calculate BMI
        </Button>
      </Form>
      {bmi && (
        <div className="mt-4">
          <h4>Your BMI: {bmi}</h4>
          <Alert
            variant={
              category === "Underweight"
                ? "warning"
                : category === "Obesity"
                ? "danger"
                : "success"
            }
          >
            {category}
          </Alert>
        </div>
      )}
    </Container>
  );
};

export default BMI_Calculator;
