/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './SubHeadings.css';

const Heading = ({ title }) => {
  const subheadingsRef = useRef(null);

  useEffect(() => {
    const headingElement = subheadingsRef.current;

    if (headingElement) {
      gsap.fromTo(
        headingElement,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: headingElement,
            start: 'top 110%', // Adjust this value
            end: 'bottom top', // Adjust this value
            scrub: true,
            markers: false,
          },
        },
      );
    }
  }, []);

  return (
    <h3 className='sub-headings font-speedy' ref={subheadingsRef}>
      {title}
    </h3>
  );
};

export default Heading;
