import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi <br />
        I AM <span>
          <Typewriter
            words={['SHAKHAWAT SALAM', 'Front-end-developer', 'React.js developer']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={55}
            deleteSpeed={50}
            delaySpeed={2000}
          // onLoopDone={handleDone}
          // onType={handleType}
          />
        </span>
      </SectionTitle>
      <SectionText>I am a junior web developer with experience in HTML, CSS, JavaScript, ES6, React, Tailwind CSS, and Firebase Authentication, and comfortable with Node.js, MongoDB, Express.js, Axios, React Query, TypeScript, JWT Token, Stripe, Heroku, CURD.
      </SectionText>
      <a href={'https://drive.google.com/uc?export=download&id=1-twY7dX9Y5e0_2Ay0gU4zK1mt38ZqrFs'} download><Button>Resume</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;

// https://drive.google.com/uc?export=download&id=1Anj2EqiT2WCMZFcMN8Avu06rD2weUnBE