import React, { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { TbShoppingBagEdit } from "react-icons/tb";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import axios from 'axios';
import { toast } from 'react-toastify';



let backendURL
if (process.env.NODE_ENV === 'production') {
    backendURL = "https://rebornv2api.onrender.com/api/v1/products/";
} else{
    backendURL = "http://localhost:3000/api/v1/products/";
}
console.log(backendURL)

const initialState = {
    name: "",
    brand: "",
    category: "",
    price: "",
    oldPrice: "",
    quantity: "",
    description: "",
    image: ""
    
}

export const EditProduct = () => {
    const [formData, setFormData] = useState(initialState);
    const {name, brand, category, price, oldPrice, quantity, description, image} = formData
    const location = useLocation()
    const {updateProduct} = useContext(ProductContext);
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [product, setProduct] = useState()
    const {id} = useParams()
    const navigate = useNavigate()

    

      //singleProduct
    useEffect(() => {
        if(product !== null){
            const getProduct = async() => {
              setLoading(true)
              try {
                  const config = {
                      headers: {
                      "Content-Type": "application/json",
                      },
                  };
                const response = await axios.get(
                      `${backendURL}getProduct/${id}`,
                      config
                    )
                    setLoading(false)
                    setProduct(response.data)
                    console.log(product)
                    return  await response.data;
      
              } catch (error) {
                  setLoading(false)
                  setErrorMsg(error.message)
                  console.log(error.message)
              }
            };
            getProduct()
        }
    },[])

    //update input field
    useEffect(() => {
        if(product){
            setFormData({
                name: product?.name,
                brand: product?.brand,
                category: product?.category,
                oldPrice: product?.oldPrice,
                price: product?.price,
                quantity: product?.quantity,
                description: product?.description,
                image: product?.image,
            })
        }
    }, [ product])

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

      //update Product 
    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const productData = {
                name,
                brand,
                category, price, oldPrice, quantity, description,image
            }
            // await updateProduct(productData)
            const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
      
              const response = await axios.put(`${backendURL}updateProduct/${id}`, productData, config);
              setLoading(false)
              navigate('/dashboard/admin-products')
              scrollToTop()
              toast.success('Product Edited Successfully')
              return response.data;
        } catch (error) {
            setErrorMsg(error.message)
            console.log(error.message)
            toast.error(error.message) 
            setLoading(false)
        }
    }


    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
        


  return (
    <div className="bg-brown3 flex flex-col justify-center w-full">
        <form onSubmit={handleSubmit} className=" flex flex-col items-center bg-white md:p-10 rounded md:my-10 mx-[5%] lg:mx-[20%]">
            <label htmlFor="" className="font-semibold p-3 text-base md:text-2xl flex items-center">
                <TbShoppingBagEdit />
                Edit Products
            </label>
            <div className="items-center p-3 w-full space-y-4">
                <div className="">
                    <label  htmlFor="name" className="absolut inputLabel bg-gree">Product name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id=""
                        placeholder="Enter name"
                        className="inputField w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="name" className="block">
                        Select Category:
                    </label>
                    <select
                        name="category"
                        id=""
                        className="p-3 border border-gray/10 rounded outline-none w-full"
                        onChange={handleChange}
                    >
                        <option value="All">-select-</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="unisex">Unisex</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="name">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        value={brand}
                        id=""
                        placeholder="Enter product brand"
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="name">Price</label>
                    <input
                        type="text"
                        name="price"
                        value={price}
                        id=""
                        placeholder="Enter product price"
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="name">Old Price</label>
                    <input
                        type="text"
                        name="oldPrice"
                        value={oldPrice}
                        id=""
                        placeholder="Enter product price"
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="name">Quantity</label>
                    <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        id=""
                        placeholder="Enter product quantity"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        className="w-full p-3 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="name">Description</label>
                    <textarea 
                            name="description" 
                        value={description} id="" cols="10" rows="5" 
                        placeholder="Enter product description" 
                        className="border border-gray/20 rounded outline-none p-2"
                        onChange={handleChange}
                        >
                        
                    </textarea>
                </div>
                <div className="space-y-2">
                    <label htmlFor="name" className='flex items-center'>Select Image <AiOutlinePlus className='mt-1'/></label>
                    <input
                        type="text"
                        name="image"
                        value={image}
                        id=""
                        placeholder="Paste the image url"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        className="w-full p-2 outline-none border border-gray/10 rounded"
                        onChange={handleChange}
                    />
                    {
                        image && (

                        <p className='h-20 w-20 pt-2'>
                            <img src={image} alt="image"  className='object-fit h-full w-full'/>
                        </p>
                        )
                    }
                </div>
                <div className='text-red text-sm'>{errorMsg && errorMsg}</div>
                <div className="flex justify-end py-2 gap-4">
                    <button type="submit" className="w-full bg-lightBrown hover:font-semibold text-ivory p-3 hover:opacity-80 transition-all duration-300 rounded shadow hover:shadow-lg">{loading ? "Please wait..." : "Update Product"}</button>
                    <Link to='/dashboard/admin-products' onClick={scrollToTop} className='border border-gray/20 rounded-lg p-2 px-4 flex w-[20%] items-center justify-center hover:opacity-90 transition-all'>Cancel</Link>
                </div>
            </div>
        </form>
    </div>
  )
}
