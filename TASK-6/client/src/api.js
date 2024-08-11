import axios from "axios";

export const fetchQuizzes = async () => {
  try {
    const response = await axios.get("http://localhost:5000/quizzes");
    return response.data;
  } catch (error) {
    console.error("Error fetching quizzes: ", error);
  }
};

export const addQuiz = async (quiz) => {
  try {
    const response = await axios.post("http://localhost:5000/quizzes", quiz);
    return response.data;
  } catch (error) {
    console.error("Error adding quiz: ", error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:5000/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
