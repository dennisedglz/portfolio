import React, { FC } from 'react';
import './Header.css';
import HeaderTypedTitle from './TypedTitle/Header/TypedTitle';

import { animated, useScroll, useSpring } from '@react-spring/web';


import { useTrail, a } from '@react-spring/web'


interface HeaderProps {}

const Trail: React.FC<{ open: boolean, children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index}  style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const Header: FC<HeaderProps> = () => {
   const props = useSpring({
      from: '#d3d2ca',
      to: '#bbd7e2',
      delay: 2000
    });


    const [{ background }] = useSpring(
      () => ({
        from: { background: 'var(--step0)' },
        to: [
          { background: 'var(--step1)' },
          { background: 'var(--step4)' },
          { background: 'var(--step1)' },
          { background: 'var(--step4)' },
        ],
        config: {tension: 280, friction: 120},
        loop: {
          reverse: true,
        },
      }),
      []
    )

   return (
      <>      
      <header className='header' data-testid="Header">
         
         <animated.div className="background-text" style={{ background }}>
            <h2>Frontend Developer</h2>
         </animated.div>
         
         <div className='centered-content'>
            <h1 className='title'>Hello! I'm Angélica Díaz González</h1>
            <HeaderTypedTitle></HeaderTypedTitle>
         </div>
      </header>
      </>

   )
};

export default Header;

