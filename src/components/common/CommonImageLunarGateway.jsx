import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

/* eslint-disable react/prop-types */
const CommonImageLunarGateway = ({
  src,
  width,
  height,
  classes,
  direction = 'left',
}) => {
  const imageRef = useRef(null);
  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.set(imageRef.current, {
      ...(direction === 'left'
        ? { x: '-50%', y: '0%' }
        : { x: '150%', y: '-10%' }),
      opacity: 0,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'center 20%',
          scrub: true,
        },
      })
      .to(imageRef.current, {
        ...(direction === 'left'
          ? { x: '100%', y: '10%' }
          : { x: '-100%', y: '-100%' }),

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

export default CommonImageLunarGateway;
