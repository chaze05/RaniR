import React from 'react'

interface Yearprops{
    year:string,
    index:number,
}

const Yearblock: React.FC<Yearprops> = ({year,index}) => {
  return (
    <div className={`left-0 w-15 h-15 rounded-full  bg-white flex items-center font-bold px-2 py-6 relative ${index == 1 ? `bg-green-100`: ''} transition-all ease-in-out duration-100`}>
        <span className="absolute w-[120%] h-1 bg-gray-400 -right-[112%] -z-10"></span>
        {year}
    </div>
  )
}



export default :