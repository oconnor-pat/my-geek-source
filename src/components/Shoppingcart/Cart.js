import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState(null);

  const addCartItems = 1;
  const removeCartItems = 1;

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = () => {
    setCartItems(cartItems + addCartItems);
  };

  // eslint-disable-next-line no-unused-vars
  const handleRemoveFromCart = () => {
    if (cartItems > null) {
      setCartItems(cartItems - removeCartItems);
    }
  };

  return (
    <div>
      <p>{cartItems} items in your cart</p>
    </div>
  );
}

export const cartItems = Cart;
export default Cart;
