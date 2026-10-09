
import { AlignRight } from "lucide-react";
import GLOW from "./Glow";


export default function Profile (){
    return(
        <div className=" w-full bg-[#5443c3]  relative overflow-hidden rounded-2xl text-white ">
            <div  data-aos="fade-up" data-aos-delay="100" className="relative z-10 px-10 py-5">
                <h1   ><span className="text-[30px] font-semibold">Hallo, Selamat Datang kembali</span>, <span className="block font-normal">Kelola Kuanganmu dengan lebih mudah di sini</span> </h1>
            <button  className="flex gap-4 cursor-pointer text-gray-600 hover:px-6 transition-all duration-300 shadow hover:text-[#5443c3] group py-3 px-4 bg-white rounded-2xl mt-2"><span>Lihat ringkasan</span> <span className="group-hover:translate-x-2 transition-all duration-300 font-semibold group-hover:text-[#5443c3] group-hover:rotate-180">{">"}</span></button>
            </div>
          <GLOW className="w-30 h-30 -top-15 -left-15   bg-[#766ad0]/70"/>
          <GLOW className="w-30 h-30 -bottom-10 -left-10   bg-[#766ad0]/70"/>
          <GLOW className="w-30 h-30 -bottom-15 left-40   bg-[#766ad0]/70"/>
           <GLOW className="w-50 h-50  -bottom-10 -right-10 bg-[#766ad0]/70"/ >
           <GLOW className="w-50 h-50  -bottom-20 right-10 border border-gray-400 z-10"/ >
        </div>
    )
}