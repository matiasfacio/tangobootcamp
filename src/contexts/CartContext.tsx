import React from "react";

export type Course = {
  id: number;
  name: string;
  value: number;
  currency: "eur" | "usd";
};

export type CartProps = {
  cart: Course[];
  addProductToCart: (Product: Course) => void;
  removeProductFromCart: (id: number) => void;
  error: string | null;
  handleError: () => void;
  emptyCart: () => void;
};

export const CartContext = React.createContext({} as CartProps);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [error, setError] = React.useState<string | null>(null);

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

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        error,
        handleError,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
