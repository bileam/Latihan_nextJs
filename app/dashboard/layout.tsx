import Sidebar from "@/components/UI/sidebar";
import Topbar from "@/components/UI/topbar";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <div  className="bg-[#F5F8FC] flex text-black h-screen w-full overflow-hidden">
            <aside>
             <Sidebar/>
            </aside>
            <div className="flex flex-col gap-4 w-full">
                <nav className="w-full ">
                    <Topbar/>
                </nav>
                 <main className="px-10 py-4">
                      {children}
                 </main>
            </div>  
        </div>
    )
}