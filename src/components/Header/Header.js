import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons , Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <Link href="/" >
    <legacyBehavior style={{display:'flex', alignItems:'center', color:'white' , marginBottom:'20px'}}>
    <DiCssdeck size='3rem'/> <Span >Portfolio</Span>

    </legacyBehavior>
    
    </Link>
    </Div1>

    <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>        
    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>        
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/Mahmoud412' >
    <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/mahmoud-ashour-69a28321a/' >
    <AiFillLinkedin size='3rem' />
    </SocialIcons>
    <SocialIcons href='https://www.facebook.com/mahmoudoda11?mibextid=LQQJ4d' >
    <AiFillFacebook size='3rem' />
    </SocialIcons>
  </Div3>
  </Container>
);

export default Header;
