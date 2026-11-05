"use client"

import { Edit, Info, LayoutDashboard, List, Plus, Search, Trash, UserRoundArrowLeft, View } from "lucide-react"
import { useState , useEffect } from "react"

export default function Products() {
    const [openAction , setOpenAction] = useState(false);
    const [products , setProducts] = useState([]) 
    const [loading , setLoading] = useState(true) 
    const [error , setError] = useState("")
    
    useEffect(() => {
        async function loadProducts() {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL;

                const response = await fetch(
                    `${baseUrl}/api/Products`
                );
                if(!response.ok){
                    throw new Error("Error Get Products")
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message)
            } finally{
                setLoading(false)
            }
        }
        loadProducts();
    } , []);
    
    if (loading) return <p className="text-purple-500">product get now...</p>
    if (error) return <p className="text-red-600">Error:{error}</p>
 
    
    return(
        <div className="grid gap-y-5 bg-blue-200 w-265 max-h-screen rounded-2xl">
          {/* row 1 */}
          <div className="flex justify-between ml-5 mt-1">
            <div>
                <h1 className="text-2xl text-black">Products</h1>
                <span className="flex gap-2 text-sm text-gray-500">
                    Manage your products and inventory
                    <Info size={18} className="text-gray-500"/>
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
          <div className="grid grid-cols-[47%_35%_18%] bg-white h-13 place-content-center m-auto w-257 border-2 border-gray-200 rounded-xl">
            {/* search */}
            <div className="flex ml-1.5">
                <Search size={20} className="absolute ml-2 top-44 text-gray-400"/>
                <input type="search" name="search" placeholder="Search by name , code or category..." className="placeholder:text-gray-400 bg-[#F2F6FA] w-full h-10 pl-10 rounded-xl border border-gray-200  outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"/>
            </div>
            {/* filter */}
            <div className="grid grid-cols-2 place-content-center ml-4 place-items-center">
                {/* category */}
                <select name="" className="border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40">
                    <option className="text-black" value="">all categories</option>
                    <option className="text-black" value="">electronics</option>
                    <option className="text-black" value="">accessories</option>
                </select>
                {/* status */}
                <select name="" className="border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40">
                    <option className="text-black" value="">all status</option>
                    <option className="text-black" value="">in stock</option>
                    <option className="text-black" value="">low stock</option>
                </select>
            </div>
            {/* view */}
            <div className="flex gap-x-5 justify-center items-center">
                <LayoutDashboard size={30} className="bg-gray-200 p-1 rounded-lg cursor-pointer" />
                <LayoutDashboard size={30} className="bg-gray-200 p-1 rounded-lg cursor-pointer" />
                <LayoutDashboard size={30} className="bg-gray-200 p-1 rounded-lg cursor-pointer" />
                
            </div>
          </div>
          {/* row 3 */}
          <div className="">
            <table className="grid m-auto w-257">
                        <thead className="grid h-8 rounded-t-2xl text-gray-500 top-0 bg-blue-100 border-b-2 border-gray-300">
                            <tr className="flex gap-x-21 items-center border-b border-gray-800 w-257">
                                <th className="pl-5 text-gray-500">#</th>
                                <th className="text-gray-500">Product Name</th>
                                <th className="text-gray-500">Code</th>
                                <th className="text-gray-500">Category</th>
                                <th className="text-gray-500">Stock</th>
                                <th className="text-gray-500">Price</th>
                                <th className="text-gray-500">Status</th>
                                <th className="text-gray-500">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="grid gap-y-1 bg-white rounded-b-xl">
                            
                            {/* Record #1 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-2">
                                <td className="pl-5 text-black">1</td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        Laptop Dell X11
                                </td>
                                <td className="text-black">SKU-100</td>
                                <td className="text-black">Electronic</td>
                                <td className="text-black">45</td>
                                <td className="text-black">45,000,000 T</td>
                                <td className="">
                                    <div className="flex bg-green-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-green-700 font-bold text-sm">Average Stock</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            {/* Record #2 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">2</span>
                                        {/* <img src="" alt="prof" className="rounded-4xl" /> */}
                                    </div>
                                </td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        Laptop Dell X11
                                </td>
                                <td className="text-black">SKU-101</td>
                                <td className="text-black">Electronic</td>
                                <td className="text-black">45</td>
                                <td className="text-black">45,000,000 T</td>
                                <td className="">
                                    <div className="flex bg-green-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-green-700 font-bold text-sm">Average Stock</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            {/* Record #3 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">3</span>
                                        {/* <img src="" alt="prof" className="rounded-4xl" /> */}
                                    </div>
                                </td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        Laptop Dell X11
                                </td>
                                <td className="text-black">SKU-102</td>
                                <td className="text-black">Electronic</td>
                                <td className="text-black">1000</td>
                                <td className="text-black">45,000,000 T</td>
                                <td className="">
                                    <div className="flex bg-red-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-red-700 font-bold text-sm">High Stock</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            {/* Record #4 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">4</span>
                                        {/* <img src="" alt="prof" className="rounded-4xl" /> */}
                                    </div>
                                </td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        Laptop Dell X11
                                </td>
                                <td className="text-black">SKU-103</td>
                                <td className="text-black">Electronic</td>
                                <td className="text-black">45</td>
                                <td className="text-black">45,000,000 T</td>
                                <td className="">
                                    <div className="flex bg-green-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-green-700 font-bold text-sm">Average Stock</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            {/* Record #5 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">5</span>
                                        {/* <img src="" alt="prof" className="rounded-4xl" /> */}
                                    </div>
                                </td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        Laptop Dell X11
                                </td>
                                <td className="text-black">SKU-104</td>
                                <td className="text-black">Electronic</td>
                                <td className="text-black">45</td>
                                <td className="text-black">45,000,000 T</td>
                                <td className="">
                                    <div className="flex bg-green-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-green-700 font-bold text-sm">Average Stock</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            {/* Record #6 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">6</span>
                                        {/* <img src="" alt="prof" className="rounded-4xl" /> */}
                                    </div>
                                </td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        Laptop Dell X11
                                </td>
                                <td className="text-black">SKU-1050</td>
                                <td className="text-black">Electronic</td>
                                <td className="text-black">5</td>
                                <td className="text-black">45,000,000 T</td>
                                <td className="">
                                    <div className="flex bg-yellow-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-yellow-700 font-bold text-sm">Low Stock</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            
                        </tbody>
                        </table>
          </div>
          {/* row 4 */}
          <div className="flex justify-between">
            <span className="text-black">fcghgjhjk</span>
            <div>
                <button type="button" className="bg-white"></button>
            </div>
          </div>
        </div>
    )
}