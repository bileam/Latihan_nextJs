import { AlertCircle, MessageCircle,  Search } from "lucide-react";



export default function Topbar      () {
    return(
        <div className="bg-[#F5F8FC]  px-8 py-5 w-full flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#766ad0]/10 rounded-lg w-100">
             
                <input type="text" placeholder="Search anything..." className="bg-transparent flex-1 border-none focus:outline-none" />
             <Search className="text-gray-400"/>
            </div>
             {/* <BasicTextFields/> */}
            
            <div className="flex gap-6 items-center">
                <div className="flex gap-4"> 
                      <MessageCircle className="w-5 h-5 cursor-pointer text-[#5443c3]"/>
                    <AlertCircle  className="w-5 h-5 cursor-pointer text-[#5443c3]"/>
             </div>
               
               <div className="flex items-center gap-1">
                <span className="py-2 px-4 rounded-full bg-[#5443c3] text-white flex items-center justify-center font-extrabold">B</span>
                <span className=" flex items-center gap-2">admin <span className="rotate-90">{">"}</span> </span>
               </div>
            </div>
            
        </div>
    )
} 