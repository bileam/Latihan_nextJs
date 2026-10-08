export default function Input({placeholder}:{placeholder:string}){
    return(
        <div className="flex flex-col gap-2">
            <input
                type="text"
                id="input"
                placeholder={placeholder}
                className="bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
            />
        </div>
    )
}