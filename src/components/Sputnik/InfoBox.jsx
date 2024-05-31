import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './InfoBox.css';

gsap.registerPlugin(ScrollTrigger);

function InfoBox({ title, text }) {
  const textRef = useRef(null);

  useEffect(() => {
    const typetext = textRef.current;

    if (typetext) {
      // Split text into individual letters
      const letters = typetext.textContent.split('');
      // Empty the text element
      typetext.textContent = '';
      // Create span elements for each letter and hide them
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        typetext.appendChild(span);
      });

      // Create the typewriter animation timeline
      const typewriterTl = gsap.timeline({
        scrollTrigger: {
          trigger: typetext,
          start: 'top 75%', // Adjust this value for start
          end: 'bottom 60%', // Adjust this value for end
          scrub: true,
          //   markers: true,
        },
      });

      // Animate each letter to reveal them one by one
      const spans = typetext.querySelectorAll('span');
      spans.forEach((span, index) => {
        typewriterTl.to(
          span,
          {
            opacity: 1,
            duration: 0.5,
          },
          index * 0.09, // Adjust the delay to control the typing speed
        );
      });
    }
  }, []);

  return (
    <section className='typewriter-box'>
      <h2 className='typewriter-title'>{title}</h2>
      <p className='typewriter' ref={textRef}>
        {text}
      </p>
    </section>
  );
}

export default InfoBox;
