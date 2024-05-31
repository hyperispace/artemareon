// PopUpText.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PopUpText.css';

gsap.registerPlugin(ScrollTrigger);

function PopUpText({ text }) {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bubbleElement = bubbleRef.current;

    if (bubbleElement) {
      gsap.fromTo(
        bubbleElement,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: bubbleElement,
            start: 'top 70%', // Adjust this value to control when the fade starts
            end: 'top 50%', // Adjust this value as needed
            scrub: true,
            markers: true,
            onEnter: () =>
              gsap.to(bubbleElement, { opacity: 1, duration: 0.5 }),
            onLeave: () =>
              gsap.to(bubbleElement, { opacity: 0, duration: 0.5 }),
            onEnterBack: () =>
              gsap.to(bubbleElement, { opacity: 1, duration: 0.5 }),
            onLeaveBack: () =>
              gsap.to(bubbleElement, { opacity: 0, duration: 0.5 }),
          },
        },
      );
    }
  }, []);

  return (
    <div className='bubble' ref={bubbleRef}>
      <p className='bubble-text'>{text}</p>
    </div>
  );
}

export default PopUpText;
