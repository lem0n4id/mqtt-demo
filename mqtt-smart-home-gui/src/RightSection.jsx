function Card(props) {
    return (
        <div className="w-[351px] h-[260px] bg-[#8A8A8A] rounded-[25px] mx-10 my-5">
                    <div className="flex flex-col">
                    <p className="text-lg mx-auto pt-10">{props.text}</p> 
                        <div className="flex flex-row justify-center">
                            <img className="w-[213px] h-[132px]" src={`${props.image}`} alt="" />
                        </div>
                        <div className="flex flex-row justify-center gap-16 pt-3">
                            <div className="text-xl">{props.temp}°C</div>
                            <div className="text-xl">{props.hum}%</div>
                        </div>
                    </div>
                </div>
    )
}

export default function RightSection() {
    return (
        <div className="h-screen w-[1200px]">
            <div className="flex flex-row flex-wrap gap-4 bg-[#D9D9D9] w-full">
                <Card image="living_room.png" text="Living Room" temp="25" hum="35" />
                <Card image="kitchen.png" text="Kitchen" temp="30" hum="35" />
                <Card image="bedroom.png" text="Bed room 1" temp="18" hum="35" />
                <Card image="bedroom.png" text="Bed room 2" temp="21" hum="35" />
            </div>
        </div>
    )
}