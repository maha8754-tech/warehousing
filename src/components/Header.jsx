"use client"

import { AlignCenter, AlignCenterHorizontal, AlignEndVertical, AlignHorizontalJustifyCenter, AlignJustify, AlignStartHorizontalIcon, ArrowBigLeftDash, ArrowDown, ArrowDown01, ArrowLeftRight, Bell, Box, Boxes, BoxSelect, ChevronDown, ChevronDownCircle, ChevronLast, ChevronUpCircle, CircleQuestionMark, Home, HomeIcon, LayoutDashboard, LogIn, LogOut, Menu, MenuSquare, Search, Settings, Tags, TextAlignCenter, TextAlignStart, User } from "lucide-react"
import { useState } from "react"
import Modal from "./ModalAccount"

export default function Header({activePage}) {
    const [isOpan , setIsOpen] = useState("false")
    const [modalOpen , setModalOpen] = useState(false)
    return(
        <div className="grid grid-cols-[38%_36%_26%] w-full">
            <div className="flex flex-row items-center gap-x-3">
                {/* ======================== menu =============================== */}
                <div className="flex ml-2 w-7 h-7 items-center justify-center bg-blue-100 rounded-lg cursor-pointer">
                    <TextAlignStart size={15} className="w-10"/>
                </div>
                {/* ================ seperator ===================== */}
                <div className="h-8 border-r border-gray-200 ml-1"></div>
                {/* ================= info-logo ======================= */}
                <div className="flex gap-x-1 ml-2">
                    <Box size={35} className="text-blue-500"/>
                    <div className="grid">
                        <h3 className="text-[15px] font-bold">Stock Pro</h3>
                        <span className="text-[10px] text-gray-400">Inventory Management</span>
                    </div>
                </div>
                {/* ================ seperator ===================== */}
                <div className="h-8 border-r border-gray-200 mr-2"></div>
                {/* ================= routing ======================= */}
                {/* =============== dashboard ====================== */}
                {activePage === "Dashboard" && (
                    <div className="flex gap-x-1 ml-0.2">
                        <div className="flex items-center rounded-lg bg-blue-200/45 px-1.5 mr-1 h-8">
                            <LayoutDashboard size={20} className="text-blue-500"/>
                        </div>
                        <div className="grid">
                            <h3 className="text-[15px] font-bold">Dashboard</h3>
                            <span className="text-[10px] text-gray-400">Home / Dashboard</span>
                        </div>
                    </div>
                )}
                {/* =============== Products ====================== */}
                {activePage === "Products" && (
                    <div className="flex gap-x-1 ml-0.2">
                        <div className="flex items-center rounded-lg bg-blue-200/45 px-1.5 mr-1 h-8">
                            <Tags size={20} className="text-blue-500"/>
                        </div>
                        <div className="grid">
                            <h3 className="text-[15px] font-bold">Products</h3>
                            <span className="text-[10px] text-gray-400">Home / Products</span>
                        </div>
                    </div>
                )}
                {/* =============== Stock ====================== */}
                {activePage === "Stock" && (
                    <div className="flex gap-x-1 ml-0.2">
                        <div className="flex items-center rounded-lg bg-blue-200/45 px-1.5 mr-1 h-8">
                            <Boxes size={20} className="text-blue-500"/>
                        </div>
                        <div className="grid">
                            <h3 className="text-[15px] font-bold">Stock</h3>
                            <span className="text-[10px] text-gray-400">Home / Stock</span>
                        </div>
                    </div>
                )}
                {/* =============== Movements ====================== */}
                {activePage === "Movements" && (
                    <div className="flex gap-x-1 ml-0.2">
                        <div className="flex items-center rounded-lg bg-blue-200/45 px-1.5 mr-1 h-8">
                            <ArrowLeftRight size={20} className="text-blue-500"/>
                        </div>
                        <div className="grid">
                            <h3 className="text-[15px] font-bold">Movements</h3>
                            <span className="text-[10px] text-gray-400">Home / Movements</span>
                        </div>
                    </div>
                )}
            </div>
            {/* ================ box-search ================= */}
            <div className="flex items-center">
                <Search size={20} className="absolute ml-2 top-8 text-gray-400"/>
                <input type="search" name="search" placeholder="Search Poducts...e.g" className="bg-[#F2F6FA] w-full h-10 pl-10 rounded-3xl border border-gray-200  outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"/>
            </div>
            {/* ============= Notif & accountUser */}
            <div className="flex items-center gap-x-4">
                {/* ================ seperator ===================== */}
                <div className="h-8 border-r border-gray-200 ml-3"></div>
                <div className="flex items-center justify-center w-8 h-8 cursor-pointer bg-[#E8F1FE] rounded-lg">
                    <Bell size={17} className=""/>
                </div>
                <div onClick={() => setIsOpen(!isOpan)} className="flex items-center cursor-pointer bg-[#ebf1f5] rounded-3xl w-47 h-12 gap-x-3">
                    <img src="/warehousing/hatamTehrani.jpg" alt="profile" className="ml-2 w-10 h-10 rounded-4xl"/>
                    <div className="grid">
                        <h3 className="text-[15px] font-bold">Mahdi rush</h3>
                        <span className="text-sm text-gray-400">Administrator</span>
                    </div>
                    <ChevronDownCircle size={16} className="text-gray-600"/>
                </div>
            </div>
            {!isOpan && (
            <div className="flex flex-col fixed gap-y-2 bg-white w-65 h-75 right-5 top-1/8 rounded-2xl">
                <header className="flex items-center h-15 gap-x-3.5">
                    <img src="/warehousing/hatamTehrani.jpg" alt="profile" className="ml-2 w-10 h-10 rounded-4xl"/>
                    <div className="grid">
                        <h3 className="text-[15px] font-bold mr-10">Mahdi rush</h3>
                        <span className="text-sm text-gray-400">mah12@gmail.com</span>
                    </div>
                </header>
                {/* ================ seperator ===================== */}
                <div className="w-65 border-b border-gray-200"></div>
                <main className="grid items-center h-40">
                        <ul className="grid gap-y-5 ml-3">
                            <li onClick={() => setModalOpen(true)} className="flex items-center rounded-lg gap-x-4 h-10 hover:bg-blue-200 hover:text-blue-700 cursor-pointer">
                                <User/>
                                View Profile
                                <Modal
                                    modalOpen={modalOpen}
                                />
                            </li>
                            <li className="flex items-center rounded-lg gap-x-4 h-10 hover:bg-blue-200 hover:text-blue-700 cursor-pointer">
                                <Settings/>
                                Accounnt Settings
                            </li>
                            <li className="flex items-center rounded-lg gap-x-4 h-10 hover:bg-blue-200 hover:text-blue-700 cursor-pointer">
                                <CircleQuestionMark/>
                                Suppport & About Us
                            </li>
                        </ul>
                </main>
                {/* ================ seperator ===================== */}
                <div className="w-65 border-b border-gray-200"></div>
                <footer className="flex items-center">
                    <ul className="grid place-items-center-safe ml-3 h-10 bg-red-600/35 w-60 rounded-lg text-white/60 hover:bg-red-500 hover:text-white cursor-pointer">
                        <li className="flex gap-x-4">
                            <LogOut/>
                            Log Out
                        </li>
                    </ul>
                </footer>
            </div>
            )}
        </div>
    )
}