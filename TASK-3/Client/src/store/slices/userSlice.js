import { createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

export const login = async (payload) => {
  try {
    const response = await api.post("api/users/login", payload);
    return response.data;
  } catch (error) {
    console.log(error)
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during logging"
    );
  }
};
export const register = async (payload) => {
  try {
    const response = await api.post("api/users/register", payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during registration"
    );
  }
};
export const logout = async () => {
  try {
    const response = await api.post("api/users/logout");
    return response.data;
  } catch (error) {
    throw (
      error?.response?.data?.message || "An error occurred during logging out"
    );
  }
};

export const forgotPassword = async (payload) => {
  try {
    const response = await api.post(`api/users/forgot-password`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during sending the email try again later"
    );
  }
};
export const resetPassword = async (payload) => {
  try {
    const response = await api.post(`api/users/reset-password`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during resetting try again later"
    );
  }
};
export const verifyOTP = async (payload) => {
  try {
    const response = await api.post(`api/users/verify-otp`, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw (
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      "An error occurred during verifying try again later"
    );
  }
};

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  isLoggedIn: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn, setUser } = userSlice.actions;

export default userSlice.reducer;
