import { useParams } from "react-router-dom";
import Pay from "../Pay/Pay";

const PaymentForm = () => {
  const { tourId } = useParams();
  return (
    <div>
      <Pay tourId={tourId} />
    </div>
  );
};

export default PaymentForm;
