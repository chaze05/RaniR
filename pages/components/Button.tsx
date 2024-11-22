import React from 'react'
import Link from 'next/link'

interface ButtonProps{
    label:string,
    link:string,
    classes:string,
}

const Button: React.FC<ButtonProps> = ({label, classes,link}) => {
  return (
    <Link href={link} className={`px-3 py-2 text-center rounded ${classes}`}>{label}</Link>
  )
}

export default Button;