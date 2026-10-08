"use client"

import SimpleBarChart from "@/components/UI/simpleCart";





export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
        <h1 className=" text-3xl text-gray-500 font-normal">Kategori</h1>
      <div  className="grid grid-cols-3 gap-6 font-normal">  <div className="bg-[#5443c3] rounded-2xl text-gray-300 text-[20px] font-normal h-50 overflow-hidden relative px-6 py-4">
      <p data-aos="fade-up"  className="relative z-20">produk</p>
      <div className="absolute h-50 w-50 -bottom-6 -left-10 rounded-full bg-[#766ad0]/15"></div>
      <div className="absolute h-50 w-50 -bottom-15 left-10 rounded-full bg-[#766ad0]/20"></div>
      </div>
      <div className="bg-[#5443c3] rounded-2xl text-gray-300 text-[20px] font-normal h-50 overflow-hidden relative px-6 py-4">
      <p data-aos="fade-up" data-aos-delay="100" className="relative z-20">produk</p>
      <div className="absolute h-50 w-50 -top-15 left-30 rounded-full bg-[#766ad0]/15"></div>
      <div className="absolute h-50 w-50 -top-10 left-60 rounded-full bg-[#766ad0]/20"></div>
      </div>
      <div className="bg-[#5443c3] rounded-2xl text-gray-300 text-[20px] font-normal h-50 overflow-hidden relative px-6 py-4">
      <p data-aos="fade-up" data-aos-delay="200"  className="relative z-20">produk</p>
      <div className="absolute h-50 w-50 -bottom-15 right-0 rounded-full bg-[#766ad0]/15"></div>
      <div className="absolute h-50 w-50 -bottom-15 right-20 rounded-full bg-[#766ad0]/20"></div>
      </div>
  </div> 

<div className="w-200 "><SimpleBarChart/></div>

    </div>
  );
}