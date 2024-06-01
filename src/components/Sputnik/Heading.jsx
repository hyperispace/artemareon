/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Heading.css';

const Heading = ({ title }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const headingElement = headingRef.current;

    if (headingElement) {
      gsap.fromTo(
        headingElement,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: headingElement,
            start: 'top 110%', // Adjust this value
            end: 'bottom top', // Adjust this value
            scrub: true,
            markers: true,
          },
        },
      );
    }
  }, []);

  return (
    <h1 className='sputnik-heading' ref={headingRef}>
      {title}
    </h1>
  );
};

export default Heading;
