export default function LearnPage() {
    return (
   <div className="bg-white h-screen flex gap-4 justify-center items-center flex-col">

            <div className="flex gap-5 justify-center">

                <div className="bg-cyan-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                    <div className="flex gap-3">
                        <img src="/palette.svg"/>
                        <p>Design</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Adobe Photoshop</h1>
                        <br/>
                        <div className="flex justify-between">
                            <p>In 6 days</p>
                            <div className="flex -space-x-3 items-center">
                                <img src="/steven.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/Finnn.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/James.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <div className="flex items-center w-7 h-7 rounded-full bg-white p-1.5 text-xs">
                                    <p>+9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-green-100 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <img src="/terminal-2.svg"/>
                            <p>AI</p>
                        </div>
                        <img src="/star.svg"/>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
                        <br/>
                        <div className="flex justify-between">
                            <p>In 7 days</p>
                            <div className="flex -space-x-3 items-center">
                                <img src="/Grizzly.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/Panda.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <img src="/Ice.svg" className="w-7 h-7 rounded-full border-2 border-white"/>
                                <div className="flex items-center w-7 h-7 rounded-full bg-white p-1.5 text-xs">
                                    <p>+3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex gap-5 justify-center">

                <div className="bg-purple-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                    <div className="flex gap-3">
                        <img src="/palette.svg"/>
                        <p>Design</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Figma</h1>
                        <p>1 days ago</p>
                    </div>
                </div>

                <div className="bg-orange-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                    <div className="flex gap-3">
                        <img src="/code.svg"/>
                        <p>Coding</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Python</h1>
                        <p>2 days ago</p>
                    </div>
                </div>

                <div className="bg-pink-300 h-72 w-96 flex flex-col justify-between p-8 rounded-4xl text-blue-950">
                    <div className="flex gap-3">
                        <img src="/palette.svg"/>
                        <p>Design</p>
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Sketch</h1>
                        <p>3 days ago</p>
                    </div>
                </div>

            </div> 

        </div>

    
        
    )
}