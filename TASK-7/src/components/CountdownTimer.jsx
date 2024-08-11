import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState("");
  const [timeRemaining, setTimeRemaining] = useState({});
  const [isCountingDown, setIsCountingDown] = useState(false);

  useEffect(() => {
    let interval;

    if (isCountingDown && targetDate) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = new Date(targetDate).getTime() - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeRemaining({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
          setIsCountingDown(false);
        } else {
          setTimeRemaining({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          });
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isCountingDown, targetDate]);

  const handleStartCountdown = () => {
    setIsCountingDown(true);
  };

  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h2>Countdown Timer</h2>
          <Form>
            <Form.Group controlId="targetDate">
              <Form.Label>Select Target Date and Time</Form.Label>
              <Form.Control
                type="datetime-local"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-3"
              onClick={handleStartCountdown}
              disabled={!targetDate || isCountingDown}
            >
              Start Countdown
            </Button>
          </Form>
          {isCountingDown && (
            <div className="mt-4">
              <h3>
                Time Remaining: {timeRemaining.days}d {timeRemaining.hours}h{" "}
                {timeRemaining.minutes}m {timeRemaining.seconds}s
              </h3>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountdownTimer;
