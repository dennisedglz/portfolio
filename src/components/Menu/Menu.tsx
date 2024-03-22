import React, { FC } from 'react';
import './Menu.css';

interface MenuProps {}

const Menu: FC<MenuProps> = () => (
   <ul className='menu'>
      <li className='menu-item'>
         <a className='btn active'>About Me</a>
      </li>
      <li className='menu-item'>
         <a className='btn'>Skills</a>
      </li>
      <li className='menu-item'>
         <a className='btn'>Experience</a>
      </li>
      <li className='menu-item'>
         <a className='btn'>Contact Me</a>
      </li>
   </ul>
);

export default Menu;
