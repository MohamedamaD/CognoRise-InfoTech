import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  forgotPassword,
  login,
  logout,
  register,
  resetPassword,
  setIsLoggedIn,
  setUser,
  verifyOTP,
} from "../store/slices/userSlice";

import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import {
  bookedTours,
  bookTour,
  tourDetails,
  tourSearch,
  unBookTour,
} from "../store/slices/tourSlice";
import { queryKeys } from "../constants/keys";

// auth
export function useLogin() {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (user) => login(user),
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.accessToken);
      toast.success(data.message);
      const userData = jwtDecode(data.accessToken);
      dispatch(setUser(userData));
      dispatch(setIsLoggedIn(true));
    },
    onError: (error) => {
      toast.error(error);
    },
  });
}
export function useRegister() {
  const go = useNavigate();
  return useMutation({
    mutationFn: (user) => register(user),
    onSuccess: (data, params) => {
      toast.success(data.message);
      go("/email-sign-up", { state: { email: params.email } });
    },
    onError: (error) => {
      toast.error(error);
    },
  });
}
export function useVerifyOTP() {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (payload) => verifyOTP(payload),
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.accessToken);
      toast.success(data.message);
      const userData = jwtDecode(data.accessToken);
      dispatch(setUser(userData));
      dispatch(setIsLoggedIn(true));
    },
    onError: (error) => {
      toast.error(error);
    },
  });
}
export function useLogout() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: (user) => logout(user),
    onSuccess: () => {
      sessionStorage.removeItem("accessToken");
      Cookies.remove("refreshToken");
      dispatch(setIsLoggedIn(false));
    },
  });
}
export function useForgotPassword() {
  return useMutation({
    mutationFn: (payload) => forgotPassword(payload),
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error);
    },
  });
}
export const useResetPassword = () => {
  const go = useNavigate();
  return useMutation({
    mutationFn: (payload) => resetPassword(payload),
    onSuccess: (data) => {
      toast.success(data.message);
      go("/login");
    },
    onError: (error) => {
      toast.error(error);
    },
  });
};

// Tour

export const useTourSearch = (query) => {
  return useQuery({
    queryFn: () => tourSearch(query),
    queryKey: [queryKeys.TOUR_SEARCH_KEY, query],
  });
};
export const useBookTour = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tourId) => bookTour(tourId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [],
      });
    },
  });
};
export const useUnBookTour = (bookingId) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => unBookTour(bookingId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [],
      });
    },
  });
};
export const useBookedTours = () => {
  return useQuery({
    queryFn: () => bookedTours(),
    queryKey: [queryKeys.BOOKED_TOUR_KEY],
  });
};

export const useTourDetails = (id) => {
  return useQuery({
    queryFn: () => tourDetails(id),
    queryKey: [queryKeys.TOUR_DETAILS_KEY, id],
  });
};
