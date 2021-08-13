/* 

  this component is for using the UI of Stripe. 
  CURRENTLY NOT IN USE

*/

import React from "react";
import { Course } from "../../contexts/CartContext";
import { PrimaryButton } from "../UIComponents/PrimaryButton";

export const CheckoutCartForm = ({ cart }: { cart: Course[] }) => {
  return (
    <form
      action="https://tbc.tangodefinitions.com/api/create-checkout-session"
      method="POST"
      //   onSubmit={async (e) => {
      //     e.preventDefault();
      //     try {
      //       const result = await fetch(
      //         "https://tbc.tangodefinitions.com/api/create-checkout-session",
      //         {
      //           method: "POST",
      //             body: JSON.stringify({ item: 300 }),
      //         }
      //       );
      //         const data = await result.json();
      //       console.log(result);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //     console.log("todo bien");
      //   }}
    >
      <PrimaryButton
        type="submit"
        style={cart.length === 0 ? { backgroundColor: "gray" } : {}}
        disabled={cart.length === 0}
      >
        Checkout
      </PrimaryButton>
    </form>
  );
};
