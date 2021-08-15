import React from "react";
import { Course } from "../backend/types";

export type CartProps = {
  cart: Course[];
  addProductToCart: (Product: Course) => void;
  removeProductFromCart: (id: number) => void;
  error: string | null;
  handleError: () => void;
  emptyCart: () => void;
  onPayment: () => void;
};

export const CartContext = React.createContext({} as CartProps);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [error, setError] = React.useState<string | null>(null);
  const [paid, setPaid] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handlePaid = async () => {
      try {
        const result = await fetch(
          "https://tbc.tangodefinitions.com/api/retrieve-session"
        );
        const data = result.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    if (paid) {
      handlePaid();
    }
  }, [paid]);

  const addProductToCart = (Product: Course) => {
    if (cart.length === 0) {
      const newCart = [...cart, Product];
      setCart(newCart);
    } else {
      const exist = cart.some((course) => course.id === Product.id);
      if (!exist) {
        const newCart = [...cart, Product];
        setCart(newCart);
      } else {
        setError("You have this course already in your shopping cart");
      }
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeProductFromCart = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const handleError = () => {
    setError(null);
  };

  const onPayment = () => {
    setPaid(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        error,
        handleError,
        emptyCart,
        onPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
