import React, { createContext, useEffect, useState } from "react";

export const Ecommerce = createContext();

function Context({ children }) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [search,setSearch] = useState("")
  const [cartDetail,setCartDetail] = useState(null)

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

  // search feature add 

  const filterSearch = product.filter((item) => {
    const searchTerm = search.toLowerCase()

    if(searchTerm === "") return true

    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
    )
  })
  const Store = {
    product ,loading,setSearch,filterSearch,cartDetail,setCartDetail,setLoading
  };
  return <Ecommerce.Provider value={Store}>{children}</Ecommerce.Provider>;
}

export default Context;
