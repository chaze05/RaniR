import React from 'react'
import { DiCss3Full, DiHtml5, DiJavascript1, DiLaravel, DiPhp, DiReact, DiWordpress } from 'react-icons/di'
import Yearblock from './Yearblock'
interface ProjectProps{
    logo:string,
    name:string,
    description:string,
    techstacks:[],
    link:string,
}

const Projblock: React.FC<ProjectProps> = ({logo,name,description,techstacks,link}) => {
  return (
    <div className="flex items-start fade-in-fwd">
    <div className={`left-0 w-15 h-15 rounded-full  bg-white flex items-center font-bold px-2 py-6 relative ${openIndex == 1 ? `bg-green-100`: ''} transition-all ease-in-out duration-100`}>
        <span className="absolute w-[120%] h-1 bg-gray-400 -right-[112%] -z-10"></span>
        Present
    </div>
    Yearblock
    <div className="flex flex-col w-full bg-white-300 pl-20 relative flex-grow">
        <div className="flex cursor-pointer items-center justify-between rounded-tl-lg rounded-tr-lg w-full p-3 bg-white" onClick={()=>toggleAccordion(1)}>
            <h1 className="flex-bold text-2xl text-black my-0">Trackerteer Web Developer Corp</h1>
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

        <div className={` ${openIndex == 1 ? `h-max bg-white p-5 `:`h-0`} flex-grow rounded-br-lg rounded-bl-lg overflow-hidden transition-all duration-300 border-t-2 border-black`}>
            <div className="flex flex-col text-left">
                <div className="flex justify-between">
                    <p className='font-bold text-xl'><span className="capitalize font-light text-md">position: </span>Back-End Developer</p>
                    <p className='font-bold text-xl'><span className="capitalize font-semibold text-md">August-2024 - Present</span></p>
                </div>
                <div className="flex flex-col">
                    <h3 className=" text-xl my-2">Projects Worked On:</h3>
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                            <img src="https://trackerteer.com/landing_page/images/logo_trackerteer.png" alt="" className='w-auto h-auto mx-auto' />
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
                                    {/* <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiBootstrap className='text-blue-500 text-3xl' /></span> */}
                                </div>
                                <div className="flex items-center jsutify-center w-full">
                                    <Link href="http://dev.rockygo.com/" className='w-max text-center bg-blue-500 text-white py-3 px-5 rounded-sm my-3 mx-auto'>Demo</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                            <img src="http://dev.rockygo.com/uploads/new_images/rockygo_logo_text_new.png?ver=2024OctWed104104" alt="" className='w-auto h-auto mx-auto' />
                            <p className="uppercase font-bold my-1">ROCKY GO!</p>
                            <p className='font-light text-lg my-1 px-3 text-justify'>RockyGo is your ultimate food delivery app, bringing meals from a variety of local restaurants right to your doorstep. Craving something delicious? Order your favorites anytime, anywhere! Download the RockyGo app now and satisfy your cravings with ease! </p>
                            <div className="flex flex-col py-2">
                                <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                <div className="flex py-2 flex-wrap px-3 justify-center">
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-3xl' /></span>
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiLaravel className='text-red-500 text-2xl' /></span>
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiHtml5 className='text-red-500 text-3xl' /></span>
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiCss3Full className='text-yellow-500 text-3xl' /></span>
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJavascript1 className='text-orange-500 text-3xl' /></span>
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiJqueryLogo className='text-blue-500 text-3xl' /></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col w-1/3 border rounded-xl border-gray-400 py-5 text-center justify-center hover:bg-gray-200 transition-all ease-in-out duration-200">
                            <img src="https://taskbanana.com/images/icons/landing-logo.png" alt="" className='w-auto h-auto mx-auto' />
                            <p className="uppercase font-bold my-1">Taskbanana</p>
                            <p className='font-light text-lg my-1 px-3 text-justify'> TaskBanana is a task management app designed to streamline productivity and simplify teamwork. With a user-friendly interface, it allows you to organize, categorize, and track tasks effortlessly. Whether working solo or collaborating with a team, TaskBanana helps you stay on top of your to-dos and accomplish more. </p>
                            <div className="flex flex-col py-2">
                                <h4 className="text-black font-bold text-lg">Tech Stacks</h4>
                                <div className="flex py-2 flex-wrap px-3 justify-center">
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiPhp className='text-blue-500 text-2xl' /></span>
                                    <span className='bg-white border border-black flex rounded-lg text-center p-2 mx-1'><DiLaravel className='text-red-500 text-2xl' /></span>
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
  )
}

export default Projblock