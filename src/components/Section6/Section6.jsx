import React, { useRef } from 'react';
import { moon } from '../../constant/images';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Heading from '../common/Heading';
import InfoBox from '../common/InfoBox';

gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const moonRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const moon = moonRef.current;

    gsap.fromTo(
      headingRef.current,
      { x: '-300', opacity: 0 },
      {
        x: '100',
        opacity: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top bottom',
          end: 'bottom 20%',
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      moon,
      { y: '100vh', opacity: 0.5 },
      {
        y: '98vh',
        opacity: 1,
        scrollTrigger: {
          trigger: moon,
          start: 'top bottom',
          end: 'bottom 20%',
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <section className=' h-screen'>
      {/* <div className=' absolute flex justify-start h-full w-full'>
        <Heading title='Moon Landing' />
      </div> */}
      <h1
        className='heading font-starJedi  absolute flex justify-start h-full w-full mt-6'
        ref={headingRef}
      >
        Moon Landing
      </h1>
      <div className='w-[160vw] flex justify-center items-center'>
        <img
          ref={moonRef}
          className='h-full w-full object-cover'
          src={moon}
          alt='moon'
        />
      </div>
      <div>
        <div className=' w-full h-full flex justify-center items-start absolute right-[15vw] top-[30vh] z-10'>
          <div className=' w-[30vw]'>
            <InfoBox
              title='Moon Landing'
              text="On July 20, 1969, humanity achieved one of its greatest accomplishments when Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon. This historic event marked a monumental leap forward in space exploration and captivated the world's imagination.The Apollo 11 Moon landing remains one of humanity's most significant achievements, inspiring generations and pushing the boundaries of what is possible. The lessons learned from this mission continue to shape our understanding of space exploration and our place in the universe."
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '70px',
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%)',
        }}
      />
    </section>
  );
};

export default Section6;
