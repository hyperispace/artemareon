import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

/* eslint-disable react/prop-types */
const CommonImage = ({ src, width, height }) => {
  const imageRef = useRef(null);
  useGSAP(() => {
    if (!imageRef.current) return;
    gsap
      .timeline({
        x: '10%',
        y: '0%',
        opacity: 0.7,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      })
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
  return <img ref={imageRef} src={src} width={width} height={height} />;
};

export default CommonImage;
