import { ArrowUp, Package } from "lucide-react";

export default function KpiCard({ icon , title , value , iconp ,percent , color}) {
    return(
        <div className="grid grid-cols-[25%_75%] w-60 h-25 bg-white rounded-2xl pt-2">
                <div className="pl-4 text-blue-500 rounded-4xl">
                    {icon}
                </div>
                <div className="grid gap-y-0.5">
                    <h2 className="font-bold text-[13px] text-gray-400">{title}</h2>
                    <span className="font-bold text-2xl text-black">{value}</span>
                    <span className={color}>
                        {iconp}
                        {percent}
                    </span>
                </div>
            </div>
    )
}