import React, { useContext } from "react";
import "./card.scss";
import { Context } from "../../contexts/AppContext";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

const Card = ({ item }) => {
  const { cartItems, addToCart, totalCartItem, removeFromCart } =
    useContext(Context);
  return (
    <div className="productCard">
      <img src={item.image} alt={item.name} className="productImage" />
      <div className="productInfo">
        <h3 className="productName">{item.title}</h3>
        <p>{item.category}</p>
        <p className="productPrice">&#8377; {item.price *10}</p>
   <div className="cardButton">
   <button className="addToCart" onClick={() => addToCart(item.id)}>
          {!cartItems[item.id] ? (
            " Add To Cart"
          ) : (
            <div className="elseItem">
              <IoMdAdd />
            </div>
          )}
        </button>
        <span>{cartItems[item.id] === 0?"":cartItems[item.id]}</span>
        {cartItems[item.id] ? (
          <button
            className="removeFromCart"
            onClick={() => removeFromCart(item.id)}
          >
            <FaMinus />
          </button>
        ) : (
          ""
        )}
   </div>
      </div>
    </div>
  );
};

export default Card;
