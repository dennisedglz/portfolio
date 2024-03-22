import React, { FC } from 'react';
import './Header.css';
import HeaderTypedTitle from './TypedTitle/Header/TypedTitle';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
   <header className='header' data-testid="Header">
      <div className='background-text'>
         <h2>Frontend Developer</h2>
      </div>
      <div className='centered-content'>
         <h1 className='title'>Hello! I'm Angélica Díaz González</h1>
         <HeaderTypedTitle></HeaderTypedTitle>
      </div>
   </header>
);

export default Header;
