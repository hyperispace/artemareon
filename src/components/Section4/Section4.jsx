// Section4.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section4.css';
import Astronaut from '../3d/Astronaut/Astronaut';
import Earth from '../3d/Earth/Earth';
import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import PopUpText from '../common/PopUpText';

gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const sectionRef = useRef(null);

  return (
    <section className='background' ref={sectionRef}>
      <Heading title='A Historic First' />
      <SubHeadings title='Alexei Leonov: The First Human to Walk in Space' />
      <Earth style={{position: 'absolute'}}/>
      <Astronaut />
      <InfoBox
        title="First space walk"
        text="On March 18, 1965, Soviet cosmonaut Alexei Leonov became the first human to conduct a space walk, also known as an extravehicular activity (EVA). This historic event took place during the Voskhod 2 mission and marked a significant milestone in space exploration.Leonov exited the spacecraft through an inflatable airlock and spent approximately 12 minutes floating in space.Alexei Leonov's space walk opened new possibilities for space exploration. It showed that humans could work outside their spacecraft, a necessary capability for long-term space missions."
      />
    </section>
  );
};

export default Section4;
