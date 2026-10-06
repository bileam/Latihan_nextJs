"use client"
import { FileChartColumnIncreasingIcon,   GroupIcon,  Home, LineSquiggleIcon,  Square } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const pathname = usePathname()
return(
    <div className="bg-[#18273E] p-4 items-center w-80 h-screen flex flex-col justify-between">
        <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-2 items-center  py-2 border-b border-gray-400">
           <FileChartColumnIncreasingIcon className="text-sky-500 w-10 h-10"/>
            <div className="flex flex-col"> 
                <h2 className=" font-bold mb-4 text-[#E8F0FF] text-[16px] brightness-125">my App</h2>
             <span className="text-[#6E7E9C] -mt-4">manajement sistem</span>
             </div>
             
        </div>
        <div className="flex flex-col gap-4 text-[#E8F0FF] mt-6 mb-2 ">
       
                  <Link href="/dashboard" className={`flex gap-2 ${pathname==="/dashboard"?"bg-[#2F63C7] rounded-lg text-white ":"text-gray-300 hover:bg-[#243653]"} items-center px-4 py-2 rounded-lg transition-colors duration-200 `}><Home /> <span>Dashboard</span></Link>
         
           
              <Link href="/dashboard/product" className={`flex gap-2 ${pathname==="/dashboard/product"?"bg-[#2F63C7] rounded-lg text-white ":"text-gray-300 hover:bg-[#243653]"} items-center px-4 py-2 rounded-lg transition-colors duration-200 `}>  <Square />  <span>Product</span></Link>
        
          
               <Link href="/dashboard/categories" className={`flex gap-2 ${pathname==="/dashboard/categories"?"bg-[#2F63C7] rounded-lg text-white ":"text-gray-300 hover:bg-[#243653]"} items-center px-4 py-2 rounded-lg transition-colors duration-200 `}> <GroupIcon />  <span>Categories</span></Link>
          
        </div>
        </div>

        <div className="flex gap-2 text-white mb-6 border-y border-gray-700  py-5 px-5">
            <LineSquiggleIcon className=" w-10 h-10 mx-auto bg-gray-500/20 p-2  rounded-full text-blue-400 "/>
            <div className=" ">
                <span className="block">build something great</span>
                <span className="block text-[12px] text-[#6E7E9C]">keep goin, you are doing well</span>
            </div>
        </div>
      
    </div>
)
} 