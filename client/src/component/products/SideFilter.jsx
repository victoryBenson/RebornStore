import React from 'react'
import { BiSort } from 'react-icons/bi'
import { TbClipboardList } from 'react-icons/tb'

const SideFilter = ({search, sortByName,sortByPrice}) => {
  return (
    <div className="sticky top-20 z-40 lg:w-72 inset-0 p-5 space-y-4" >
        <h1 className="flex items-center font-semibold"><TbClipboardList />Filter</h1>
        <div className="border rounded border-gray/20">
            <select  onChange={search}  className="w-full p-3 outline-none rounded transition-all bg-white text-brown text-br border border-gray/5" >
                <option value="All">All Product</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
                <option value="kids">Kids</option>
            </select>
        </div>
        <div className="">
            <p className=" flex items-center font-semibold"><BiSort />Sort</p>
            <p  className="flex items-center p-2">
                <button type="button" onClick={sortByName} className="border-brown/10 border p-2 rounded text-sm" >SortByName</button>
            </p>
            <p  className="flex items-center p-2">
                <button type="button" onClick={sortByPrice} className="border-brown/10 border p-2 rounded text-sm" >SortByPrice</button>
            </p>
        </div>
    </div>
  )
}

export default SideFilter