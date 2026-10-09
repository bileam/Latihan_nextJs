"use client"

import Profile from "@/components/Dashboard/Profile";
import Table from "@/components/Dashboard/Table";
import SimpleBarChart from "@/components/UI/simpleCart";





export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <Profile/>
        <p className=" text-lg text-black ">Ringkasan Ketegori</p>
      <div  className="grid grid-cols-3 gap-6 font-normal">  
        <div className="bg-[#5443c3] rounded-2xl text-white font-normal  overflow-hidden relative px-6 py-4">
      <p data-aos="fade-up"  className="relative z-20">produk</p>
      <div className="absolute h-50 w-50 -bottom-6 -left-10 rounded-full bg-[#766ad0]/15"></div>
      <div className="absolute h-50 w-50 -bottom-15 left-10 rounded-full bg-[#766ad0]/20"></div>
      </div>
      <div className="bg-[#5443c3] rounded-2xl text-white font-normal  overflow-hidden relative px-6 py-4">
      <p data-aos="fade-up" data-aos-delay="100" className="relative z-20">produk</p>
      <div className="absolute h-50 w-50 -top-15 left-30 rounded-full bg-[#766ad0]/15"></div>
      <div className="absolute h-50 w-50 -top-10 left-60 rounded-full bg-[#766ad0]/20"></div>
      </div>
      <div className="bg-[#5443c3] rounded-2xl text-white font-normal  overflow-hidden relative px-6 py-4">
      <p data-aos="fade-up" data-aos-delay="200"  className="relative z-20">produk</p>
      <div className="absolute h-50 w-50 -bottom-15 right-0 rounded-full bg-[#766ad0]/15"></div>
      <div className="absolute h-50 w-50 -bottom-15 right-20 rounded-full bg-[#766ad0]/20"></div>
      </div>
  </div> 
{/* <div className="w-200 "><SimpleBarChart/></div> */}
 <p className=" text-lg text-black ">Aktivitas terbaru</p>
<div className="w-full -mt-3   border border-gray-200 rounded-2xl overflow-hidden shadow flex-col gap-2 flex">
 
  <Table/>
</div>
    </div>
  );
}