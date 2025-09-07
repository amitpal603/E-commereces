import React, { createContext, useEffect, useState } from "react";

export const Ecommerce = createContext();

function Context({ children }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
     
    try {
      setLoading(true)
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();

      if(data && data.products){
        setProduct(data.products)
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const Store = {
    product ,loading
  };
  return <Ecommerce.Provider value={Store}>{children}</Ecommerce.Provider>;
}

export default Context;
