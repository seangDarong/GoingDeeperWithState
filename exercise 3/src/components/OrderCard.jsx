import React from "react";
import { useState } from "react";
export default function OrderCard({name,price}) {
  const [quantity,setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  };

  const handleDecrement = () => {
    if (quantity > 1){
      setQuantity (quantity - 1);
    }
    
  };
  return (
    <div className="order">
      <div>
        <h4>{name}</h4>
        <small>${price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={handleDecrement} style={{ backgroundColor: quantity === 0 ? "grey" : "#9cc54b", cursor: quantity === 0 ? "not-allowed" : "pointer" }} >-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrement}>+</div>
      </div>
    </div>
  );
}
