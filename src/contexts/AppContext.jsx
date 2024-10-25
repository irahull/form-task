import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [product, setProduct] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || null
  );

  const updateUser = (data) => {
    return setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(currentUser));
  }, [currentUser]);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Error while fetching data");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const totalCartItem = () => {
    let items = 0;
    for (const item in cartItems) {
      items += item.length;
    }
    return items;
  };

  console.log(totalCartItem());

  useEffect(() => {
    getData();
  }, []);

  const contextValue = {
    currentUser,
    updateUser,
    product,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    totalCartItem,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
