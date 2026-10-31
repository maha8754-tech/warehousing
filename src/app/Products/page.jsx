"use client"

import { Info, Plus, Search } from "lucide-react"

export default function Products() {
    return(
        <div className="grid gap-y-2 bg-blue-200 w-265 max-h-screen rounded-2xl">
          {/* row 1 */}
          <div className="flex justify-between ml-5 mt-1">
            <div>
                <h1 className="text-2xl">Products</h1>
                <span className="flex gap-2 text-sm text-gray-500">
                    Manage your products and inventory
                    <Info size={18} className=""/>
                </span>
            </div>
            {/* button add product */}
            <div className="grid w-35 items-center mr-4 mt-2">
                <button className="flex gap-4 items-center h-11 bg-blue-500 text-sm text-white cursor-pointer px-3 rounded-xl" type="button">
                    <Plus size={18}/>
                    Add Product
                </button>
            </div>
          </div>
          {/* row 2 */}
          <div className="grid grid-cols-3">
            {/* search */}
            <div className="">
                <Search size={20} className="absolute ml-2 top-39 text-gray-400"/>
                <input type="search" name="search" placeholder="Search Poducts Name , id , ..." className="bg-[#F2F6FA] w-full h-10 pl-10 rounded-3xl border border-gray-200  outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"/>
            </div>
            {/* filter */}
            <div className="grid grid-cols-2 gap-x-5">
                {/* category */}
                <div>
                    <select name="">
                        <option value="">all categories</option>
                        <option value="">electronics</option>
                        <option value="">accessories</option>
                    </select>
                </div>
                {/* status */}
                <div>
                    <select name="">
                        <option value="">all status</option>
                        <option value="">in stock</option>
                        <option value="">low stock</option>
                    </select>
                </div>
            </div>
            {/* view */}
            <div className="flex gap-x-20">
                <button type="button">fghg</button>
                <button type="button">sdyghj</button>
            </div>
          </div>
          {/* row 3 */}
          <div></div>
        </div>
    )
}