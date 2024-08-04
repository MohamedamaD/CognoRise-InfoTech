import "./App.css";
import {
  Achievements,
  Background,
  Blog,
  Contact,
  Experience,
  Introduction,
  Navigation,
  Projects,
  Skills,
  Testimonials,
} from "./components";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App w-100 vh-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/background" element={<Background />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
