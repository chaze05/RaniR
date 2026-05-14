import React from 'react';
import * as Icons from 'react-icons/di'; // Adjust the import based on the icon prefix
import * as Iconsf from 'react-icons/fa'; // Adjust the import based on the icon prefix

interface IconProps{
    iconName:string,
    classes:string,
    type:string,
    setcolor:string,
}
const IconRenderer: React.FC<IconProps> = ({ iconName,classes,type,setcolor }) => {
const IconComponent = type == "di" ? Icons[iconName as keyof typeof Icons] : Iconsf[iconName as keyof typeof Iconsf] ; // Type assertion for better TypeScript support
  if (!IconComponent) {
    return <span>Icon not found</span>; // Handle icon not found case
  }
  return <IconComponent className={`${classes} `} size={100} color={setcolor} />; // Customize size and color as needed
};

export default IconRenderer;