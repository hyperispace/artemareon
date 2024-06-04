// Section10.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../common/Heading';
import './Section10.css';
import MarsInfoText from './MarsInfoText';
import SubHeadings from '../common/SubHeadings';

gsap.registerPlugin(ScrollTrigger);

const Section10 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      gsap.fromTo(
        sectionElement,
        { backgroundColor: 'rgba(0, 0, 0, 0)' }, // Initial background color
        {
          backgroundColor: 'rgba(193, 68, 14, 0.5)', // Target background color
          duration: 0.3,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top 100%', // Adjust as needed
            end: '40% 10%', // Adjust as needed
            scrub: true,
            markers: true,
          },
        },
      );
    }
  }, []);

  return (
    <section className='background' ref={sectionRef}>
      <Heading title='The Red Frontier' />
      <SubHeadings title='Landing Humans on Mars' />

      <MarsInfoText />
    </section>
  );
};

export default Section10;
