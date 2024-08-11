import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import axios from "axios";

const CategorySelection = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch categories.");
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (category) => {
    navigate(`/quiz/${category}`);
  };

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" />
        <span> Loading...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="mb-4">Select a Category</h2>
      <ListGroup>
        {categories.map((category, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CategorySelection;
