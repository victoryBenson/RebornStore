import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState();
    const [items, setItems] = useState({});
    const [totalProduct, setTotalProduct] = useState()

    let backendURL
    if (process.env.NODE_ENV === 'production') {
        backendURL = "https://reborn-api.onrender.com/api/v1/products/";
    } else{
        backendURL = "http://localhost:3000/api/v1/products/";
    }
    console.log(backendURL)

  //create product
  const createProduct = async (productData) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.post(`${backendURL}createProduct`,productData,config);
        toast.success("product created successfully")
        return response.data;
      } catch (error) {
          setLoading(false)
          setErrorMsg(error.response.data.message)
          console.log(error.response.data.message)
          // toast.error(error.response.data.message) 
      }
  };


  //getProduct
  useEffect(() => {
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
      getProducts()
  },[])

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
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.patch(
          `${backendURL}updateProduct`,
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
        <ProductContext.Provider value={{loading, errorMsg, items, totalProduct, deleteProduct, createProduct, updateProduct}}>
            {children}
        </ProductContext.Provider>
    )
}