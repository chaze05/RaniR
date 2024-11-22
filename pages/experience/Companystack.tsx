import React from 'react'

interface CompanyProps{
    clickEvent:string,
    name:string,
    stack:[icons:[],classes:string],
}

const Companystack: React.FC<CompanyProps> = ({clickEvent,name,stack}) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-tl-lg rounded-tr-lg w-full p-3 bg-white" onClick={()=>toggleAccordion(1)}>
        <h1 className="flex-bold text-2xl text-black my-0">Trackerteer Web Developer Corp</h1>
        <div className=" flex flex-row justify-center items-center">
            {/* {stack.map} */}
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-4xl' /></span>
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiLaravel className='text-red-500 text-3xl' /></span>
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
            {/* <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiSass className='text-purple-500 text-3xl' /></span> */}
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiReact className='text-blue-500 text-3xl' /></span>
            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiWordpress className='text-blue-900 text-3xl' /></span>
        </div>
    </div>
  )
}

export default Companystack