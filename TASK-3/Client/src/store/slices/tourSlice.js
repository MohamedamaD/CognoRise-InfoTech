import api from "../../services/api";

export const tourSearch = async (query) => {
  try {
    const response = await api.get(`api/tours/search/?query=${query}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during search"
    );
  }
};

export const bookTour = async (tourId) => {
  try {
    const response = await api.post("/api/bookings", { tourId });
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred booking search"
    );
  }
};
export const unBookTour = async (bookingId) => {
  try {
    const response = await api.delete(`/api/bookings/${bookingId}`);
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred booking search"
    );
  }
};

export const bookedTours = async () => {
  try {
    const response = await api.get("/api/bookings");
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during fetch bookings"
    );
  }
};
export const tourDetails = async (id) => {
  try {
    const response = await api.get(`/api/tours/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during fetch bookings"
    );
  }
};
