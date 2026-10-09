"use client"

import { createProductSchema } from "@/schemas/product.schema"
import { useRouter } from "next/navigation"

import { success } from "zod"


export default function AddData(){
const router = useRouter()
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
     const dataform  ={
        name_product : formData.get("name_product"),
        price_product : Number(formData.get("price_product")),
        categories :  formData.get("categories"),
        desc: formData.get("desc")
     } 
    //  menyamakan type yang ada di schema yang kita sudah buat
 const result = createProductSchema.safeParse(dataform);
 console.log(success)
 if(!result.success){
    console.log(result.error.flatten().fieldErrors) //untuk membaca erornya apa lebih spesifiki 

    return
 }
 console.log("data berhasil di tambahkan ",result.data)
//  window.location.href = "/form"
router.push("/dashboard")
    }
    return(
        <div className="bg-white h-screen text-black flex flex-col items-center justify-center rounded-lg">
            <div className="rounded-lg border border-yellow-300 shadow-amber-300  w-150 py-10 px-4">
                <h1 className="text-yellow-600 w-full text-center text-lg">Tambahkan data product</h1>
                <form onSubmit={handleSubmit} action="" className="mt-10 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nameproduct" className="text-[14px] text-gray-500 font-bold">name product</label>
                        <input name="name_product" className="outline px-4 py-2 text-[14px] text-gray-500 rounded-lg outline-gray-300" type="text" placeholder="exp: Naga berapi" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nameproduct" className="text-[14px] text-gray-500 font-bold">Price product</label>
                        <input name="price_product" className="outline px-4 py-2 text-[14px] text-gray-500 rounded-lg outline-gray-300" type="number" placeholder="exp: 12000" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nameproduct" className="text-[14px] text-gray-500 font-bold">categories product</label>
                        <input name="categories" className="outline px-4 py-2 text-[14px] text-gray-500 rounded-lg outline-gray-300" type="text" placeholder="exp: Makanan" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nameproduct" className="text-[14px] text-gray-500 font-bold">Transaksi Product</label>
                        <textarea name="desc" className="outline px-4 py-2 text-[14px] text-gray-500 rounded-lg outline-gray-300" type="text" placeholder="exp : product ini sanagat enak dan keren " />
                    </div>
                    <div className=" flex gap-2 items-center justify-center mt-5">
                        <button className="hover:border-yellow-900 hover:text-yellow-900 transition-colors duration-300 py-2 px-4 border border-amber-800 text-yellow-700 brightness-125 rounded-md" type="reset">Reset data</button>
                        <button  className="hover:bg-yellow-900 hover:text-white transition-colors duration-300 py-2 px-4  bg-amber-800 text-white brightness-125 rounded-md" type="submit">Tambahkan data</button>
                    </div>
                </form>
            </div>
        </div>
    )
}