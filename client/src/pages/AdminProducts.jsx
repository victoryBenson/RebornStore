import React, { useContext, useEffect, useState } from "react";
import { Loader } from "../component/Loader";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-responsive-modal";
import { CreateProduct } from "../component/CreateProduct";
import { ProductContext } from "../contexts/ProductContext";
import { Items } from "../component/Items";
import { Link } from "react-router-dom";



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

export const AdminProducts = () => {
     const [open, setOpen] = useState(false);
    const {items,getProducts, loading, errorMsg} = useContext(ProductContext)


    
    useEffect(() => {
        getProducts()
    },[])

    if (loading)
        return (
        <div className="flex justify-center items-center h-screen w-full">
            <Loader />
        </div>
    );
  
  if (errorMsg) return <div className="flex justify-center ">Error:{errorMsg}</div>;

  return (
    <section className=" md:w-full bg-brown3">
        <div className="flex flex-wrap justify-evenly items-center py-5 space-y-4">
            <div className="cursor-pointer bg-lightBrown hover:shadow-lg transition-all w-60 p-3 rounded flex flex-col justify-center items-center font-bold text-xl text-ivory">
                <Link to={`/dashboard/createProduct`} className="flex items-center">
                    <BsPlusLg />
                    Create new Product
                </Link>
            </div>
        </div>
        <div>
            <h1 className="p-2 font-bold text-2xl">Products</h1>
            <div className="">
            {
                items? (
                    <div>
                        {
                            items.map((item) => {
                                return (
                                    <Items key={item._id} item={item}/>
                                );
                            })
                        }
                    </div>
                )
                :
                <span>Loading...</span>
            }
            </div>
        </div>
    </section>
  );
};


