"use client"
import { LiquidGlass } from "@vepando/liquid-glass-react";
import "@vepando/liquid-glass-react/style.css"
import { ArrowLeftRight, Box, Boxes, BoxSelect, DoorClosed, DoorOpen, DoorStairwell, Home, LayoutDashboard, LogOut, ScissorsSquareDashedBottom, Tag, TagPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function Sidebar( {activePage , setActivePage}) {
    const [popupLog , setPopupLog] = useState(false)
    return(
        <div className="flex flex-col fixed bg-white/80 shadow-xl w-65 h-screen rounded-4xl ml-2">
            <LiquidGlass className="min-h-[99.8vh]" radius={18} bezel={120} tint="rgba(0,0,0,0.55)" saturation={1.5} interactive>
                <header className="">
                    <img className="" src="/warehousing/stock-pro.png" alt="logo"/>
                </header>
                <main className="grid gap-5">
                    {/* ========== Dashboard ================ */}
                    <div className="grid grid-cols-[1%_99%]">
                        <div className={activePage === "Dashboard" ? "bg-purple-600 w-2 rounded-r-4xl" : "hidden"}></div>
                        <ul className="ml-5">
                            <li onClick={() => setActivePage("Dashboard")} className={activePage === "Dashboard" ? "flex gap-5 items-center-safe bg-purple-400/32 text-purple-800 p-2 rounded-xl" : "flex gap-5 text-black cursor-pointer p-2 hover:bg-black/20 rounded-xl w-60"}>
                                <div className={activePage === "Dashboard" ? "bg-purple-500 text-purple-800 p-1 rounded-md" : ""}>
                                    <LayoutDashboard/>
                                </div>
                                Dashboard
                            </li>
                        </ul>
                    </div>
                    {/* ============== Products =============== */}
                    <div className="grid grid-cols-[1%_99%]">
                        <div className={activePage === "Products" ? "bg-purple-600 w-2 rounded-r-4xl" : "hidden"}></div>
                        <ul className="ml-5">
                            <li onClick={() => setActivePage("Products")} className={activePage === "Products" ? "flex gap-5 items-center-safe bg-purple-400/32 text-purple-800 p-2 rounded-xl" : "flex gap-5 text-black cursor-pointer p-2 hover:bg-black/20 rounded-xl w-60"}>
                                <div className={activePage === "Products" ? "bg-purple-500 text-purple-800 p-1 rounded-md" : ""}>
                                    <TagPlus/>
                                </div>
                                Products
                            </li>
                        </ul>
                    </div>
                    {/* ============== Stock =============== */}
                    <div className="grid grid-cols-[1%_99%]">
                        <div className={activePage === "Stock" ? "bg-purple-600 w-2 rounded-r-4xl" : "hidden"}></div>
                        <ul className="ml-5">
                            <li onClick={() => setActivePage("Stock")} className={activePage === "Stock" ? "flex gap-5 items-center-safe bg-purple-400/32 text-purple-800 p-2 rounded-xl" : "flex gap-5 text-black cursor-pointer p-2 hover:bg-black/20 rounded-xl w-60"}>
                                <div className={activePage === "Stock" ? "bg-purple-500 text-purple-800 p-1 rounded-md" : ""}>
                                    <Boxes/>
                                </div>
                                Stock
                            </li>
                        </ul>
                    </div>
                    {/* ============== Movements =============== */}
                    <div className="grid grid-cols-[1%_99%]">
                        <div className={activePage === "Movements" ? "bg-purple-600 w-2 rounded-r-4xl" : "hidden"}></div>
                        <ul className="ml-5">
                            <li onClick={() => setActivePage("Movements")} className={activePage === "Movements" ? "flex gap-5 items-center-safe bg-purple-400/32 text-purple-800 p-2 rounded-xl" : "flex gap-5 text-black cursor-pointer p-2 hover:bg-black/20 rounded-xl w-60"}>
                                <div className={activePage === "Movements" ? "bg-purple-500 text-purple-800 p-1 rounded-md" : ""}>
                                    <ArrowLeftRight/>
                                </div>
                                Movements
                            </li>
                        </ul>
                    </div>
                    
                </main>
            </LiquidGlass>
                <footer className="flex -mt-10 z-10 ml-5">
                    {/* <Link href="/Login" className="w-full"> */}
                        <div onClick={() => setPopupLog(!popupLog)} className="flex gap-5 w-full p-2 hover:bg-purple-400/45 rounded-3xl cursor-pointer">
                            <DoorOpen/>
                            Logout
                        </div>
                    {popupLog && (
                        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/45 backdrop-blur-xs"
                              onClick={() => setPopupLog(false)}
                            >
                                <div className="flex flex-col gap-y-4 w-100 h-80 bg-white/45 backdrop-blur-3xl rounded-2xl">
                                  <div className="grid h-20 justify-center items-end">
                                    <div className="flex bg-red-500 rounded-[50px] w-15 h-15 justify-center items-center">
                                        <LogOut size={30} color="white"/>
                                    </div>
                                  </div>
                                  <div className="grid justify-center-safe text-2xl">
                                    <h1>Are you logging out?</h1>
                                  </div> 
                                  <div className="grid justify-center-safe text-center text-2xl">
                                    <span className="text-lg">Upon logging out , your access to <br /> the system will be terminated.</span>
                                  </div> 
                                  <div className="flex gap-4 mb-5 place-content-center place-items-center">
                                    
                                      <button className="bg-white cursor-pointer h-15 text-xl rounded-2xl px-10">Cancel</button>
                                    
                                    <Link href="/Login">
                                        <button onClick={() => setPopupLog(!popupLog)} className="bg-white cursor-pointer h-15 text-xl rounded-2xl px-10">Log Out</button>
                                    </Link>
                                  </div> 
                                </div> 
                            </div>
                    )}
                </footer>
                
            
        </div>
    )
}