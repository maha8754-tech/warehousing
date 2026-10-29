"use client"
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import Products from "./Products/page";
import Stock from "./Stock/page";
import Movements from "./Movements/page";
import Header from "@/components/Header";
import Dashboard from "./Dashboard/page";

export default function Home() {
    const [activePage , setActivePage] = useState("Dashboard")
    const backUI = "bg-[radial-gradient(ellipse_at_top_left,rgba(147,197,253,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(96,165,250,0.18),transparent_45%),linear-gradient(135deg,#f8fbff_0%,#edf5ff_50%,#f5f9ff_100%)] h-screen grid grid-cols-[290px_1fr] grid-rows-[70px_1fr]"
  return(
  <div className={backUI}>
    <aside className="row-span-2">
      <Sidebar
        setActivePage = {setActivePage}
        activePage = {activePage}
      />
    </aside>
    <div className="mt-3">
      <header className="flex items-center justify-between border-b border-white shadow-black/25 shadow-[0_12px_8px_-4px_rgba(0,0,0,0.15)] bg-white h-16 rounded-2xl w-265">
        <Header
          activePage={activePage}
        />
      </header>
      <main className="grid mt-5">
        {activePage === "Dashboard" && (
          <Dashboard/>
        )}
        {activePage === "Products" && (
          <Products/>
        )}
        {activePage === "Stock" && (
          <Stock/>
        )}
        {activePage === "Movements" && (
          <Movements/>
        )}
      </main>
    </div>
  </div>
  )
}