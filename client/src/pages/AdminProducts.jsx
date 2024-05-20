import React, { useContext, useEffect, useState } from "react";
import { Loader } from "../component/Loader";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-responsive-modal";
import { CreateProduct } from "../component/CreateProduct";
import { ProductContext } from "../contexts/ProductContext";
import { Items } from "../component/Items";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { SearchNotFound } from "../component/NotFound";
import { TbShoppingBagSearch } from "react-icons/tb";



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
    const {items,getProducts, loading, errorMsg,searchResult, setSearchResult} = useContext(ProductContext)
   

    let searchOutput
    if(items !== null){
        searchOutput = items.filter((item) => {
            if(searchResult == "" || `${item.name} ${item.category} ${item.brand}`.toLowerCase().includes(searchResult.toLowerCase())){
                return item
            }
        })
    }

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
    <section className=" md:p-5 p-2 md:w-full shadow">
        <div className="flex items-center justify-center">
            <Link to={`/dashboard/createProduct`} className="bg-lightBrown cursor-pointer  hover:shadow-lg transition-all w-60 p-3 rounded flex justify-center items-center font-semibold md:text-xl text-ivory">
                <BsPlusLg />
                Create new Product
            </Link>
        </div>
        <div>
        <div className='block md:flex  items-center justify-between py-5 sticky top-10 bg-brown3 md:px-2'>
                <h1 className='md:p-2 font-semibold md:text-lg'>Avaliable Stocks</h1>
                <div className='flex md:w-[70%]'>
                    <input 
                        type="search"
                        value={searchResult}
                        onChange={(e) => setSearchResult(e.target.value)} 
                        placeholder='search name brand category here...' 
                        className='p-3  border-brown/5 rounded border outline-none w-full flex'
                        // autoFocus 
                    />
                </div>
            </div>
            <div className="">
                {/* search result label */}
            <div >{searchResult.length && searchOutput.length > 1 ? <span className='px-3 flex items-center'><TbShoppingBagSearch /> search result for "{searchResult}"...</span> : null}</div>
            {/* search result mapping */}
            {
                searchOutput.length ? (
                    <div className="min-h-screen">
                        {
                            searchOutput.map((item) => {
                                return (
                                    <Items key={item._id} item={item}/>
                                );
                            })
                        }
                    </div>
                )
                :
                <SearchNotFound/>
            }
            </div>
        </div>
    </section>
  );
};


