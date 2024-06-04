// Section5.js
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section8.css';
import Tesla from '../3d/Tesla/Tesla';
import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import PopUpText from '../common/PopUpText';

gsap.registerPlugin(ScrollTrigger);

const Section5 = () => {
  const sectionRef = useRef(null);

  return (
    <section className='background' ref={sectionRef}>
      <Heading title='Space Oddity' />
      <SubHeadings title="The Tesla Roadster's Journey Beyond Earth" />
      <Tesla />

      <div className=' w-full h-full flex justify-end items-start absolute right-[15vw] top-[35vh]'>
        <div className=' w-[40vw]'>
          <InfoBox
            title='Apollo 8'
            text="In February 2018, SpaceX, led by Elon Musk, launched a Tesla Roadster into space aboard the Falcon Heavy rocket. This symbolic gesture showcased SpaceX's capabilities and human ingenuity. The Roadster was placed in a heliocentric orbit, set to circle the Sun for millions of years, occasionally nearing Earth and Mars. While primarily symbolic, the mission hinted at the future of accessible space travel, including commercial space tourism. David Bowie's [Space Oddity] played on the car's stereo, adding to the mission's surreal nature."
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
