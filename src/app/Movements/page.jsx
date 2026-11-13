"use client"

import { Bell, ClosedCaption, Coins, DollarSign, Edit, Edit3, Info, LayoutDashboard, LayoutGrid, List, Package, Package2, PackagePlus, Plus, Ratio, Search, Tag, Trash, UserRoundArrowLeft, Verified, View, X, XCircle, XLineTop, XOctagon } from "lucide-react"
import { useState , useEffect } from "react"


export default function Movements() {
    
    const [openAction , setOpenAction] = useState(null);
    const [addProduct , setAddProduct] = useState(false);
    // const [form , setForm] = useState({productName:"", category:"", stock:"", price:"",})
    const [Movements , setMovements] = useState([]) 
    // const [editId , setEditId] = useState(null)
    // const [editPopup , setEditPopup] = useState(false)
    const [loading , setLoading] = useState(true) 
    const [error , setError] = useState("")
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const loadGetMovements = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL;

            const response = await fetch(
                `${baseUrl}/api/Movements`)
            if(!response.ok){
                throw new Error("Error Get Movements")
            }

            const data = await response.json();
            setMovements(data);
        } catch (err) {
            setError(err.message)
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        //eslint-disble-next-line react-hooks/set-state-in-effect
        loadGetMovements();
    } , []);

    // const addsProduct = async () => {
    //     const response = await fetch(
    //         `${baseUrl}/api/Products`, {
    //             method:"POST",
    //             headers:{"content-Type": "application/json"},
    //             body: JSON.stringify(form)
    //         })
    //         if(response.ok){
    //                 alert("saved")
    //                 setForm({productName:"", category:"", stock:"", price:""});
    //                 loadGetProducts()
    //             }else{
    //                 alert("error")
    //             }
    //         }
        
    // const updateProduct = async () => {
    //     const response = await fetch(
    //         `${baseUrl}/api/Products/${editId}`, {
    //             method:"PUT",
    //             headers:{"content-Type": "application/json"},
    //             body: JSON.stringify(form)
    //         })
    //         if(response.ok){
    //                 alert("edited")
    //                 closeModal()
    //                 loadGetProducts()
    //             }else{
    //                 alert("error")
    //             }
    //         }

    // const deleteProduct = async (productId , productName) => {
    //     if (!confirm(`delete O.K ?\n\nID: ${productId}\nName: ${form.productName}`)) return;
    //     const response = await fetch(
    //         `${baseUrl}/api/Products/${productId}`, {
    //             method:"DELETE",
    //         })
    //         if(response.ok){
    //                 alert("deleted")
    //                 loadGetProducts()
    //             }else{
    //                 alert("error")
    //             }
    //         }

    // const handleChange = (e) => {
    //     setForm({...form , [e.target.name]: e.target.value})
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (editId)  updateProduct()
    //     else addsProduct()
    // }

    // const handleEdit = (u) =>{
    //     setEditId(u.productId)
    //     setForm({productName:u.productName, category:u.category, stock:u.stock, price:u.price});
    //     setEditPopup(true)
    // }

    // const closeModal = () => {
    //     setEditId(null)
    //     setForm({productName:"", category:"", stock:"", price:""});
    //     setEditPopup(false)
    // }

    // const handleEditSubmit = (e) => {
    //     e.preventDefault()
    //     updateProduct()
    // }
    
    // if (loading) return <p className="text-purple-500">product get now...</p>
    // if (error) return <p className="text-red-600">Error:{error}</p>
 
    
    return(
        <div className="grid gap-y-5 bg-blue-200 w-265 max-h-screen rounded-2xl">
          {/* row 1 */}
          <div className="flex justify-between ml-5 mt-1">
            <div>
                <h1 className="text-2xl text-black">Movements</h1>
                <span className="flex gap-2 text-sm text-gray-500">
                    Track all inventory movements
                    <Info size={18} className="text-gray-500"/>
                </span>
            </div>
          </div>
          {/* row 2 */}
          <div className="grid grid-cols-[47%_53%] bg-white h-13 place-content-center m-auto w-257 border-2 border-gray-200 rounded-xl">
            {/* search */}
            <div className="flex ml-1.5">
                <Search size={20} className="absolute ml-2 top-44 text-gray-400"/>
                <input type="search" name="search" placeholder="Search by name , code or category..." className="placeholder:text-gray-400 bg-[#F2F6FA] w-full h-10 pl-10 rounded-xl border border-gray-200  outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"/>
            </div>
            {/* filter */}
            <div className="grid grid-cols-3 place-content-center ml-4 place-items-center">
                {/* category */}
                <select className="text-black border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40 cursor-pointer">
                    <option className="text-black" value="">All Types</option>
                    <option className="text-black" value="">In</option>
                    <option className="text-black" value="">Out</option>
                </select>
                {/* status */}
                <select name="" className="text-black border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40 cursor-pointer">
                    <option className="text-black" value="">All Product</option>
                    <option className="text-black" value="">laptop</option>
                    <option className="text-black" value="">airpad</option>
                    <option className="text-black" value="">headset</option>
                </select>
                <select name="" className="text-black border-2 border-gray-200 rounded-lg py-1.5 px-3 w-40 cursor-pointer">
                    <option className="text-black" value="">All Warehouse</option>
                    <option className="text-black" value="">Main Warehouse</option>
                    <option className="text-black" value="">East Warehouse</option>
                    <option className="text-black" value="">West Warehouse</option>
                </select>
            </div>
          </div>
          {/* row 3 */}
          <div className="">
            <table className="grid m-auto w-240">
                        <thead className="grid h-8 rounded-t-2xl text-gray-500 top-0 bg-blue-100 border-b-2 border-gray-300">
                            <tr className="flex gap-x-25 items-center border-b border-gray-800 w-240">
                                <th className="pl-5 text-gray-500">#</th>
                                <th className="text-gray-500">Data & Time</th>
                                <th className="text-gray-500">Type</th>
                                <th className="text-gray-500">Product</th>
                                <th className="text-gray-500">Quantity</th>
                                <th className="text-gray-500">Warehouse</th>
                                {/* <th className="text-gray-500">User</th>
                                <th className="text-gray-500">Notes</th> */}
                            </tr>
                        </thead>

                        <tbody className="grid gap-y-1 bg-white rounded-b-xl">
                            {/* Record #1 */}
                            {Movements.map((u) => (
                                <tr key={u.movementid} className="grid grid-cols-[13%_20%_14.5%_19%_13%_20%] border-b border-gray-800 mt-2">
                                    <td className="pl-5 text-black">{u.movementid}</td>
                                    {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                    <td className="flex gap-x-5 text-black">
                                        {u.datetime}
                                    </td>
                                    <td className="text-black">{u.type}</td>
                                    <td className="text-black">{u.productName}</td>
                                    <td className="text-black">{u.quantity}</td>
                                    <td className="text-black">{u.warehouse}</td>
                                </tr>
                            ))}

                            {/* Record #2 */}
                            <tr className="grid grid-cols-[13%_20%_14.5%_19%_13%_20%] border-b border-gray-800 mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">2</span>
                                    </div>
                                </td>
                                <td className="flex gap-x-1 text-black">
                                    2026-12-13 10:24
                                </td>
                               
                                <td className="flex text-green-800 bg-green-500/35 font-bold text-sm rounded-2xl px-2 py-1 w-fit justify-center">+ In</td>
                                <td className="text-black">lap top</td>
                                <td className="text-black">20</td>
                                <td className="ml-5 text-black">Main Warehouse</td>
                            </tr>
                        </tbody>
                        </table>
          </div>
          {/* row 4 */}
          <div className="flex justify-between">
            <span className="text-black">showing</span>
            <div>
                <button type="button" className="bg-white"></button>
            </div>
          </div>
        </div>
    )
}

// function StausTypeMovement({}) {
    
// }