const Navbar = () => {
    return ( 
        <div className="p-3 flex justify-between border-b-[0.1px] border-white">
            <h4 className="logo text-[35px] font-bold text-slate-500">Transparent</h4>
            <div className="flex">
            <button type="button"
                    class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Connect
            </button>
            </div>
        </div>
     );
}
 
export default Navbar;