// Section5.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section5.css';
import Moon from '../3d/Moon/Moon';
import Earthrise from './earthrise.png';
import Apollo8 from './apollo8.webp';
import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import PopUpText from '../common/PopUpText';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);
  const earthRef = useRef(null);
  const apollo8Ref = useRef(null);

  useEffect(() => {
    if (earthRef.current)
      gsap.fromTo(
        earthRef.current,
        { x: window.innerWidth, y: window.innerHeight / 2 - 110, scale: 1 },
        {
          x: -window.innerWidth,
          duration: 30,
          repeat: -1,
          ease: 'linear',
          onUpdate: () => {
            const position = gsap.getProperty(earthRef.current, 'x');
            const midPoint = window.innerWidth / 2;
            const distanceToMidPoint = Math.abs(midPoint - position);
            const maxDistance = midPoint;
            const scale = 0.5 + 0.5 * (distanceToMidPoint / maxDistance); // Adjust the scale
            gsap.set(earthRef.current, { scale });
          },
        },
      );
  }, []);

  useEffect(() => {
    if (apollo8Ref.current)
      gsap.fromTo(
        apollo8Ref.current,
        { opacity: 6, scale: 1 },
        {
          opacity: 1,
          scale: 0.5,
          duration: 0.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: apollo8Ref.current,
            start: 'top 110%', // Adjust this value
            end: 'bottom top', // Adjust this value
            scrub: true,
            markers: false,
          },
        },
      );
  }, []);

  return (
    <section className='background' ref={sectionRef}>
      <Heading title='Circling the Moon' />
      <SubHeadings title='Paving the Way for Lunar Landing' />
      <img
        ref={earthRef}
        src={Earthrise}
        alt='Earthrise'
        style={{ width: '15%', position: 'absolute' }}
      />
      <Moon />
      <img
        ref={apollo8Ref}
        src={Apollo8}
        alt='Apollo 8'
        style={{
          width: '10%',
          position: 'absolute',
          marginTop: '20rem',
          marginLeft: '23rem',
        }}
      />
      <InfoBox
        title="Apollo 8"
        text="In December 1968, Apollo 8 carried the first humans around the Moon, with crew members Frank Borman, James Lovell, and William Anders. They were the first to see the Moon's far side. William Anders took the iconic [Earthrise] photo, showing Earth above the lunar horizon. This mission showcased NASA's capabilities and paved the way for the lunar landing."
      />
      <PopUpText text='We came all this way to explore the Moon, and the most important thing is that we discovered the Earth. — William Anders, Apollo 8 Astronaut' />
    </section>
  );
};

export default Section5;
