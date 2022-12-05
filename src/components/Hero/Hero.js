import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
  <LeftSection>
  <SectionTitle main center>
   Hello , I'm Mahmoud <br/>
   I'm React Native Developer 
  </SectionTitle>
  <SectionText>
  An innovative and fast-learning mobile app Developer with 1 year of experience building and maintaining responsive React native apps in the IT industry. Proficient in JavaScript, and API integration; plus modern libraries and frameworks. Passionate about usability, reusable components and possess working knowledge of Adobe XD, Figma.
  </SectionText>
    <Button onClick={()=>window.location='https://resume.io/r/dVxzXwHgt'}>Go To Resume</Button>
  </LeftSection>
 </Section>
);

export default Hero;