import Link from 'next/link';
import React, {useState} from 'react'
import { LiaFacebookF,LiaGithub,LiaLinkedinIn,LiaStackOverflow  } from "react-icons/lia";
import { DiPhp,DiLaravel,DiHtml5,DiCss3Full,DiSass ,DiJavascript1,DiReact, DiWordpress,DiJqueryLogo,DiJqueryUiLogo, DiBootstrap} from "react-icons/di";
import IconRenderer from '../components/IconRenderer';

const Experience = () => {
    const [openIndex,setOpenIndex] = useState<number | null>(null);
    const [openDrawer,setOpenDrawer] = useState<number>(0);
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
    <h1 className="text-center text-5xl font-bold capitalize fade-in-bottom text-slate-800">work experience</h1>
    <div className="flex justify-between flex-col gap-10 relative fade-in-bottom"> 
   
        <div className="absolute h-full w-2 bg-gradient-to-b from-slate-400 to-slate-600 top-10 left-9 rounded-full"></div>
        <div className="rounded-full w-12 h-12 top-[110%] bg-slate-300 left-4 relative shadow-lg"></div>
        <div className="rounded-full w-12 h-12 -bottom-20 bg-slate-300 left-4 absolute shadow-lg"></div>
        <div className="flex items-start fade-in-bottom">
            <div className="left-0 w-[73px] text-center justify-center h-15 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 flex items-center font-bold px-2 py-6 relative shadow-md hover:shadow-lg transition-shadow duration-300">
                <span className="absolute w-[120%] h-1 bg-gradient-to-r from-slate-400 to-slate-600 -right-[112%] -z-10 rounded-full"></span>
                2021
            </div>
            <div className="flex flex-col w-full bg-white-300 pl-20 relative flex-grow">
                <div className="flex fade-in-bottom cursor-pointer items-center justify-between rounded-tl-lg rounded-tr-lg w-full p-3 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 transition-all duration-300 shadow-md hover:shadow-lg" onClick={()=>toggleAccordion(2)}>
                    <h1 className="flex-bold text-2xl text-slate-800 my-0">Freelance Developer</h1>
                    <div className=" flex flex-row justify-center items-center gap-2">
                        <IconRenderer type="di" iconName="DiPhp" classes="text-blue-500 text-4xl hover:scale-110 transition-transform duration-200" setcolor="blue" />
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiPhp className='text-blue-500 text-4xl' /></span>
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiLaravel className='text-red-500 text-3xl' /></span>
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiHtml5 className='text-red-500 text-3xl' /></span>
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                        {/* <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiSass className='text-purple-500 text-3xl' /></span> */}
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiReact className='text-blue-500 text-3xl' /></span>
                        <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200'><DiWordpress className='text-blue-900 text-3xl' /></span>
                    </div>
                </div>

                <div className={` ${openIndex == 2 ? `h-max bg-gradient-to-b from-slate-50 to-slate-100 p-5 shadow-inner`:`h-0`} flex-grow rounded-br-lg rounded-bl-lg overflow-hidden transition-all duration-500 border-t-2 border-slate-400`}>
                    <div className="flex flex-col text-left">
                        <div className="flex justify-between mb-4">
                            <p className='font-bold text-xl text-slate-800'><span className="capitalize font-light text-md text-slate-600">position: </span>Back-End Developer</p>
                            <p className='font-bold text-xl text-slate-800'><span className="capitalize font-semibold text-md text-slate-600">August-2024 - Present</span></p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-xl my-2 text-slate-700 font-semibold">Projects Worked On:</h3>
                            <div className="flex gap-4">
                                <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto' />
                                    <p className="uppercase font-bold my-1">POS (Point of Sales)</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center gap-4">
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-4xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiBootstrap className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-slate-400 py-5 text-center justify-center hover:bg-slate-100 transition-all ease-in-out duration-300 shadow-md hover:shadow-lg">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto rounded-full' />
                                    <p className="uppercase font-bold my-1 text-slate-800">Rocky GO!</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify text-slate-600'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-slate-700 font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center">
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiPhp className='text-blue-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-slate-400 py-5 text-center justify-center hover:bg-slate-100 transition-all ease-in-out duration-300 shadow-md hover:shadow-lg">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto rounded-full' />
                                    <p className="uppercase font-bold my-1 text-slate-800">Taskbanana</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify text-slate-600'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-slate-700 font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center">
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiPhp className='text-blue-500 text-2xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-start fade-in-bottom">
            <div className="left-0 w-[73px] text-center justify-center h-15 rounded-full bg-white flex items-center font-bold px-2 py-6 relative">
                <span className="absolute w-[120%] h-1 bg-gray-400 -right-[112%] -z-10"></span>
                2019
            </div>
            <div className="flex flex-col w-full bg-white-300 pl-20 relative flex-grow">
                <div className="flex cursor-pointer items-center justify-between rounded-tl-lg rounded-tr-lg w-full p-3 bg-white" onClick={()=>toggleAccordion(3)}>
                    <h1 className="flex-bold text-2xl text-black my-0">SPIN Internet Media</h1>
                    <div className=" flex flex-row justify-center items-center">
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

                <div className={` ${openIndex == 3 ? `h-max bg-white p-5 `:`h-0`} flex-grow rounded-br-lg rounded-bl-lg overflow-hidden transition-all duration-300 border-t-2 border-black`}>
                    <div className="flex flex-col text-left">
                        <div className="flex justify-between">
                            <p className='font-bold text-xl'><span className="capitalize font-light text-md">position: </span>Back-End Developer</p>
                            <p className='font-bold text-xl'><span className="capitalize font-semibold text-md">August-2024 - Present</span></p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className=" text-xl my-2">Projects Worked On:</h3>
                            <div className="flex gap-4">
                                <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto' />
                                    <p className="uppercase font-bold my-1">POS (Point of Sales)</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center gap-4">
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-4xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiBootstrap className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-slate-400 py-5 text-center justify-center hover:bg-slate-100 transition-all ease-in-out duration-300 shadow-md hover:shadow-lg">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto rounded-full' />
                                    <p className="uppercase font-bold my-1 text-slate-800">POS (Point of Sales)</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify text-slate-600'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-slate-700 font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center">
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiPhp className='text-blue-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-slate-300 flex rounded-lg text-center p-2 mx-1 shadow-sm hover:shadow-md transition-shadow duration-200'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto' />
                                    <p className="uppercase font-bold my-1">POS (Point of Sales)</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center">
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-2xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Experience