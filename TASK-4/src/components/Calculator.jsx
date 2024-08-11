import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Calculator.css";

const Calculator = () => {
  const [screenValue, setScreenValue] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setScreenValue("");
    } else if (value === "±") {
      if (screenValue) {
        setScreenValue((prev) => {
          const isNegative = prev.startsWith("-");
          return isNegative ? prev.substring(1) : `-${prev}`;
        });
      }
    } else if (value === "⌫") {
      setScreenValue((prev) => prev.slice(0, -1));
    } else if (value === "=") {
      try {
        setScreenValue(eval(screenValue).toString());
      } catch {
        setScreenValue("Error");
      }
    } else {
      setScreenValue(screenValue + value);
    }
  };

  return (
    <Container className="calculator py-3 px-4">
      <div className="calculator-screen-container">
        <input
          type="text"
          value={screenValue}
          readOnly
          className="calculator-screen"
        />
      </div>
      <Row>
        {["C", "±", "%", "/"].map((item, index) => (
          <Col key={index} xs={3} className="p-1">
            <Button
              variant="light"
              className={`calculator-button ${
                item === "/" ? "operator-button" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        {["7", "8", "9", "*"].map((item, index) => (
          <Col key={index} xs={3} className="p-1">
            <Button
              variant="light"
              className={`calculator-button ${
                item === "*" ? "operator-button" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        {["4", "5", "6", "-"].map((item, index) => (
          <Col key={index} xs={3} className="p-1">
            <Button
              variant="light"
              className={`calculator-button ${
                item === "-" ? "operator-button" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        {["1", "2", "3", "+"].map((item, index) => (
          <Col key={index} xs={3} className="p-1">
            <Button
              variant="light"
              className={`calculator-button ${
                item === "+" ? "operator-button" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
      <Row>
        {[".", "0", "⌫", "="].map((item, index) => (
          <Col key={index} xs={3} className="p-1">
            <Button
              variant="light"
              className={`calculator-button ${
                item === "=" ? "operator-button" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Calculator;
