import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import axios from "axios";

const QuizApp = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/questions/${category}`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [category]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (questions[currentQuestionIndex]?.answer === selectedOption) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setTimer(30);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <Container>
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
        <Button
          variant="primary"
          onClick={() => navigate("/")}
          className="mt-3"
        >
          Go to Home
        </Button>
      </Container>
    );
  }

  if (questions.length === 0) {
    return <Container>Loading...</Container>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container>
      <h2>{currentQuestion.question}</h2>
      <div className="mb-3">
        <strong>
          Question {currentQuestionIndex + 1} of {questions.length}
        </strong>
      </div>
      <div id="timer" className="mb-3">
        Time left: {timer} seconds
      </div>
      {currentQuestion.options.map((option, index) => (
        <Form.Check
          key={index}
          type="radio"
          id={`option-${index}`}
          label={option}
          name="quiz-option"
          value={option}
          checked={selectedOption === option}
          onChange={handleOptionChange}
          className="mb-2"
        />
      ))}
      <Button
        variant="primary"
        onClick={handleNextQuestion}
        disabled={!selectedOption}
        className="mt-3"
      >
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
      </Button>
    </Container>
  );
};

export default QuizApp;
