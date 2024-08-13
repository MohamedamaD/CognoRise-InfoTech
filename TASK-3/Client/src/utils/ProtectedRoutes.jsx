import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn ? <Outlet /> : <Navigate to={"/login"} replace={true} />;
};

export const UnProtectedRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return !isLoggedIn ? <Outlet /> : <Navigate to={"/"} replace={true} />;
};
