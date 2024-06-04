import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';

const Section3_1 = () => {
  const imageRef = useRef(null);
  useGSAP(() => {
    if (!imageRef.current) return;
    gsap.set(imageRef.current, {
      top: '47%',
      left: '0%',
      opacity: 0,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: true,
        },
      })
      .to(imageRef.current, {
        top: '47%',
        left: '17%',
        scale: 2,
        transformOrigin: 'center',
        opacity: 1,
        duration: 2,
        ease: 'power1.inOut',
      });
  }, []);
  return (
    <>
      <div className='panel relative w-full h-full grid grid-rows-[12rem_1fr] grid-cols-2'>
        <div className='col-span-2'>
          <Heading title='Pioneers of Space' />
          <SubHeadings title='Yuri Gagarin: The First Human in Space' />
        </div>
        <div className=' w-full h-full flex justify-end items-start absolute right-[8vw] top-[34vh]'>
          <div className='w-[30vw]'>
            <InfoBox
              title='Yuri Gagarin'
              text='On April 12, 1961, Yuri Gagarin, a Soviet cosmonaut, made history by becoming the first human to journey into outer space. His mission aboard Vostok 1 was a major milestone in the space race. Vostok 1 lifted off from the Baikonur Cosmodrome. Gagarin&#39;s historic flight lasted 108 minutes, completing one orbit around Earth.As Vostok 1 launched, Gagarin famously exclaimed, "Poyekhali!" (Let&#39;s go!). These words became iconic, symbolizing the beginning of human space exploration.'
            />
          </div>
        </div>
        <img
          ref={imageRef}
          src='./assets/Gagarin.jpg'
          width='180px'
          height='240px'
          className='absolute rounded-lg'
        />
      </div>
    </>
  );
};

export default Section3_1;
