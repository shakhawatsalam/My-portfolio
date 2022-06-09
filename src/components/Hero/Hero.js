import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi <br />
        I AM React.js developer
      </SectionTitle>
      <SectionText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ex quasi quam. Excepturi voluptatibus illo explicabo quo provident minus deserunt.
      </SectionText>
      <a href={'https://drive.google.com/file/d/1-twY7dX9Y5e0_2Ay0gU4zK1mt38ZqrFs/view?usp=sharing'} target={"_blank"} download='SHAKHAWAT SALAM (1).pdf'><Button>Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;