const ContestContainer = () => {

    return ( 
        <div className="flex flex-col p-5 border-[0.2px] shadow border-white rounded-md w-6/12 m-auto gap-y-4">
            {/* <h4 className="text-center text-[25px] font-bold">0:00</h4> */}
            <div className="flex font-bold text-[15px] text-slate-[16px] text-slate-700">
                <span># Nigeria General Election 2024</span>
            </div>

            <div className="grid grid-cols-2 gap-x-4  text-[14px] w-6/12">
                <h4 className="text-slate-500">Duration:</h4>
                <h4 >0 : 00</h4>
                <h4 className="text-slate-500">Contestants:</h4>
                <h4 >4</h4>
                <h4 className="text-slate-500">Votes:</h4>
                <h4 >0 : 00</h4>
            </div>
            
            <div className="grid grid-cols-4">
                <div className="text-">

                </div>
            </div>
        </div>
     );
}
 
export default ContestContainer;