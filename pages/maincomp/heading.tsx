import React from 'react'
// Define the props interface
interface HeadingProps {
    containerClass?: string;
    text?:string,
  }
  
  const heading: React.FC<HeadingProps> = ({ containerClass = '',text = 'Test' }) => {
  return (
   <h1 className={`text-5xl text-center justify-center ${containerClass}`}> {text}</h1>
  )
}

export default heading