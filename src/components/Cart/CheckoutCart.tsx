/*

base for the actual component.
only using the PRODUCT DISPLAY component as a reference to fetchd data.

CURRENTLY NOT IN USE

*/

import React, { useState, useEffect } from "react";
import { PrimaryButton } from "../UIComponents/PrimaryButton";

const ProductDisplay = () => (
  <section>
    <form
      action="https://tbc.tangodefinitions.com/api/create-checkout-session"
      method="POST"
    >
      <PrimaryButton type="submit">Checkout</PrimaryButton>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export const CheckoutCart = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
};
