import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment Gateway"
        subheading="Please Pay then eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheckOutForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
