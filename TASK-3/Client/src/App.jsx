import "./App.css";
import {
  BookedTours,
  LandingPage,
  LoginForm,
  Navbar,
  PaymentForm,
  RegisterForm,
  SearchForm,
  TourDetails,
} from "./components";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes, UnProtectedRoutes } from "./utils";
import { AuthLayout } from "./layouts";
import { EmailSignUp, ForgotPassword, Loading, ResetPassword } from "./pages";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./hooks";

function App() {
  const loading = useAuth();
  if (loading)
    return (
      <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="App">
        <Toaster position="top-center" />
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route element={<UnProtectedRoutes />}>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="email-sign-up" element={<EmailSignUp />} />
                <Route path="reset-password" element={<ResetPassword />} />
              </Route>
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/search" element={<SearchForm />} />

              <Route path="/books" element={<BookedTours />} />
              <Route path="/tours/:id" element={<TourDetails />} />
              <Route path="/pay/:tourId" element={<PaymentForm />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
