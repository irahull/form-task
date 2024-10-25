import React, { useContext } from "react";
import "./product.scss";
import { Context } from "../../contexts/AppContext";
import Card from "../../components/card/Card";

const Product = () => {
  const { product } = useContext(Context);

  return (
    <div className="productWrapper">

      <div className="productBox">
        {product.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
