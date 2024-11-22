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
    <h1 className="text-center text-4xl font-bold capitalize fade-in-bottom ">work experience</h1>
    <div className="flex justify-between flex-col gap-10 relative fade-in-bottom"> 
   
        <div className="absolute h-full w-1 bg-gray-400 top-10 left-9"></div>
        <div className="rounded-full w-10 h-10 top-[110%] bg-white left-4 relative"></div>
        <div className="rounded-full w-10 h-10 -bottom-20 bg-white left-4 absolute"></div>
        <div className="flex items-start fade-in-bottom">
            <div className="left-0 w-[73px] text-center justify-center h-15 rounded-full bg-gray-300 flex items-center font-bold px-2 py-6 relative">
                <span className="absolute w-[120%] h-1 bg-gray-400 -right-[112%] -z-10"></span>
                2021
            </div>
            <div className="flex flex-col w-full bg-white-300 pl-20 relative flex-grow">
                <div className="flex fade-in-bottom cursor-pointer items-center justify-between rounded-tl-lg rounded-tr-lg w-full p-3 bg-white" onClick={()=>toggleAccordion(2)}>
                    <h1 className="flex-bold text-2xl text-black my-0">Freelance Developer</h1>
                    <div className=" flex flex-row justify-center items-center">
                        <IconRenderer  iconName="DiPhp" classes=""  />
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

                <div className={` ${openIndex == 2 ? `h-max bg-white p-5 `:`h-0`} flex-grow rounded-br-lg rounded-bl-lg overflow-hidden transition-all duration-300 border-t-2 border-black`}>
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
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto' />
                                    <p className="uppercase font-bold my-1">Rocky GO!</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center">
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto' />
                                    <p className="uppercase font-bold my-1">Taskbanana</p>
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
                                
                                <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                                    <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-20 h-20 mx-auto' />
                                    <p className="uppercase font-bold my-1">POS (Point of Sales)</p>
                                    <p className='font-light text-lg my-1 px-3 text-justify'>versatile point-of-sale system tailored for businesses in the Philippines. It streamlines sales, inventory management, and reporting, offering VAT compliance, Z-Reports, and customizable features for both small and large enterprises. </p>
                                    <div className="flex flex-col py-2">
                                        <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                        <div className="flex py-2 flex-wrap px-3 justify-center">
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                            <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
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