// Section5.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section5.css';
import Moon from '../3d/Moon/Moon';
import Earth from '../3d/Earth/Earth';
import Tesla from '../3d/Tesla/Tesla';
import Earthrise from '../3d/Earth/earthrise.png';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);
  const earthRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      earthRef.current,
      { x: window.innerWidth, y: window.innerHeight / 2 - 50, scale: 1 },
      {
        x: -window.innerWidth,
        duration: 30,
        repeat: -1,
        ease: 'linear',
        onUpdate: () => {
          const position = gsap.getProperty(earthRef.current, "x");
          const midPoint = window.innerWidth / 2;
          const distanceToMidPoint = Math.abs(midPoint - position);
          const maxDistance = midPoint;
          const scale = 0.5 + 0.5 * (distanceToMidPoint / maxDistance); // Adjust the scale
          gsap.set(earthRef.current, { scale });
        }
      }
    );
  }, []);

  return (
    <section className='background' ref={sectionRef}>
      {/* <Earth ref={earthRef} style={{position: 'absolute'}}/> */}
            <img
        ref={earthRef}
        src={Earthrise}
        alt='Earthrise'
        style={{ width: '10%'}}
      />
      <Moon />
      {/* <Tesla /> */}
    </section>
  );
};

export default Section5;
