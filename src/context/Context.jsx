import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    setCart(JSON.parse(localStorage.getItem('cartItem') || []))
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
  // add to cart feature add

  const HandleAddToCart = (singleProduct) => {
    const existingProduct = [...cart]
     const findIndexCurrentItem  = existingProduct.findIndex((cart) => cart.id === singleProduct.id)  
    
     if(findIndexCurrentItem === -1){
      existingProduct.push({
        ...singleProduct,
        quantity: 1,
        totalPrice : singleProduct?.price
      })
      toast.success('Add to cart successFully')
     }
     else {
      existingProduct[findIndexCurrentItem] = {
        ...existingProduct[findIndexCurrentItem],
        quantity: existingProduct[findIndexCurrentItem].quantity + 1,
        totalPrice : (existingProduct[findIndexCurrentItem].quantity + 1) * existingProduct[findIndexCurrentItem].price 
      }
      
     }
    setCart(existingProduct)
    localStorage.setItem('cartItem',JSON.stringify(existingProduct))
  }
  // remove cart

  const HandleRemove = (getCartItem,isFullyRemove)  => {
    const existingItem = [...cart]
    const findIndex = existingItem.findIndex((item) => item.id === getCartItem.id)

    if(isFullyRemove){
      existingItem.splice(findIndex,1)
      toast.error('Remove Item into cart')
    }
    else{
      existingItem[findIndex] = {
        ...existingItem[findIndex],
        quantity :existingItem[findIndex].quantity - 1,
        totalPrice : (existingItem[findIndex].quantity -1) * existingItem[findIndex].price
      }
    }
    localStorage.setItem('cartItem',JSON.stringify(existingItem))
    setCart(existingItem)
  }
   const removeHandle = (id) => {
    const update = cart.filter((item) => item.id !== id)
    localStorage.setItem("cartItem",JSON.stringify(update) || [])
    setCart(update)

   }
  const Store = {
    product ,loading,setSearch,filterSearch,cartDetail,setCartDetail,setLoading,HandleAddToCart,cart,HandleRemove
  };
  return <Ecommerce.Provider value={Store}>{children}</Ecommerce.Provider>;
}

export default Context;
