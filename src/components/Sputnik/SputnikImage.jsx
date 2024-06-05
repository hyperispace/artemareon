import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '/assets/sputnik.png'; // Import the image
import './SputnikImage.css'; // Add any specific styles for this component

gsap.registerPlugin(ScrollTrigger);

const SputnikImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      // Create the animation timeline for the image
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: imageElement,
          start: 'top 80%', // Adjust this value as needed
          end: 'bottom top', // Adjust this value as needed
          scrub: true,
        },
      });

      // Set initial position and opacity of the image
      gsap.set(imageElement, { x: '-50%', opacity: 0.7 });

      // Animate the image to move from left to the center of the screen
      imgTl.to(imageElement, {
        x: '0%', // Stop in the center of the screen
        y: '0%', // Adjust if you need any vertical movement
        opacity: 1,
        duration: 5, // Adjust this value as needed
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <>
      <div ref={imageRef}>
        <img className='sputnik' src={image} alt='sputnik' />
        <p className='text-white'>Its beeps echoed worldwide</p>
      </div>
    </>
  );
};

export default SputnikImage;
