"use client"

import { CircleQuestionMark, Settings, User } from "lucide-react"
import { useState } from "react"

export default function Modal({modalOpen}) {
    const [tabModal , setTabModal] = useState("")
    return(
        <>
            {modalOpen &&(
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
                    <div className="flex flex-col bg-blue-200/70 w-180 h-100 rounded-2xl">
                        {/* <header></header> */}
                        <main className="">
                            {tabModal === "profile" && (
                                <div className="border-4 border-red-700"></div>
                            )}
                        </main>
                        <footer className="flex shrink-0 justify-items-center-safe w-39 mt-auto translate-x-70.5 mb-3">
                            <div className="flex items-center justify-center bg-white/35 w-50 h-10 rounded-3xl gap-x-8 ">
                                <User onClick={() => setTabModal("profile")} className={tabModal === "profile" ? "bg-blue-500" : ""}/>
                                <Settings/>
                                <CircleQuestionMark/>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
        </>
    )
}