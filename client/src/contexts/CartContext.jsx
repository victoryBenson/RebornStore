import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)

     // add to cart  
     const addToCart = (product,id) => {
        const newItem = {...product, amount: 1}
        
        const cartItem = cart.find((item) => {
          return item._id === id;
         });
         
        if (cartItem) {
            const newCart = [...cart].map((item) => {
            if (item._id === id ){
                toast.info('cart quantity increased')
                return {...item, amount: cartItem.amount + 1}
            } else{
                return item
            }
        });
        setCart(newCart)

        } else {
            setCart([...cart, newItem])
            // sessionStorage.setItem("cart", JSON.stringify(cart))
            toast.success(`Product is added to Cart`)
        }

    };

     // remove Item from Cart
     const removeCart = (id) => {
        const newCart = cart.filter((item)=> {
          return item._id !== id
        });
        setCart(newCart)
      }
  
      // clear Cart
      const clearCart = () => {
        setCart([])
      }

    // increase Amount 
    const increaseCart = (id) => {
      const cartItem = cart.find((item) => item._id === id);
      addToCart(cartItem, id)
    }

  
   //decreaseCart
   const decreaseCart = (id) => {
    const cartItem = cart.find((item) => item._id === id);
    if(cartItem){
      const newCart = cart.map((item)=> {
        if (item._id === id){
          return {...item, amount: cartItem.amount - 1}
        }else {
          return item
        }
      });
      setCart(newCart)
    }
      if (cartItem.amount < 2) {
        removeCart(id)
      }
  }


        // update item
    useEffect(() => {
        if(cart.length){
          const amount = cart.reduce((accumulator,currentItem) => {
            return accumulator + currentItem.amount
          }, 0)
          setItemAmount(amount)
        }
      }, [cart])

      useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.amount
        }, 0);
        setTotal(total);
      });
  
    return(
        <CartContext.Provider value={{ addToCart, cart, removeCart, clearCart, increaseCart, decreaseCart, itemAmount, total}}>{children}</CartContext.Provider>
    )
}