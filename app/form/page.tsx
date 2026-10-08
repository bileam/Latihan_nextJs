import Link from "next/link";

export default function Read(){
    return(
        <div className="flex flex-col gap-2 items-center justify-center bg-white h-screen text-black">
            <div>ini adalah halaman lihat semua data </div>
           <Link href="form/input" className="px-4 py-2 bg-amber-700 text-white">tambahkan data</Link>
        </div>
    )
}