import React, { useContext } from "react";
import "./cart.scss";
import { Context } from "../../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, product, totalCartItem, removeFromCart } =
    useContext(Context);

  return (
    <>
      {totalCartItem() === 0 ? (
        <>
          <p className="cartZero"> Nothing in your cart ....</p>
       <Link to="/product">
       <button className="goToProduct">Go To Pruduct Page</button>
       </Link>
        </>
      ) : (
        <section className="cartSection">
          <div className="cartBox">
            <div className="cartTitle">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>

              <p>Remove</p>
            </div>
            <br />
            <hr />
            {product.map((item, i) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div key={i}>
                    <div className="cartTitle cartItem">
                      <img src={item.image} alt="" />
                      <p className="itemTitle">{item.title}</p>
                      <p>&#8377; {item.price * 10}</p>
                      <p>{cartItems[item.id]}</p>
                      {/* <p>$ {item.price * cartItems[item._id]} </p> */}
                      <p
                        className="removeCartItem"
                        onClick={() => removeFromCart(item.id)}
                      >
                        X
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
