import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';

const Section3_2 = () => {
  const imageRef = useRef(null);
  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.set(imageRef.current, {
      top: '33%',
      right: '-24%',
      opacity: 0,
    });
    gsap
      .timeline({
        scrollTrigger: {
          markers: true,
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: true,
        },
      })
      .to(imageRef.current, {
        top: '33%',
        right: '9%',
        scale: 2,
        transformOrigin: 'right center',
        opacity: 1,
        duration: 3,
        ease: 'power1.inOut',
      });
  }, []);
  return (
    <>
      <div className='panel relative w-full h-full grid grid-rows-[4rem_1fr] grid-cols-2'>
        <div className='col-span-2'>
          <SubHeadings title='Valentina Tereshkova: The First Woman in Space' />
        </div>
        <div className='w-[30vw] h-full flex justify-start items-start absolute left-[10vw] top-[20vh]'>
          <div className='w-[30vw]'>
            <InfoBox
              title='Valentina Tereshkova'
              text='On June 16, 1963, Valentina Tereshkova, a Soviet cosmonaut, became the first woman to travel into space. Her mission aboard Vostok 6 was a significant achievement in the history of space exploration and women&#39;s role in science and technology. Vostok 6 launched from Baikonur Cosmodrome, It carried Tereshkova into orbit for a solo flight lasting nearly three days and orbited Earth 48 times.Tereshkova&#39;s call sign was "Chaika" (Seagull), and her flight was a major milestone for women in space.'
            />
          </div>
        </div>
        <img
          ref={imageRef}
          src='./assets/Valentina.jpg'
          width='180px'
          height='240px'
          className='absolute rounded-lg'
        />
      </div>
    </>
  );
};

export default Section3_2;
