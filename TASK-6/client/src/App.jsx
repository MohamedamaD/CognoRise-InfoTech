import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import CategorySelection from "./CategorySelection";
import QuizApp from "./QuizApp";
function App() {
  return (
    <Router>
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<CategorySelection />} />
          <Route path="/quiz/:category" element={<QuizApp />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
