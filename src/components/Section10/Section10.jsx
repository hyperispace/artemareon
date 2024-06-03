// Section10.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../common/Heading';
import './Section10.css';
import MarsInfoText from './MarsInfoText';

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
          backgroundColor: 'rgba(193, 68, 14, 0.7)', // Target background color
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionElement,
            start: 'top bottom', // Adjust as needed
            end: 'bottom center', // Adjust as needed
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
      <MarsInfoText />
    </section>
  );
};

export default Section10;
