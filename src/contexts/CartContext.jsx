import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currItem) => acc + currItem.amount, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  useEffect(() => {
    const total = cart.reduce(
      (acc, currItem) => acc + currItem.amount * currItem.price,
      0
    );
    setTotal(total);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) return { ...item, amount: cartItem.amount + 1 };
        else return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  // const totalCart = () => {
  //   const totalPrice = cart.reduce(
  //     (total, item) => total + item.price * item.amount,
  //     0
  //   );
  //   return totalPrice.toFixed(2);
  // };

  // const amountCart = () => {
  //   const amount = cart.reduce((amount, item) => amount + item.amount, 0);
  //   return amount;
  // };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  const decreaseAmount = (id) => {
    const preNewCart = cart.map((item) =>
      item.id === id ? { ...item, amount: item.amount - 1 } : item
    );
    const newCart = preNewCart.filter((item) => item.amount >= 1);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        addToCart,
        removeFromCart,
        clearCart,
        // totalCart,
        // amountCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
