import React from "react";
import "./cartItem.css";

import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.bookCover} alt={item.title} />
      </div>
      <Link to={`/books/${item.id}`} className="cartItem__name">
        <p>{item.title}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <div className="cartitem__qty">
        <label htmlFor="qty">Qty</label>
        <input
          value={item.qty}
          min="1"
          type="number"
          id="qty"
          name="qty"
          onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        />
      </div>

      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
     
    </div>
  );
};

export default CartItem;
