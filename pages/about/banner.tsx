import React from 'react'
import Link from 'next/link';
import TypeBox from '../components/TypeBox'
import { AiFillFacebook,AiFillLinkedin,AiFillGithub  } from "react-icons/ai";
import { LiaFacebookF,LiaGithub,LiaLinkedinIn,LiaStackOverflow  } from "react-icons/lia";
const banner = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-slate-900 bg-slate-900/ p-8 shadow-[0_40px_120px_rgba(15,23,42,0.55)] backdrop-blur-xl">
        <div className="grid gap-10 lg:grid-cols-[360px_auto] items-center">
          <div className="relative rounded-[32px] bg-slate-900/90 p-6 shadow-2xl ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1">
            <img
              src="https://scontent.fmnl33-5.fna.fbcdn.net/v/t39.30808-6/461828641_1059171819327244_256866152850531010_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHKJh0wXwOef0r9pdhQMyHYkQb44k5L3HiRBvjiTkvceCtNV8B1fdWfedsA_GFOqF6IFXKE4DJCT0q2QIDeG8Rb&_nc_ohc=VA-h3v63wJYQ7kNvgE-BM8F&_nc_zt=23&_nc_ht=scontent.fmnl33-5.fna&_nc_gid=AuDsSwQVGbDpjzuz-MVdbwV&oh=00_AYBpjONTJgXtObB9wCBb7xpGZnf5-AjxX4BxmJSKPKTURg&oe=67169EE3"
              alt="Rani Rubillos"
              className="mx-auto mb-6 h-64 w-64 rounded-full border-4 border-slate-500 shadow-xl object-cover transition-all duration-500 hover:scale-105"
            />
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-800/80 px-4 py-2 text-sm uppercase tracking-[0.2em] text-slate-300 shadow-sm">
                Full Stack Developer
              </div>
              <div className="grid gap-3">
                <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-slate-700/60">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Experience</p>
                  <p className="mt-2 text-2xl font-semibold text-white">9+ Years</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-slate-700/60">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Focus</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Full Stack</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-slate-700/60">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Availability</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Remote / Freelance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-slate-800 to-slate-700 px-5 py-2 text-sm uppercase tracking-[0.3em] text-slate-300 shadow-lg shadow-slate-950/40">
                Professional profile
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Rani Rubillos
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                A creative full-stack developer who builds polished, fast, and responsive web products that help businesses grow online.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-900/90 p-6 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900">
                <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500">Core Skills</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>React / Next.js</li>
                  <li>Node.js / Express</li>
                  <li>WordPress & PHP</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-6 ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900">
                <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500">Highlights</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li>Designed interfaces for modern business tools</li>
                  <li>Delivered high-performing web experiences</li>
                  <li>Built scalable apps with clean architecture</li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/90 p-6 ring-1 ring-white/5 shadow-xl">
              <p className="text-slate-300 leading-8">
                Hi, I’m Rani, a passionate developer focused on building responsive, user-friendly web experiences. I combine strong front-end craftsmanship with back-end knowledge so each project is polished, fast, and reliable.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Connect with me</p>
              <div className="mt-4 flex flex-wrap items-center justify-start gap-4 text-slate-300">
                <Link href="https://web.facebook.com/rani0305" className="transition duration-300 hover:text-blue-500 hover:scale-110">
                  <LiaFacebookF className="text-3xl" />
                </Link>
                <Link href="https://github.com" className="transition duration-300 hover:text-slate-100 hover:scale-110">
                  <LiaGithub className="text-3xl" />
                </Link>
                <Link href="https://linkedin.com" className="transition duration-300 hover:text-blue-400 hover:scale-110">
                  <LiaLinkedinIn className="text-3xl" />
                </Link>
                <Link href="https://stackoverflow.com" className="transition duration-300 hover:text-orange-500 hover:scale-110">
                  <LiaStackOverflow className="text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default banner