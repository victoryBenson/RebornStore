import React, { useEffect, useState, useContext } from "react";
import { Loader } from "../component/Loader";
import "react-responsive-modal/styles.css";
import {  Product } from "../component/Product";
import {TbShoppingBagSearch } from "react-icons/tb";
import { CiFilter } from "react-icons/ci";
import { SearchNotFound } from "../component/NotFound";
import FilterMobileView from "../component/products/FilterMobileView";
import SideFilter from "../component/products/SideFilter";
import Greeting from "../component/Greeting";
import { ProductContext } from "../contexts/ProductContext";
import { BiSort } from 'react-icons/bi'
import { TbClipboardList } from 'react-icons/tb'
import { WiDirectionLeft } from 'react-icons/wi'
import Aside from "../component/Shop/Aside";

export const GetProducts = () => {
    const [isActive, setIsActive] = useState(false)
    const [mobileFilter, setMobileFilter] = useState(false)
    const {errorMsg, loading, items, getProducts} = useContext(ProductContext)
    const [sorted, setSorted] = useState({sorted: "id", reversed: false});
    const [searchPhrase, setSearchPhrase] = useState([])
    const [product, setProducts] = useState(items)

    
    useEffect(() => {
        getProducts()
    },[])


    const handleMobileFilter =()=> {
        setMobileFilter(!mobileFilter)
    };

    const sortByPrice = () => {
        setSorted({sorted: "price", reversed: !sorted.reversed});
        const itemsCopy = [...product];
        itemsCopy.sort((itemA, itemB) => {
        const priceA = `${itemA.price}`
        const priceB = `${itemB.price}`;

        if(sorted.reversed){
            return priceB.localeCompare(priceA)
        }
        return priceA.localeCompare(priceB)
        })

        setProducts(itemsCopy)
    }

    const sortByName = () => {
        setSorted({sorted: "name", reversed: !sorted.reversed});
        const itemsCopy = [...product];
        itemsCopy.sort((itemA, itemB) => {
        const nameA = `${itemA.name}`
        const nameB = `${itemB.name}`;

        if(sorted.reversed){
            return nameB.localeCompare(nameA)
        }
        return nameA.localeCompare(nameB)
        })
        setProducts(itemsCopy)
    }

    let matchedItems
    if(items !== null){
        matchedItems = items.filter((item) => {
            if(searchPhrase == "" || `${item.name} ${item.category} ${item.brand}`.toLowerCase().includes(searchPhrase.toLowerCase())){
                return item
            }
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll', () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })

    if (loading) {
        return <div>{<Loader/>}</div>;
    }

    if (errorMsg) {
        return <div> Error: {errorMsg}</div>;
    }

    return (
        <div id="products" className="col-span-5 md:col-span-4 px-2 bg-brown3">
            <Greeting/>
            <div className="bg-white flex flex-col items-center sticky top-16 z-50 p-2 gap-2">
                <div  className="search-wrapper flex justify-start w-full">
                    <input
                        type="search"
                        name="search-form"
                        className="search-input cursor-pointer p-4 border text-brown border-gray/10 flex w-full transition-all outline-none rounded"
                        placeholder="Search for Products, Category, Brands etc..."
                        value={searchPhrase}
                        onChange={(e) => setSearchPhrase(e.target.value)}
                    />
                     {/* <div className="flex gap-2 items-center justify-between" >
                        <div className="border rounded border-gray/20">
                            <select  onChange={fill}  className="w-full p-2 outline-none rounded transition-all bg-white border border-gray/5 text-sm font-poppins" >
                                <option value="All">-Select-</option>
                                <option value="men">men</option>
                                <option value="women">women</option>
                                <option value="unisex">unisex</option>
                                <option value="kids">kids</option>
                            </select>
                        </div>
                        <div className="flex gap-2">
                            <button type="button" onClick={sortByName} className="border-brown/10 border rounded p-1 text-sm" >sortbyname</button>
                            <button type="button" onClick={sortByPrice} className="border-brown/10 border rounded text-sm p-1" >sortprice</button>
                        </div>
                    </div> */}
                </div>
                <div>
                    {searchPhrase.length && matchedItems.length > 1 ? (
                        <p className="flex items-center md:p-3 text-sm"> <TbShoppingBagSearch />search result for - {searchPhrase}</p>
                    ): null}
                </div>
            </div>
            {matchedItems.length ? (
                <div className=" ">
                    <div className=" grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 items-center mx-2">
                        {
                            matchedItems.map((product) => {
                                return <Product key={product._id} product={product} />
                            })
                        }
                    </div>                        
                </div>
            )
            :
            (
                <div className="h-screen mt-10">
                    <SearchNotFound/>
                </div>
            )
        }
        </div>
    );
};
