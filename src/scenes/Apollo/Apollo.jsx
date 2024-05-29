import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Lunar from '../../components/Lunar';
const Apollo = () => {
  const apolloRef = useRef(null);
  const lunarRef = useRef(null);

  useGSAP(
    () => {
      const lunarTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: lunarRef.current,
          start: 'top top',
          end: `bottom top`,
          pin: apolloRef.current,
          scrub: true,
          id: 'lunar',
        },
      });
      lunarTimeline
        .to(lunarRef.current, {
          scale: 2,
        })
        .to(lunarRef.current, {
          y: '100px',
        })
        .to(lunarRef.current, {
          y: '1000%',
          scaleX: 30,
          scaleY: 10,
          transformOrigin: 'top',
        });
    },
    { dependencies: [] },
  );

  return (
    <div
      ref={apolloRef}
      className='w-full h-full flex flex-col items-center p-4'
    >
      <Lunar ref={lunarRef} />
    </div>
  );
};

export default Apollo;
