import { useState } from "react"


const Colorbtn = () => {

    const [color, setColor] = useState("olive")
    return (
        <div className=" relative">

<div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 mb-3 mt-3">
   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
       <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor: "red"}}>Red</button>
       <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor: "green"}}>Green</button>
       <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full text-white shadow-lg " style={{backgroundColor: "blue"}}>Blue</button>
   </div>
</div>
     <div className="w-full h-64 duration-200" style={{backgroundColor: color}}>

</div>
        </div>
    )
}

export default Colorbtn