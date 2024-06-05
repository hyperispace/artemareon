import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dogimg from '/assets/spacedog.png';
import './LaikaImg.css';

gsap.registerPlugin(ScrollTrigger);

const LaikaImg = () => {
  const laikaRef = useRef(null);

  useEffect(() => {
    const laika = laikaRef.current;

    // Set initial position of the image outside the screen on the right
    gsap.set(laika, { opacity: 1 });

    // Create a timeline for the image animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: laika,
          start: '90% bottom',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      })
      .to(laika, {
        duration: 2.5,
        opacity: 0,
        ease: 'none',
      });
  }, []);

  return (
    <img
      ref={laikaRef}
      className='laika-img'
      src={dogimg}
      alt='Laika the dog'
    />
  );
};

export default LaikaImg;
