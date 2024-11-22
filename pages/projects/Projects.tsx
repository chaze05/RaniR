import React from 'react'
// import Swiper core and required modules
import {Pagination, Scrollbar, EffectFade, Autoplay  } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '../components/Button';
import { useState } from 'react';


interface Projects{
    thumb:string,
    name:string,
    dscription:string,
    url:string,
}
const Projects = () => {

    const [filterKey,setFilterKey] = useState<string|null>('*');
    const projects = [
        {
            thumb:'',
            name:'Project 1',
            description:'test Project',
            url:'',
            techStacks:[
                {
                    icon:"<DiPhp className='text-blue-500 text-4xl' />",
                    classes:'text-blue-500 text-4xl',
                },
                {
                    icon:'DiHtml5',
                    classes:'text-red-500 text-4xl',
                },
                {
                    icon:'DiCss3Full',
                    classes:'text-yellow-500 text-4xl',
                },
                {
                    icon:'DiJavascript1',
                    classes:'text-black-500 text-4xl',
                },
                {
                    icon:'DiReact',
                    classes:'text-blue-500 text-4xl',
                },
            ],
            filterkey:'Front End'
        },
        {
            thumb:'',
            name:'',
            description:'',
            url:'',
            filterkey:'Front End'
        },
        {
            thumb:'',
            name:'',
            description:'',
            url:'',
            filterkey:'Full Stack'
        },
        {
            thumb:'',
            name:'',
            description:'',
            url:'',
            filterkey:'Full Stack'
        },
        {
            thumb:'',
            name:'',
            description:'',
            url:''
        },
        {
            thumb:'',
            name:'',
            description:'',
            url:'',
            filterkey:'Back End'
        },
    ]
    const uniqueFilterKeys = [...new Set(projects?.map(project => project.filterkey).filter(Boolean))];

    console.log(uniqueFilterKeys); // Output: ['Front End', 'Full Stack', 'Back End']
    
    return (
        <>  
        <h1 className="text-center font-bold text-5xl">My Projects</h1>
        <div className="flex h-[400px] items-center flex-col">
            <div className="flex flex-col border-b border-gray-500 my-5">
                <h2 className="text-bold text-lg text-center">Filter</h2>
                <div className="flex">
                    <span onClick={()=>setFilterKey('*')} className="capitalize text-black cursor-pointer broder-r border-gray-200 px-2">All</span>
                    {uniqueFilterKeys?.map((filter,index)=>(
                        <span onClick={()=>setFilterKey(filter)} className="capitalize text-black cursor-pointer broder-r border-gray-200 px-2"> {filter}</span>
                    ))}
                </div>
            </div>
            <div className="flex flex-wrap w-full gap-5 justify-center">
                {projects?.map((project,index)=>(
                    <div className={`${filterKey == "*" || filterKey == project.filterkey ? 'opacity-1 fade-in-bottom':'opacity-0 hidden'} rounded-tl-full rounded-br-full max-w-md w-full fade-in-bottom transition-all duration-300 items-center justify-between bg-green-200`}>
                        <div className="w-1/2 px-3">
                            <img src={project.thumb} alt={project.name} />
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <h2 className="font-bold text-10xl text-black">{project.name}</h2>
                            <p>{project.description}</p>
                            <Button link="" label="check it out" classes='bg-blue-300 text-center rounded-lg shaodw-sm capitalize text-black font-bold my-3' />
                        </div>
                    </div>
                ))}
            </div>
        </div> 

        </>


    )
}

export default Projects