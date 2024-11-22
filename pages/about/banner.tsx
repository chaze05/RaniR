import React from 'react'
import Link from 'next/link';
import TypeBox from '../components/TypeBox'
import { AiFillFacebook,AiFillLinkedin,AiFillGithub  } from "react-icons/ai";
import { LiaFacebookF,LiaGithub,LiaLinkedinIn,LiaStackOverflow  } from "react-icons/lia";
const banner = () => {
  return (
    <div className="flex justify-center flex-col ">
        <img src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/461828641_1059171819327244_256866152850531010_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHKJh0wXwOef0r9pdhQMyHYkQb44k5L3HiRBvjiTkvceCtNV8B1fdWfedsA_GFOqF6IFXKE4DJCT0q2QIDeG8Rb&_nc_ohc=VA-h3v63wJYQ7kNvgE-BM8F&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AuDsSwQVGbDpjzuz-MVdbwV&oh=00_AYBpjONTJgXtObB9wCBb7xpGZnf5-AjxX4BxmJSKPKTURg&oe=67169EE3" alt="" 
        className="fade-in-fwd my-10 rounded-full mx-auto border-2 border-gray-500 w-full h-[500px] max-w-[500px]" />
        <div className="slide-in-fwd-center  flex flex-row justify-center items-center mb-5">
            <Link href="https://web.facebook.com/rani0305"><LiaFacebookF className='text-black text-5xl' /></Link>
            <LiaGithub className='text-black text-5xl' />
            <LiaStackOverflow className='text-black text-5xl' />
            <LiaLinkedinIn className='text-black text-5xl' />
        </div>
        <TypeBox classContainer="text-5xl text-black text-center slide-in-fwd-center" strings={["Hi I'm Rani Rubillos", 'A Full Stack Developer', 'Enjoy your stay!']} />
        <div className=" slide-in-fwd-center  flex flex-col justify-center gap-6 w-full py-10 items-center">
            <p className="max-w-3xl text-2xl text-black font-normal text-justify">
                Hi, I’m Rani, a passionate Full Stack Web Developer with a strong focus on javascript. With several years of experience in creating responsive, fast, and user-friendly websites, I specialize in turning creative ideas into fully functional digital experiences. My expertise spans WordPress theme and plugin development, front-end technologies (HTML, CSS, JavaScript), and database management with PHP and MySQL. I’m also well-versed in SEO and website optimization, ensuring every project I work on performs exceptionally well across devices and search engines.
            </p>  
            <p className="max-w-3xl text-2xl text-center text-black font-normal text-justify">
                I take pride in my ability to solve complex problems and provide ongoing technical support, whether I’m building a site from scratch or improving an existing one. My goal is always to deliver high-quality work while keeping user experience and performance at the forefront.
            </p>
            <p className="max-w-3xl text-2xl text-center text-black font-normal text-justify">
                As a freelance developer, I have the flexibility to work remotely and the discipline to manage my time effectively. When I’m not coding, I enjoy exploring new technologies, learning more about web design trends, and staying updated on best practices to improve my craft.
            </p>
            <p className="max-w-3xl text-2xl text-center text-black font-normal text-justify">
                Let’s build something great together!
            </p>
        </div>
   </div>
  )
}

export default banner