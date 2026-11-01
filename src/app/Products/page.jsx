"use client"

import { Edit, Info, LayoutDashboard, List, Plus, Search, View } from "lucide-react"

export default function Products() {
    return(
        <div className="grid gap-y-5 bg-blue-200 w-265 max-h-screen rounded-2xl">
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
          <div className="grid grid-cols-[47%_35%_18%] bg-white h-13 place-content-center m-auto w-257 border-2 border-gray-200 rounded-xl">
            {/* search */}
            <div className="flex ml-1.5">
                <Search size={20} className="absolute ml-2 top-44 text-gray-400"/>
                <input type="search" name="search" placeholder="Search by name , code or category..." className="bg-[#F2F6FA] w-full h-10 pl-10 rounded-xl border border-gray-200  outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"/>
            </div>
            {/* filter */}
            <div className="grid grid-cols-2 place-content-center ml-4 place-items-center">
                {/* category */}
                <select name="" className="border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40">
                    <option value="">all categories</option>
                    <option value="">electronics</option>
                    <option value="">accessories</option>
                </select>
                {/* status */}
                <select name="" className="border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40">
                    <option value="">all status</option>
                    <option value="">in stock</option>
                    <option value="">low stock</option>
                </select>
            </div>
            {/* view */}
            <div className="flex gap-x-5 justify-center items-center">
                <LayoutDashboard size={30} className="bg-gray-200 p-1 rounded-lg" />
                <LayoutDashboard size={30} className="bg-gray-200 p-1 rounded-lg" />
                <LayoutDashboard size={30} className="bg-gray-200 p-1 rounded-lg" />
                
            </div>
          </div>
          {/* row 3 */}
          <div className="">
            <table className="grid m-auto w-257">
                        <thead className="grid h-8 rounded-t-2xl text-gray-500 sticky top-0 bg-blue-100 border-b-2 border-gray-300 z-1">
                            <tr className=" flex gap-x-21 items-center border-b border-gray-800 w-257">
                                <th className="pl-5">#</th>
                                <th className="">Product Name</th>
                                <th className="">Code</th>
                                <th className="">Category</th>
                                <th className="">Stock</th>
                                <th className="">Price</th>
                                <th className="">Status</th>
                                <th className="">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white">
                            <tr className="grid grid-cols-[10%_20%_10%_10%_10%_10%_10%_20%]">
                                <td className="pl-5">
                                    <div className="">
                                        <span>1</span>
                                        {/* <img src="" alt="prof" className="rounded-4xl" /> */}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex font-semibold items-center gap-x-1 bg-black/10 w-9 h-9 rounded-4xl">
                                        <img src="/warehousing/user.svg" alt="prof" className="rounded-4xl w-9 h-10" />
                                        <span className="text-md">laptopj4565jjk4</span>
                                    </div>
                                </td>
                                <td className="flex">uuio-12</td>
                                <td className="flex pl-5">electro</td>
                                <td className="flex pl-18">12</td>
                                <td className="flex pl-22">120000</td>
                                <td>
                                    <div className="bg-blue-200">
                                        <span>in stock</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex gap-5">
                                    <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                        <Edit />
                                    </button>
                                    </div>
                                </td>
                            </tr>
                            
                            <tr className="">
                            <td className="">
                                <div className="flex flex-row mt-2">
                                <div className="bg-black/10 w-9 h-9 rounded-4xl">
                                    <img src="" alt="prof" className="rounded-4xl" />
                                </div>
                                <div className="flex flex-col mr-3 -mt-1 font-semibold">
                                    <span className="text-md">امین بانی</span>
                                    <span className="text-[12px] text-gray-400">jolioo@gmail.com</span>
                                </div>
                                </div>
                            </td>
                            <td>سرنخ</td>
                            <td>اصفهان</td>
                            <td>1405/01/25</td>
                            <td>
                                <div className="flex gap-5">
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <List/> */}
                                </button>
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <Edit/> */}
                                </button>
                                </div>
                            </td>
                            </tr>

                            <tr className="">
                            <td className="">
                                <div className="flex flex-row mt-2">
                                <div className="bg-black/10 w-9 h-9 rounded-4xl">
                                    <img src="" alt="prof" className="rounded-4xl" />
                                </div>
                                <div className="flex flex-col mr-3 -mt-1 font-semibold">
                                    <span className="text-md">امین بانی</span>
                                    <span className="text-[12px] text-gray-400">jolioo@gmail.com</span>
                                </div>
                                </div>
                            </td>
                            <td>سرنخ</td>
                            <td>اصفهان</td>
                            <td>1405/01/25</td>
                            <td>
                                <div className="flex gap-5">
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <List/> */}
                                </button>
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <Edit/> */}
                                </button>
                                </div>
                            </td>
                            </tr>

                            <tr className="">
                            <td className="">
                                <div className="flex flex-row mt-2">
                                <div className="bg-black/10 w-9 h-9 rounded-4xl">
                                    <img src="" alt="prof" className="rounded-4xl" />
                                </div>
                                <div className="flex flex-col mr-3 -mt-1 font-semibold">
                                    <span className="text-md">امین بانی</span>
                                    <span className="text-[12px] text-gray-400">jolioo@gmail.com</span>
                                </div>
                                </div>
                            </td>
                            <td>سرنخ</td>
                            <td>اصفهان</td>
                            <td>1405/01/25</td>
                            <td>
                                <div className="flex gap-5">
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <List/> */}
                                </button>
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <Edit/> */}
                                </button>
                                </div>
                            </td>
                            </tr>

                            <tr className="">
                            <td className="">
                                <div className="flex flex-row mt-2">
                                <div className="bg-black/10 w-9 h-9 rounded-4xl">
                                    <img src="/warehousing/user.svg" alt="prof" className="rounded-4xl" />
                                </div>
                                <div className="flex flex-col mr-3 -mt-1 font-semibold">
                                    <span className="text-md">امین بانی</span>
                                    <span className="text-[12px] text-gray-400">jolioo@gmail.com</span>
                                </div>
                                </div>
                            </td>
                            <td>سرنخ</td>
                            <td>اصفهان</td>
                            <td>1405/01/25</td>
                            <td>
                                <div className="flex gap-5">
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <List/> */}
                                </button>
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <Edit/> */}
                                </button>
                                </div>
                            </td>
                            </tr>

                            <tr className="">
                            <td className="">
                                <div className="flex flex-row mt-2">
                                <div className="bg-black/10 w-9 h-9 rounded-4xl">
                                    <img src="" alt="prof" className="rounded-4xl" />
                                </div>
                                <div className="flex flex-col mr-3 -mt-1 font-semibold">
                                    <span className="text-md">امین بانی</span>
                                    <span className="text-[12px] text-gray-400">jolioo@gmail.com</span>
                                </div>
                                </div>
                            </td>
                            <td>سرنخ</td>
                            <td>اصفهان</td>
                            <td>1405/01/25</td>
                            <td>
                                <div className="flex gap-5">
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <List/> */}
                                </button>
                                <button type="button" className="bg-purple-300 rounded-md p-0.5 cursor-pointer">
                                    {/* <Edit/> */}
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
          </div>
        </div>
    )
}