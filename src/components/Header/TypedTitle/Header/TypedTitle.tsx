import React, { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';


interface HeaderTypedTitleProps {}

const HeaderTypedTitle: FC<HeaderTypedTitleProps> = () => (
   <h1 className='title'>A {" "}
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.8rem', display: 'inline-block' }}
      repeat={Infinity}
    />
   
    Developer</h1>
);

export default HeaderTypedTitle;
