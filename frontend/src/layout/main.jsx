import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Main = () => {
    return ( 
        <div className="flex flex-col h-screen w-full backdrop-blur-sm backdrop-brightness-150">
            <Navbar/>
            <div className="grid grid-cols-7 flex-1">
                <div className="border-r-[0.1px] col-span-1 border-white"></div>
                <div className="col-span-5">
                    <Outlet/>
                </div>
                <div className="col-span-1 border-l-[0.1px] border-white"></div>
            </div>
        </div>
     );
}
 
export default Main;