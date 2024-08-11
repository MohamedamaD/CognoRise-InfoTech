import { useState, useEffect, useMemo } from "react";
import { Container, Form, Row, Col, Alert } from "react-bootstrap";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch exchange rates.");
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (amount <= 0) {
      setResult(null);
      return;
    }

    const convertCurrency = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        const rate = data.rates[toCurrency];
        setResult((amount * rate).toFixed(2));
      } catch (error) {
        setError("Failed to fetch exchange rates.");
        console.error(error);
      }
    };

    convertCurrency();
  }, [fromCurrency, toCurrency, amount]);

  const currenciesMap = useMemo(
    () =>
      currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      )),
    [currencies]
  );

  return (
    <Container className="text-body" style={{ maxWidth: 600 }}>
      <Row>
        <Col>
          <h2>Currency Converter</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <div className="rounded bg-body-secondary p-3 mb-3">
              <Form.Group controlId="formFromCurrency" className="mb-4">
                <Form.Control
                  as="select"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="mb-2"
                >
                  {currenciesMap}
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId="formAmount"
                className="d-flex gap-3 align-items-center justify-content-center"
              >
                <Form.Label className="m-0 fw-bold fs-5">$</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  min={0}
                  className="bg-body-secondary"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="rounded bg-body-secondary p-3 mb-3">
              <Form.Group controlId="formToCurrency">
                <Form.Control
                  as="select"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {currenciesMap}
                </Form.Control>
              </Form.Group>

              {result !== null && (
                <h3 className="mt-3">
                  <span className="m-0 fw-bold fs-5">$</span> {result}
                </h3>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrencyConverter;
