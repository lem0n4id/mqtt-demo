export default function LeftSection() {
    return (
        <div className="w-[400px] h-full bg-[#7E7E7E] ">
            <div className="h-1/5 border border-2 border-b-black border-x-[#7E7E7E]">
                <div className="flex gap-24">
                    <div className="flex flex-col">
                        <div className="pl-16 pt-6 py-1 font-bold text-2xl">28 C</div>
                        <div className="pl-16 pb-5 font-bold text-2xl">Sunny</div>
                    </div>
                    
                    <img src="/Sun.png" alt="" />
                </div>
            </div>
            <div className="h-1/5 border border-2 border-b-[#7E7E7E] border-x-[#7E7E7E] border-t-[#7E7E7E]">
                <div className="flex gap-24">
                    <img className="pl-16" src="/wind.png" alt="" />
                    <div className="flex flex-col">
                        <div className="pt-6 py-1 font-bold text-2xl">Wind</div>
                        <div className="pb-5 font-bold text-2xl">10 Km/h</div>
                    </div> 
                </div>
            </div>
            <div className="h-1/5 border border-2 border-b-[#7E7E7E] border-x-[#7E7E7E] border-t-[#7E7E7E]">
                <div className="flex gap-24">
                    <img className="pl-16" src="/pressure.png" alt="" />
                    <div className="flex flex-col">
                        <div className="pt-6 py-1 font-bold text-2xl">Pressure</div>
                        <div className="pb-5 font-bold text-2xl">720hpa</div>
                    </div> 
                </div>
            </div>
            <div className="h-1/5 border border-2 border-b-black border-x-[#7E7E7E] border-t-[#7E7E7E]">
                <div className="flex gap-24">
                    <img className="pl-16" src="/rain.png" alt="" />
                    <div className="flex flex-col">
                        <div className="pt-6 py-1 font-bold text-2xl">Rain Chance</div>
                        <div className="pb-5 font-bold text-2xl">80%</div>
                    </div> 
                </div>
            </div>
        </div>
    )
}