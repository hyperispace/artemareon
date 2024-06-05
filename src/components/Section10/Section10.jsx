// Section10.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../common/Heading';
import './Section10.css';
import MarsInfoText from './MarsInfoText';
import SubHeadings from '../common/SubHeadings';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Section10 = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const sectionElement = sectionRef.current;

    if (sectionElement) {
      gsap.fromTo(
        sectionElement,
        { backgroundColor: 'rgba(0, 0, 0, 0)' }, // Initial background color
        {
          backgroundColor: 'rgba(149, 98, 48, 0.9)', // Target background color
          duration: 0.3,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top 10%', // Adjust as needed
            end: '40% 20%', // Adjust as needed
            scrub: true,
            markers: false,
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
