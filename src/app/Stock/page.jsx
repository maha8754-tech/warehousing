"use client"

import { Info, Package } from "lucide-react"

export default function Stock() {
    return(
        // className="grid gap-y-5 bg-blue-200 w-265 max-h-screen rounded-2xl"
       <div className="grid gap-y-5 bg-blue-100 w-265 max-h-screen rounded-2xl">
            <div className="flex justify-between ml-5 mt-1">
                <div>
                    <h1 className="text-2xl text-black">Stock</h1>
                    <span className="flex gap-2 text-sm text-gray-500">
                        Track and manage your current stock levels
                        <Info size={18} className="text-gray-500"/>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-[30%_70%] w-50 bg-white rounded-2xl gap-0 pt-2">
                <div className="pl-4">
                    <Package />
                </div>
                <div>
                    <h2>low Stock</h2>
                    <span>1233</span>
                </div>
            </div>
       </div>
    )
}