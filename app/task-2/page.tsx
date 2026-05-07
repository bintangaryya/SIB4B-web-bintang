export default function TaskPage() {
    return (
    <div className="bg-white h-screen flex gap-4 justify-center items-center flex-col ">

        <div className="flex gap-4 justify-center">

            <div className="bg-blue-200 h-80 w-120 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                <div className=" flex gap-4 ">
                    <img src="/palette.svg"/>
                    <p> Design </p>
                </div>
                    <div>
                        <h1 className="text-2xl font-bold">Adobe Photoshop</h1>
                        <div className="flex justify-between">
                            <p className="text-gl">in 3 days </p>
                        <div className="flex -space-x-2 items-center">
                            <img src="/2fb0e578a8ab6f8073092ae637c87835.png" className= " h-7 rounded-full border-2 border-white"/>
                            <img src="/112413f070536d15170606f2d00aa15d.png" className= " h-7 rounded-full border-2 border-white"/>
                            <img src="/9854663aec5741bbbe84290b6edc0aed.png" className= " h-7 rounded-full border-2 border-white"/>
                            <div className="h-7 w-7 rounded-full bg-blue-100 p-1.5 text-xs">+9</div>
                        </div> 
                    </div>
                </div>
            </div>
        
            <div className="bg-green-200 h-80 w-120 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <img src="/prompt.svg"/>
                        <p> AI </p>
                    </div>
                    <img src="/star.svg"/>
                </div>
                <div>
                    <h1 className="text-2xl font-bold ">DALL.E 2, Midjourney, Stable Diffusion</h1>
                    <div className="flex justify-between">
                        <p className="text-gl">in 5 days </p>
                        <div className="flex -space-x-3 items-center">
                            <img src="/2fb0e578a8ab6f8073092ae637c87835.png" className= " h-8 rounded-full border-2 border-white"/>
                            <img src="/112413f070536d15170606f2d00aa15d.png" className= " h-8 rounded-full border-2 border-white"/>
                            <img src="/9854663aec5741bbbe84290b6edc0aed.png" className= " h-8 rounded-full border-2 border-white"/>
                            <div className="h-7 w-7 rounded-full bg-green-100 p-1.5 text-xs">+3</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="flex gap-5 justify-center ">
            <div className="bg-purple-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className=" flex gap-4">
                <img src="/palette.svg"/>
                <p> Design </p>
            </div>

            <div>
                <h1 className="text-4xl font-bold">Figma </h1>
                <p className="text-gl">8 Hours Ago </p>
            </div>
        </div>

        <div className="bg-orange-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className=" flex gap-4">
                <img src="/code.svg"/>
                <p> Coding </p>
            </div>

            <div>
                <h1 className="text-4xl font-bold">Python </h1>
                <p className="text-gl">2 Days Ago </p>
            </div>
        </div>

        <div className="bg-pink-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
            <div className=" flex gap-4">
                <img src="/palette.svg"/>
                <p> Design </p>
            </div>

            <div>
                <h1 className="text-4xl font-bold">Sketch</h1>
                <p className="text-gl">4 Days Ago </p>
                </div>
            </div>
        </div>
        <div className="w-350 text-right text-gray-400 text-2xl py-5"> 
            Day 20 / 365
        </div>
    </div>      
    )
}
