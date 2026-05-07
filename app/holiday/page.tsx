export default function HolidayPage () {
    return(
        <div className="bg-gray-100 h-screen flex justify-center items-center">

            <div className="justify-center">
                <div className="bg-white h-120 w-80 rounded-4xl p-7 flex flex-col gap-4">
                    <div>
                        <img src ="/langit.jpg" className=" h-70 rounded-4xl"/>
                    </div>

                    <div className="flex flex-col">
                        <div>
                            <h1 className="text-2xl font-bold text-black">San Francisco</h1>
                        </div>
                            <p>Premium economy</p>

                    </div>
                    
                    <div className="flex gap-2 text-black">
                        <div className="flex gap-2">
                            <img src="/tag.svg"/>
                            <p>from $240</p>
                        </div>
                        <div className="flex gap-2">
                            <img src="/plane-tilt.svg"/>
                            <p>SFO</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <div className="bg-black h-8 w-50 rounded-2xl flex justify-center items-center">
                            <button>Search Flight</button>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-white border border-black flex justify-center items-center">
                            <button>
                            < img src="/heart.svg"/>
                            </button>
                        </div>
                            
                        </div>
                    </div>


                </div>



            </div>


        


    )
}