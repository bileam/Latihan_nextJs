import { Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
          {/* pertam */}
     <div className="flex justify-between w-full items-center  gap-4">
        <div className="flex flex-col gap-2 ">
            <h2 className="text-4xl font-semibold">hallo, Admin </h2>
            <span className="text-gray-500 text-sm">
                welcome to the dashboard page, Here what happening with your store today
            </span>
        </div>
        <div className="flex gap-2 items-center bg-blue-500/10 py-2 px-4 rounded-2xl "> 
            <Calendar className="text-blue-800"/>
            <span className="text-sm font-medium text-gray-500">monday, 6 october 2026</span>
        </div>
     </div>
{/* kedua */}
     <div></div>
     {/* kedua */}
     <div></div>
    </div>
  );
}