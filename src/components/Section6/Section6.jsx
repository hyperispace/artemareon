import React, { useRef } from 'react';
import { moon } from '../../constant/images';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const moonRef = useRef(null);

  useGSAP(() => {
    const moon = moonRef.current;

    gsap.fromTo(
      moon,
      { y: '100vh', opacity: 0.5 },
      {
        y: '98vh',
        opacity: 1,
        scrollTrigger: {
          trigger: moon,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section>
      <div className='w-[160vw] flex justify-center items-center'>
        <img
          ref={moonRef}
          className='h-full w-full object-cover'
          src={moon}
          alt='moon'
        />
      </div>
    </section>
  );
};

export default Section6;
