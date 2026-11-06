"use client"

import { Bell, ClosedCaption, Coins, DollarSign, Edit, Info, LayoutDashboard, LayoutGrid, List, Package, Package2, PackagePlus, Plus, Ratio, Search, Tag, Trash, UserRoundArrowLeft, Verified, View, X, XCircle, XLineTop, XOctagon } from "lucide-react"
import { useState , useEffect } from "react"

export default function Products() {
    const [openAction , setOpenAction] = useState(false);
    const [addProduct , setAddProduct] = useState(false);
    const [form , setForm] = useState({productname:"", category:"", stock:"", price:"",})
    const [products , setProducts] = useState([]) 
    const [editId , setEditId] = useState(null)
    const [loading , setLoading] = useState(true) 
    const [error , setError] = useState("")
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const loadGetProducts = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL;

            const response = await fetch(
                `${baseUrl}/api/Products`)
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
    useEffect(() => {
        
        loadGetProducts();
    } , []);

    const addsProduct = async () => {
        const response = await fetch(
            `${baseUrl}/api/Products`, {
                method:"POST",
                headers:{"content-Type": "application/json"},
                body: JSON.stringify(form)
            })
            if(!response.ok){
                    alert("saved")
                    setForm({productname:"", category:"", stock:"", price:""});
                    loadGetProducts()
                }else{
                    alert("error")
                }
            }
        
    const updateProduct = async () => {
        const response = await fetch(
            `${baseUrl}/api/Products`, {
                method:"PUT",
                headers:{"content-Type": "application/json"},
                body: JSON.stringify(form)
            })
            if(!response.ok){
                    alert("edited")
                    setForm({productname:"", category:"", stock:"", price:""});
                    setEditId(null)
                    loadGetProducts()
                }else{
                    alert("error")
                }
            }

    const deleteProduct = async (productid) => {
        const response = await fetch(
            `${baseUrl}/api/Products`, {
                method:"DELETE",
            })
            if(!response.ok){
                    alert("deleted")
                    setEditId(null)
                    loadGetProducts()
                }else{
                    alert("error")
                }
            }

    const handleChange = (e) => {
        setForm({...form , [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.prevenyDefaulte()
        if (editId)  updateProduct()
        else addsProduct()
    }
    const handleEdit = (u) =>{
        setEditId(u.productid)
        setForm({productname:u.productname, category:u.category, stock:u.stock, price:u.price});
    }
    
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
                <button onClick={() => setAddProduct(true)} className="flex gap-4 items-center h-11 bg-blue-500 text-sm text-white cursor-pointer px-3 rounded-xl hover:text-blue-500 hover:bg-white focus:bg-white focus:text-blue-500" type="button">
                    <PackagePlus size={22}/>
                    Add Product
                </button>
            </div>
          </div>
          {addProduct && (
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
                <div className="grid grid-rows-[16%_68%_15%] bg-white/95 w-150 h-100 rounded-2xl">
                    <header className="bg-blue-100 h-15.5 rounded-t-2xl">
                        <div className="flex gap-x-2.5 mt-3">
                            <div className="flex w-10 h-10 bg-blue-500 p-2.5 ml-3 rounded-lg">
                                <Package className="text-white"/>
                            </div>
                            <div>
                                <h2 className="text-black font-bold text-md">Add New Product</h2>
                                <span className="text-gray-500 text-[12px]">Enter the new product information.</span>
                            </div>
                        </div>
                    </header>

                    <main className="grid w-full">
                        <form action="" method="post" onSubmit={handleSubmit} className="flex justify-center items-center">
                            <div className="grid grid-cols-2 gap-6 w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <Tag size={17} className="text-blue-500"/>
                                        <label htmlFor="Name" className="text-sm text-black">ProductName</label>
                                    </div>
                                    <input 
                                        type="text" 
                                        name="productname"
                                        required
                                        autoComplete="name"
                                        placeholder="LapTop Asus VivoBook"
                                        value={form.productname}
                                        onChange={handleChange}
                                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <LayoutGrid size={17} className="text-blue-500"/>
                                        <label htmlFor="category" className="text-sm text-black">Category</label>
                                    </div>
                                    <select 
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                        required
                                        /*</div>value={form.category} onChange={handelChange} required */
                                        className="cursor-pointer bg-black/50 w-full h-12 rounded-2xl text-white outline-none border border-white/10 focus:border-white/40"
                                    >
                                        <option value="Category Choice..." hidden className="">Category Choice...</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Office Supplies">Office Supplies</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <Bell size={17} className="text-blue-500"/>
                                        <label htmlFor="stock" className="text-sm text-black">Stock</label>
                                    </div>
                                    <input 
                                        type="number"
                                        name="stock"
                                        required
                                        placeholder="0"
                                        value={form.stock}
                                        onChange={handleChange}
                                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex">
                                        <DollarSign size={17} className="text-blue-500"/>
                                        <label htmlFor="price" className="text-sm text-black">Price</label>
                                    </div>
                                    <input 
                                        type="number"
                                        name="price"
                                        required
                                        autoComplete="price"
                                        placeholder="2,000,000"
                                        value={form.price}
                                        onChange={handleChange}
                                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <input 
                                        type="reset"
                                        // value={formData.productname}
                                        className="cursor-pointer bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                                    />
                                </div>
                            </div>
                        </form>
                    </main>
                    <footer className="flex justify-center items-center">
                        <div className="flex gap-3.5">
                            <button 
                                type="submit"
                                disabled={loading} 
                                className="flex gap-4 items-center h-11 bg-blue-500 text-sm text-white cursor-pointer px-3 rounded-xl hover:text-blue-500 hover:bg-white focus:bg-white focus:text-blue-500">
                                <Verified size={22}/>
                                {loading ? 'server sed now...' : 'Verify product'}
                            </button>

                            <button onClick={() => setAddProduct(!addProduct)} className="flex gap-4 items-center w-35 h-11 text-sm text-gray-500 cursor-pointer px-3 rounded-xl hover:text-white hover:bg-red-500 focus:bg-white focus:text-blue-500 border-2 border-gray-500" type="button">
                                <XCircle size={22}/>
                                Cancle
                            </button>
                            
                        </div>
                    </footer>
                </div>
            </div>
          )}
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
                            {products.map((u) => (
                                <tr key={u.productid} className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-2">
                                <td className="pl-5 text-black">{u.productid}</td>
                                {/* flex font-semibold items-center gap-x-1 text-sm text-black bg-black/10 w-5.5 h-6.5 rounded-4xl" */}
                                <td className="flex gap-x-1 text-black">
                                        <img src="/warehousing/user.jpg" alt="pn#" className="rounded-4xl w-5.5 h-6.5" />
                                        {u.productname}
                                </td>
                                <td className="text-black">{u.code}</td>
                                <td className="text-black">{u.category}</td>
                                <td className="text-black">{u.stock}</td>
                                <td className="text-black">{u.price} T</td>
                                <td className="">
                                    <div className="flex bg-green-200/60 rounded-2xl py-1 px-2 w-32 justify-center">
                                        <span className="text-green-700 font-bold text-sm">{u.status}</span>
                                    </div>
                                </td>
                                <td className="">
                                    <button onClick={() => setOpenAction(!openAction)} type="button" className=" p-0.5 cursor-pointer">
                                        <List />
                                    </button>
                                    {!openAction && (
                                        <div className="grid rounded-2xl bg-black/50 w-25 h-22 py-2 absolute right-2">
                                            <option onClick={() => handleEdit(u)} value="" className="flex gap-x-1.5 text-black justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Edit className="text-black" size={20}/>
                                                Edit
                                            </option>

                                            <option value="" onClick={() => deleteProduct(u.productid)} className="flex gap-x-1.5 text-red-500 justify-center hover:bg-white hover:rounded-2xl cursor-pointer">
                                                <Trash className="text-red-500" size={20}/>
                                                Delete
                                            </option>
                                        </div>
                                    )}
                                </td>
                            </tr>
                            ))}
                            
                             {/* Record #2 */}
                            <tr className="grid grid-cols-[10%_20%_12%_15%_12%_12%_15%_3%] border-b border-gray-800 mt-1">
                                <td className="pl-5">
                                    <div className="">
                                        <span className="text-black">2</span>
                                        
                                    </div>
                                </td>
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
                                    {openAction && (
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