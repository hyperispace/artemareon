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
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: headingElement,
            start: 'top center', // Adjust this value
            end: 'bottom top', // Adjust this value
            scrub: 1,
            markers: false,
          },
        },
      );
    }
  }, []);

  return (
    <h1 className='heading font-starJedi' ref={headingRef}>
      {title}
    </h1>
  );
};

export default Heading;
