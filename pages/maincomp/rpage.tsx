import React, {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";


const rpage = () => {
    const [active,setActive] = useState(false);

  return (
    <div onClick={(e)=>setActive(true)} className={`flex ${active ? `w-full h-full z-[11]` : ` w-1/2 h-1/2 z-10`} absolute transition-all duration-300 top-0 right-0  bg-yellow-500 justify-center items-center`}>
        <AiOutlineClose onClick={(e)=>{ 
            e.stopPropagation(); 
            setActive(false)}}
            className={`absolute top-5 right-5 text-4xl text-black font-bold cursor-pointer ${active ? 'flex' : 'hidden z-9'}`} />
        <h1 className="text-center text-5xl text-white">A</h1>  
    </div>
  )
}

export default rpage