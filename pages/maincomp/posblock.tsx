import React, { Children, useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import * as FaIcons from "react-icons/fa"; // Imports all icons from Font Awesome
import IconRenderer from '../components/IconRenderer';

// Define the props interface
interface ReusableComponentProps {
  containerClass?: string;
  text?:string,
  newBg?:string,
  capital:string,
  onClickHandler?: () => void;
  children?: React.ReactNode; // To accept the content passed between opening and closing tags
  icon:string,
  resetActiveBox?: () => void;
}

const ReusableComponent: React.FC<ReusableComponentProps> = ({ capital,containerClass = '',text = 'Test', onClickHandler,children,newBg = 'bg-black',icon, resetActiveBox}) => {
  const [active, setActive] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setActive(true);
    if (onClickHandler) {
      onClickHandler(); // Call the passed in onClick function
    }
  };
  useEffect(() => {
    if (active) {
        // Set a timeout to update the showChildren state after 3 seconds
        const timer = setTimeout(() => {
            setShowChildren(true);
        }, 250);

        // Clear the timeout if the component unmounts or if active changes
        return () => clearTimeout(timer);
    } else {
        setShowChildren(false);
        resetActiveBox();
    }
}, [active,resetActiveBox]);

  return (
    <div
      onClick={handleClick}
      className={`relative sm:absolute flex overflow-auto ${active ? `w-full h-full z-[11]` : `w-1/2 h-1/2 z-10 justify-center items-center overflow-hidden`} ${showChildren ? `${newBg}` : ` ${containerClass}`} absolute transition-all duration-300}`}
    >
      <span className={`${active ? `hidden` : `flex`} absolute top-0 left-0 flex text-center items-center w-full h-full justify-center z-1 text-xl opacity-20 f50 max-h-[560px]`}>{capital}</span>
      <AiOutlineClose
        onClick={(e) => {
          e.stopPropagation();
          setActive(false);
        }}
        className={`absolute top-5 right-5 text-4xl z-10 ${showChildren ? 'text-black' : 'text-white'} font-bold cursor-pointer opacity-0 transition-opacity duration-300 ${active ? 'flex opacity-100' : 'hidden z-9'}`}
      />
      <h1 className={`z-10 text-6xl text-blue-800 font-bold flex-col justify-center text-center items-center ${active ? `hidden`: `flex`}`}>
        <IconRenderer type="fa" classes="fa50 text-blue-950" iconName={icon} setcolor="black"/>
        {text}
      </h1>
      <div className={`overflow-auto py-5 flex-col justfy-center h-screen  container-fluid mx-auto w-full ${active ? `flex`: `hidden` }  `}>
        <div className="container mx-auto">
          {showChildren && children}
        </div>
      </div>

    </div>
  );
};

export default ReusableComponent;
