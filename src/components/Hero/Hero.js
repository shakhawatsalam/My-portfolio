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
      <Button>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;