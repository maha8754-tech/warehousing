"use client"

import KpiCard from "@/components/KpiCard"
import LowStockAlerts from "@/components/LowStockAlerts";
import StockByCategory from "@/components/StockByCategory";
import StockByWarehouse from "@/components/StockByWarehouse";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUp10, ArrowUpFromDot, Bold, Check, CircleArrowRight, FileWarning, Info, MailPen, MapPin, MapPinHouse, MapPinned, MapPinOff, MapPinPen, MapPinPlus, MapPinPlusInside, Package, Package2, SignalHigh, SignalLow, SignalMedium, Sunrise, Sunset, TriangleAlert, Warehouse } from "lucide-react"
import { useState } from "react";

export default function Stock() {
    const [stocks, setStocks] = useState([])
    return(
        // className="grid gap-y-5 bg-blue-200 w-265 max-h-screen rounded-2xl"
        // row1
       <div className="grid bg-blue-100 w-full h-139 rounded-2xl">
            <div className="flex justify-between ml-5 mt-1">
                <div>
                    <h1 className="text-2xl text-black">Stock</h1>
                    <span className="flex gap-2 text-sm text-gray-500">
                        Track and manage your current stock levels
                        <Info size={18} className="text-gray-500"/>
                    </span>
                </div>
            </div>
            {/* row2 */}
            <div className="grid grid-cols-4 gap-x-0 ml-5.5 -mt-3">
                <KpiCard
                    icon={<Package size={30} className="bg-blue-500/20 p-1.5 rounded-4xl"/>} title="Total Stock Value" value="482,320 T" iconp={<ArrowUp/>} percent="8%" color={"flex gap-1.5 text-green-600"}
                />
                <KpiCard
                    icon={<TriangleAlert size={30} className="bg-yellow-500/20 text-orange-500 p-1.5 rounded-4xl"/>} title="Low Stock" value="85" percent="7%" color={"flex gap-1.5 text-yellow-500"}
                />
                <KpiCard
                    icon={<SignalMedium size={30} className="bg-green-500/20 text-green-500 p-1.5  rounded-4xl"/>} title="Average Stock" value="95" percent="8%" color={"flex gap-1.5 text-green-600"}
                />
                <KpiCard
                    icon={<SignalHigh size={30} className="bg-red-500/20 text-red-500 p-1.5 rounded-4xl"/>} title="High Stock" value="1200"  percent="2%" color={"flex gap-1.5 text-red-600"}
                />
            </div>
            {/* row3 */}
            <div className="grid grid-cols-2 ml-6 -mt-3">
                <div className="grid bg-white rounded-2xl w-125 h-55">
                    <StockByWarehouse/>
                </div>
                <div className="bg-white rounded-2xl w-125 h-55">
                    <LowStockAlerts/>
                </div>
            </div>
            {/* row4 */}
            <div className=" w-258 h-30 ml-6">
                <StockByCategory/>
            </div>
       </div>
    )
}

 {/* <div className="flex gap-2.5 h-10">
                            <MapPinHouse color="red"/>
                            <span>Main warehouse</span>
                            <progress aria-label="gyhghj" max={100}  className="text-amber-200 bg-red-400">10%</progress>
                        </div>

                        <div className="flex h-10">
                            <MapPinPlus color="red" className=""/>
                            <ArrowLeft size={18} color="red" className="-translate-x-1.5 translate-y-2.5 z-100"/>
                            <span>West warehouse</span>
                            <progress className="w-50" ></progress>
                        </div>

                        <div className="flex h-10">
                            <MapPinPlus color="red" className=""/>
                            <ArrowRight size={16} color="red" className="-translate-x-1.5 translate-y-2.5 z-100"/>
                            <span>East warehouse</span>
                            <progress ></progress>
                        </div> */}