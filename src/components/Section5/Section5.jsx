// Section5.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section5.css';
import Moon from '../3d/Moon/Moon';
import Earth from '../3d/Earth/Earth';
import Earthrise from './earthrise.png';
import Apollo8 from './apollo8.webp';
import Heading from '../common/Heading';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);
  const earthRef = useRef(null);
  const apollo8Ref = useRef(null);

  useEffect(() => {
    if (earthRef.current)
    gsap.fromTo(
      earthRef.current,
      { x: window.innerWidth, y: window.innerHeight / 2 - 50, scale: 1 },
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
        { opacity: 6, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
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
      {/* <Earth ref={earthRef} style={{position: 'absolute'}}/> */}
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
        style={{ width: '10%', position: 'absolute', marginTop: '20rem', marginLeft: '20rem'}}
      />
    </section>
  );
};

export default Section5;
