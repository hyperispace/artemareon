import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

/* eslint-disable react/prop-types */
const CommonImage = ({ src, width, height, classes }) => {
  const imageRef = useRef(null);
  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.set(imageRef.current, { x: '-50%', y: '0%', opacity: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      })
      // .set({ x: '-50%', y: '0%', opacity: 0 })
      .to(imageRef.current, {
        x: '100%',
        y: '10%',
        scale: 2,
        transformOrigin: 'center',
        opacity: 1,
        duration: 3,
        ease: 'power1.inOut',
      });
  }, []);
  return (
    <img
      ref={imageRef}
      src={src}
      width={width}
      height={height}
      className={classes}
    />
  );
};

export default CommonImage;
