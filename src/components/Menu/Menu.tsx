import React, { FC, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import './Menu.css';

interface MenuProps {
}

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substr(1).replace(/-/g, ' ');;

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollspy = (ids: string[], offset: number = 0) => {
   const [activeId, setActiveId] = useState("");
 
   useLayoutEffect(() => {
     const listener = () => {
       const scroll = window.pageYOffset;
 
       const position = ids
         .map((id) => {
           const element = document.getElementById(id);
 
           if (!element) return { id, top: -1, bottom: -1 };
 
           const rect = element.getBoundingClientRect();
           const top = clamp(rect.top + scroll - offset);
           const bottom = clamp(rect.bottom + scroll - offset);
 
           return { id, top, bottom };
         })
         .find(({ top, bottom }) => isBetween(scroll, top, bottom));
 
       setActiveId(position?.id || "");
     };
 
     listener();
 
     window.addEventListener("resize", listener);
     window.addEventListener("scroll", listener);
 
     return () => {
       window.removeEventListener("resize", listener);
       window.removeEventListener("scroll", listener);
     };
   }, [ids, offset]);
 
   console.log('active id ', activeId);
   return activeId;
 };
 

 const scroll = (e: any, id: string) => {
   e.preventDefault();
   const section = document.querySelector(`#${id}`);
   if(section)
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
 };


const Menu: FC<MenuProps> = () => { 
   const ids = ["about-me", "skills", "experience", "contact-me"];
   const activeId = useScrollspy(ids, 86);


   return (
      <ul className='menu'>
         {ids.map((id) => (
            <li key={`menu-item-${id}`} className="menu-item">
               <a
               href={`#${id}`}
               className={clsx(
                  "btn",
                  id === activeId && "menu-link-active"
               )}

               onClick={(event) => scroll(event, id)}
               >
               {capitalize(id)}
               </a>
            </li>
         ))}
      </ul>
   )
};

export default Menu;
