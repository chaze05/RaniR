// components/TypedComponent.tsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedProps {
  strings: string[];
  classContainer:string;
}

const TypeBox: React.FC<TypedProps> = ({ strings,classContainer }) => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current!, options);

    return () => {
      typed.destroy(); // Cleanup Typed.js instance on component unmount
    };
  }, [strings]);

  return (
    <div className="text-center">
      <span className={`${classContainer}`} ref={typedElement}></span>
    </div>
  );
};

export default TypeBox;
