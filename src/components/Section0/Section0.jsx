import { useGSAP } from '@gsap/react';
import { rocketIcon } from '../../constant/images';
import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import { useRef } from 'react';
import gsap from 'gsap';

const Section0 = () => {
  const rocketIconRef = useRef(null);
  const startTimeline = useRef(gsap.timeline());

  useGSAP(() => {
    startTimeline.current
      .from(
        rocketIconRef.current,
        { opacity: 0, scale: 2, y: -50, duration: 1 },
        '+=1',
      )
      .to(rocketIconRef.current, {
        y: 300,
        duration: 1,
        scale: 0.3,
      })
      .to(rocketIconRef.current, { y: 250, repeat: -1, duration: 1 });
  });
  return (
    <div className='section02-background'>
      <div className=' flex flex-col justify-center'>
        <Heading title='Scroll Through Space History' />
        <SubHeadings title='From Early Days to Visionary Plans' />
      </div>
      <div
        ref={rocketIconRef}
        className=' absolute flex justify-center items-center h-full w-full z-40'
      >
        <img className=' w-64' src={rocketIcon} alt='' />
      </div>
    </div>
  );
};

export default Section0;
