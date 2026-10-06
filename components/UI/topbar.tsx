import {  LucideLogOut, MessageCircle,  Search } from "lucide-react";

export default function Topbar      () {
    return(
        <div className="bg-[#F5F8FC] shadow px-4 py-5 w-full flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-1 bg-gray-200/40 rounded-lg w-100">
                <Search/>
                <input type="text" placeholder="Search anything..." className="bg-transparent border-none focus:outline-none" />
            </div>
            <div className="flex gap-2 items-center">
               <MessageCircle className="w-5 h-5 text-gray-600"/>
               <div className="flex items-center gap-1">
                <span className="py-2 px-4 rounded-full bg-blue-800 text-white flex items-center justify-center font-extrabold">B</span>
                <span className=" flex items-center gap-2">admin <span className="rotate-90">{">"}</span> </span>
               </div>
            </div>
            
        </div>
    )
} 