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
          end: 'bottom center', // Adjust this value as needed
          scrub: true,
        },
      });

      // Set initial position and opacity of the image
      gsap.set(imageElement, { x: -10, y: 10, opacity: 0.4 });

      // Animate the image to move from left to the center of the screen
      imgTl.to(imageElement, {
        x: '60%', // Stop in the center of the screen
        y: 10, // Adjust if you need any vertical movement
        opacity: 1,
        duration: 1, // Adjust this value as needed
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <>
      <div ref={imageRef}>
        <img className='sputnik' src={image} alt='sputnik' />
        <p className='text-white ml-24 blink'>Its beeps echoed worldwide</p>
      </div>
    </>
  );
};

export default SputnikImage;
