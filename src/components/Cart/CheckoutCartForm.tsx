/* 

  this component is for using the UI of Stripe. 
  CURRENTLY NOT IN USE

*/

import React from "react";
// import { useHistory } from "react-router";
import { Course } from "../../backend/types";
import { SecondaryButton } from "../UIComponents/SecondaryButton";
import { useAuth0 } from "@auth0/auth0-react";

export const CheckoutCartForm = ({ cart }: { cart: Course[] }) => {
  const { user } = useAuth0();
  const body = {
    user: user,
    cart: cart,
  };

  return (
    <form
      style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const result = await fetch(
            "https://tbc.tangodefinitions.com/api/create-checkout-session",
            {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
          const data = await result.json();
          // history.push(data.url);
          window.location.href = data.url;
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <SecondaryButton
        type="submit"
        style={cart.length === 0 ? { backgroundColor: "gray" } : {}}
        disabled={cart.length === 0}
      >
        Checkout
      </SecondaryButton>
    </form>
  );
};
