import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '/assets/sputnik.png'; // Import the image
import './SputnikImage.css'; // Add any specific styles for this component

gsap.registerPlugin(ScrollTrigger);

function SputnikImage() {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      // Create the image animation timeline
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageElement,
          start: 'top 80%', // Adjust this value as needed
          end: 'bottom 20%', // Adjust this value as needed
          scrub: true,
          //   markers: true,
        },
      });

      // Set initial position and opacity of the image
      gsap.set(imageElement, { x: '-200%', y: '0%', opacity: 0.7 });

      // Animate the image to move from left to right and slightly downwards
      imgTl.to(imageElement, {
        x: '720%', // Move from left to right across the screen
        y: '30%', // Move down by 50% of its initial position
        opacity: 1,
        duration: 3,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return <img className='sputnik' ref={imageRef} src={image} alt='sputnik' />;
}

export default SputnikImage;
