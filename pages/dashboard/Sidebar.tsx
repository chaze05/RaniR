import React from 'react'
import { FaComments } from "react-icons/fa";


const sidebar = (props:[]) => {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-black text-white">
        <div className="flex items-center border-b border-gray-300 gap-5 p-5">
            <img src="" alt="" className="rounded-full border-2 border-gray-300 h-10 w-10" />
            <h3 className="font-bold capitalize">Rani Rubillos</h3>
        </div>
        <div className="flex-col flex w-full">
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Notifications
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Notifications
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Notifications
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Notifications
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Notifications
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Notifications
            </span>
        </div>
        <div className="mt-auto border-t border-gray-300 flex flex-col w-full">
            <span className="border-b border-gray-200 py-3 text-left px-5 flex items-center gap-5 curor-pointer hover:bg-blue-100 hover:text-black transition-all ease-in-out cursor-pointer">
                <FaComments /> Notifications
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Settings
            </span>
            <span className="border-b border-gray-200 py-3 text-left px-5">
                Logout
            </span>
        </div>
    </div>

  )
}

export default sidebar