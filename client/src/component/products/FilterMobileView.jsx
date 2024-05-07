import React from 'react'
import { BiSort } from 'react-icons/bi'
import { TbClipboardList } from 'react-icons/tb'
import { WiDirectionLeft } from 'react-icons/wi'

const FilterMobileView = ({handleMobileFilter,search, sortByName,sortByPrice}) => {
  return (
    <div className="fixed space-y-5 left-0 top-0 z-[999] bg-white h-screen w-1/2  transition-all ease-in text-sm"  >
        <p onClick={handleMobileFilter} className="flex justify-center p-3 cursor-pointer"><WiDirectionLeft size={30}/></p>
        <div className="space-y-5 p-2" >
            <h1 className="flex items-center font-semibold"><TbClipboardList />Filter</h1>
            <div className="border rounded border-gray/20">
                <select  onChange={search}  className="w-full p-3 outline-none rounded transition-all bg-white border border-gray/5 " >
                    <option value="All">All Product</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="unisex">Unisex</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            <div className="">
                <p className=" flex items-center font-semibold"><BiSort />Sort Products</p>
                <p  className="flex items-center p-2">
                    <button type="button" onClick={sortByName} className="border-brown/10 border p-2 rounded text-sm" >SortByName</button>
                </p>
                <p  className="flex items-center p-2">
                    <button type="button" onClick={sortByPrice} className="border-brown/10 border p-2 rounded text-sm" >SortByPrice</button>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FilterMobileView