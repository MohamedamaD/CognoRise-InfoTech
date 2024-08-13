import { Outlet } from "react-router-dom";
import { images } from "../../constants";

const AuthLayout = () => {
  return (
    <div>
      <section>
        <div className="">
          <img
            src={images.AUTH_BACKGROUND}
            className="w-100 object-fit-cover"
            height={300}
            alt=""
          />
        </div>
        <p className="fs-1 fw-light">Flight Reservation</p>
        <p>
          Please make sure that you fill in the name which is in your passport.
        </p>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
