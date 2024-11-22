import React from 'react'
import Banner from './banner'
import Heading from '../maincomp/heading'
import IconRenderer from '../components/IconRenderer'
const about = () => {
  return (
    <>
    {/* <div className="absolute top-0 left-0 w-full h-full bg-yellow-100  bg-opacity-10">
    </div> */}
    <Heading text={"About Me"} containerClass='text-black' />
    <Banner />
    </>
  )
}

export default about