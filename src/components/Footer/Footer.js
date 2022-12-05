import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
    <LinkList>
    <LinkColumn>
    <LinkTitle>call</LinkTitle>
    <LinkItem href="tel: +7 995 567-54-93"> +7 995 567-54-93</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>what's app</LinkTitle>
    <LinkItem href="tel: +20 111 534 1463"> +20 111 534 1463</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:mahmoudashour219@gmail.com"> mahmoudashour219@gmail.com"</LinkItem>
    </LinkColumn>
    </LinkList>
    <SocialIconsContainer>
    <CompanyContainer>
    <Slogan>Innovating one project at a time</Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href='https://github.com/Mahmoud412' >
    <AiFillGithub size='3rem' />
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/mahmoud-ashour-69a28321a/' >
    <AiFillLinkedin size='3rem' />
    </SocialIcons>
  
    </SocialContainer>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
