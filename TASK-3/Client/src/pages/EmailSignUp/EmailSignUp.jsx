import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyOTP } from "../../hooks/Query";
import { useEffect, useState } from "react";
import { FormControl, Form, FormLabel, Button } from "react-bootstrap";
import Loading from "../Loading/Loading";

const EmailSignUp = () => {
  const state = useLocation().state;

  const go = useNavigate();
  const { mutateAsync, isPending } = useVerifyOTP();
  const [otpCode, setOtp] = useState("");
  const onSubmit = async (ev) => {
    ev.preventDefault();
    await mutateAsync({ otpCode, email: state.email });
  };
  useEffect(() => {
    if (!state) {
      go("/sign-up", { replace: true });
    }
  }, [state, go]);
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormLabel htmlFor="otpCode" title="otp label">
          Enter OTP Code
        </FormLabel>
        <FormControl
          value={otpCode}
          title="otp"
          name="otpCode"
          className="mb-3"
          id="otpCode"
          onChange={(event) => setOtp(event.target.value)}
        ></FormControl>
        <Button type="submit" className="fw-medium">{isPending ? <Loading /> : "Confirm"}</Button>
      </Form>
    </div>
  );
};

export default EmailSignUp;
