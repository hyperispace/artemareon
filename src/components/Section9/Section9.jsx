import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import PopUpText from '../common/PopUpText';
import InfoBox from '../common/InfoBox';
import CommonImageLunarGateway from '../common/CommonImageLunarGateway';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Section9 = () => {
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
      <div className='panel relative w-full h-full flex flex-col pt-5 items-start justify-between'>
        <div>
          <Heading title='Lunar Gateway' />
          <SubHeadings title='Building the Infrastructure for Interplanetary Travel' />
        </div>
        <div className=' w-full h-full flex justify-end items-start absolute right-[10vw] top-[30vh]'>
          <div className=' w-[30vw]'>
            <InfoBox
              title='Lunar Gateway'
              text='Is a planned space station that will orbit the Moon, serving as a staging point for lunar exploration and as a gateway to deep space destinations like Mars. It will be assembled in lunar orbit over several missions.Crewed missions to Lunar Gateway will enable astronauts to conduct lunar surface expeditions, test technologies for future Mars missions, and explore the Moon&#39;s unique environment, including its resources and potential for sustained habitation'
            />
          </div>
        </div>
        <img
          ref={imageRef}
          src='./assets/lunargateway.png'
          width='180px'
          height='240px'
          className='absolute rounded-lg'
        />
        {/* <CommonImageLunarGateway
          width='200px'
          height='200px'
          src='./assets/lunargateway.png'
        /> */}
        {/* <PopUpText text='Towards a Multi-Planetary Future' /> */}
      </div>
    </>
  );
};

export default Section9;
