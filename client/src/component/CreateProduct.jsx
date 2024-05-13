import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { toast } from 'react-toastify';


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

export const CreateProduct = () => {
      const [formData, setFormData] = useState(initialState);
      const {name, brand, category, price, oldPrice, quantity, description, image} = formData 


    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const productData = {
            name,
            brand,
            category, price, oldPrice, quantity, description,image
        }

        // dispatch(createProduct(productData))
    }

    // useEffect(() => {
    //     if(isError){
    //         toast.error("An error occurred")
    //     }
    // }, [isError])

  return (
    <div className=" text-blue flex justify-center">
        <form onSubmit={handleSubmit} className=" w-full flex flex-col items-center">
            <label htmlFor="" className="font-bold p-3 text-2xl">
                Create a new Product
            </label>
            <div className="items-center space-y-2 p-3 w-full ">
                <div className="">
                    <label  htmlFor="name" className="absolut inputLabel bg-gree">Product name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        id=""
                        placeholder="Enter name"
                        className="inputField w-full p-2 outline-none border border-gray/10 rounded"
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
                        className="p-2 border border-gray/10 rounded outline-none w-full"
                        onChange={handleChange}
                    >
                        <option value="fragrance">Fragrance</option>
                        <option value="Skincare">SkinCare</option>
                        <option value="fashion">Fashion</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Phones">Phones</option>
                        <option value="Sports">Sports</option>
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
                        className="w-full p-2 outline-none border border-gray/10 rounded"
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
                        className="w-full p-2 outline-none border border-gray/10 rounded"
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
                        className="w-full p-2 outline-none border border-gray/10 rounded"
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
                        className="w-full p-2 outline-none border border-gray/10 rounded"
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
                {/* <div className='text-red'>{errorMsg && errorMsg}</div> */}
                <div className="flex justify-end py-2">
                    <button type="submit" className="w-full bg-lightBrown text-ivory p-2 rounded shadow hover:shadow-lg">Create</button>
                </div>
            </div>
        </form>
    </div>    
  )
}
