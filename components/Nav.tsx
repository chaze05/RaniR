import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-max-content flex justify-center py-10 bg-black container-fluid'>
      <div className="container mx-auto flex justify-center">
        <Link href={'/'} className='font-bold text-white text-5xl'>RMR</Link>
      </div>

    </div>
  )
}

export default Nav