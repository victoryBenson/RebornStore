import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [items, setItems] = useState({});
    const [totalProduct, setTotalProduct] = useState();
     

    let backendURL
    if (process.env.NODE_ENV === 'production') {
        backendURL = "https://rebornv2api.onrender.com/api/v1/products/";
    } else{
        backendURL = "http://localhost:3000/api/v1/products/";
    }
    console.log(backendURL)

  //create product
  const createProduct = async (productData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

   const res = await axios.post(`${backendURL}createProduct`,productData,config);
   return await res.data
  };


  //getProducts
  const getProducts = async() => {
    setLoading(true)
    try {
        const config = {
            headers: {
            "Content-Type": "application/json",
            },
        };
        const response = await axios.get(
            `${backendURL}getProducts`,
            config
        )
        setLoading(false)
        setItems(response.data)
        console.log(response.data)
        return response.data;

    } catch (error) {
        setLoading(false)
        setErrorMsg(error.response.data.message)
        console.log(error.response.data.message)
        toast.error(error.response.data.message)
    }
  };




  //calculate number of products
  useEffect(() => {
    const getTotalProduct = async () => {
        try {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
    
          const response = await axios.get(
            `${backendURL}getTotalProduct`,
            config
          );
    
          setLoading(false)
          setTotalProduct(response.data)
          // console.log(response.data)
          return response.data;
        } catch (error) {
            setLoading(false)
            setErrorMsg(error.response.data.message)
            console.log(error.response.data.message)
            // toast.error(error.response.data.message)
        }
    };
    getTotalProduct()
  },[])

  //edit product
  const updateProduct =  async (productData) => {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.patch(`${backendURL}updateProduct/:id`, productData, config);
        return response.data;
    };

  //delete product
  const deleteProduct = async (productData) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.patch(
          `${backendURL}deleteProduct`,
          productData,
          config
        );
        return response.data;
      } catch (error) {
          setLoading(false)
          setErrorMsg(error.response.data.message)
          console.log(error.response.data.message)
          toast.error(error.response.data.message)
      }
  };



    return(
        <ProductContext.Provider value={{loading, errorMsg, items, totalProduct,getProducts, deleteProduct, createProduct, updateProduct}}>
            {children}
        </ProductContext.Provider>
    )
}