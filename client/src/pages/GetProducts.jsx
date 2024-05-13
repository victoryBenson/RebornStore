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


export const GetProducts = () => {
  const [isActive, setIsActive] = useState(false)
  const [mobileFilter, setMobileFilter] = useState(false)
  const {errorMsg, loading, items} = useContext(ProductContext)
  const [sorted, setSorted] = useState({sorted: "id", reversed: false});
  const [searchPhrase, setSearchPhrase] = useState("")
//   const {_id, image, name, description, color,quantity, size, brand, price, oldPrice, category} = items
  const [products, setProducts] = useState(items)
//   console.log(products)
//   console.log(products)
 


    const handleMobileFilter =()=> {
        setMobileFilter(!mobileFilter)
    };

    const sortByPrice = () => {
        setSorted({sorted: "price", reversed: !sorted.reversed});
        const itemsCopy = [...products];
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
        const itemsCopy = [...products];
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

    const search = (e) => {
        const matchedItems = items.filter((item) => {
        return `${item.name} ${item.category} `.toLowerCase().includes(e.target.value.toLowerCase())
        });
        setProducts(matchedItems);
        setSearchPhrase(e.target.value)
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
        <section>
            <div className="md:flex relative bg-brown3">
                <div className="hidden md:block bg-lightBrown text-white">
                    <SideFilter 
                        search={search}
                        sortByName={sortByName}
                        sortByPrice ={sortByPrice}
                    />
                </div>
                
                <div id="products" className=" md:w-full px-2 mt-4">
                    <Greeting/>
                    <div className="flex items-center sticky top-16 z-50 p-2 gap-2">
                        <div className="">
                            <div onClick={handleMobileFilter} className="flex items-center md:hidden"><CiFilter /><span className="">Filter</span></div>
                            {
                                mobileFilter && (
                                    <FilterMobileView 
                                        handleMobileFilter= {handleMobileFilter}
                                        search={search}
                                        sortByName={sortByName}
                                        sortByPrice={sortByPrice}
                                    />
                                )
                            }
                        </div>
                        <div  className="search-wrapper flex justify-start w-full">
                            <input
                                type="search"
                                name="search-form"
                                className="search-input cursor-pointer p-4 border text-brown border-gray/10 flex w-full transition-all outline-none rounded"
                                placeholder="Search for Products, Category, Brands etc..."
                                value={searchPhrase}
                                onChange={search}
                                autoFocus
                            />
                        </div>
                    </div>
                    {!loading && products.length > -1 && (
                        <div className=" ">
                            <div>
                                {searchPhrase.length && products.length > -1 ? (
                                    <p className="flex items-center p-3 "> <TbShoppingBagSearch />search result for - {searchPhrase}</p>
                                ): null}
                            </div>
                            <div className=" grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 items-center mx-2">
                                {
                                    products.length !== 0 && !loading ? products.map((product) => {
                                            return <Product key={product._id} product={product} />
                                        })
                                    :
                                    (
                                        <SearchNotFound/>
                                    )
                                }
                            </div>                        
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
