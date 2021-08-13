/*

this component is for only receiving Credit Card payment with out displaying much information

CURRENTLY IN USE

*/

import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PrimaryButton } from "../../components/UIComponents/PrimaryButton";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router";

export const CheckoutForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const { emptyCart } = React.useContext(CartContext);
  const history = useHistory();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  // const [modalCancel, setModalCancel] = useState<boolean>(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const fetchData = async () => {
      const result = await fetch(
        "https://tbc.tangodefinitions.com/api/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        }
      );

      const data = await result.json();
      setClientSecret(data.clientSecret);
    };

    fetchData();
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "rgb(247, 126, 126)",
      },
    },
  };

  // const handleChange = async (event) => {
  //   // Listen for changes in the CardElement
  //   // and display any errors as the customer types their card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      emptyCart();
      history.push("/payment-confirmation");
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      style={{ padding: "10px 20px", width: 400, marginTop: 100 }}
    >
      <p>At the moment we only accept credit cards.</p>
      <p>
        If you wish to pay via bank transfer or PayPal, please contact Matias
        Facio:{" "}
        <span
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <b>matiaspersonal@gmail.com</b>
        </span>
      </p>
      <p style={{ marginTop: 50 }}>Enter your payment information here:</p>
      <CardElement id="card-element" options={cardStyle} />
      <PrimaryButton disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "CHECKOUT"
          )}
        </span>
      </PrimaryButton>
      <p
        style={{
          fontSize: "0.7rem",
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        Payments are being handle with Stripe
      </p>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
    </form>
  );
};
