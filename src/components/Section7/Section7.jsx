import { useRef } from 'react';
import { walking } from '../../constant/images';

import InfoBox from '../common/InfoBox';
import MoonWalk from '../common/MoonWalk';
import Walkimg from './MoonWalk.png';

const Section7 = () => {
  const walkingVideoRef = useRef(null);
  return (
    <>
      <div className=' h-screen w-full'>
        <div
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '90px',
            background:
              'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 90%)',
            zIndex: 400,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '70px',
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 80%)',
          }}
        />
        <video
          className='absolute top-0 left-0 h-full w-full object-cover'
          ref={walkingVideoRef}
          src={walking}
          type='video/mp4'
          autoPlay
          muted
          loop={true}
        />

        <div className=' flex  items-center justify-start absolute pl-20 w-[40vw]  top-[50vh] '>
          <div>
            <InfoBox
              title='Walking on the Moon'
              text='The first steps. Neil Armstrong descended the ladder of the lunar module and stepped onto the lunar surface, uttering the iconic words, That’s one small step for a man, one giant leap for mankind.’ The success of Apollo 11 laid the foundation for future space explorations, endeavors including the construction of space stations, robotic exploration of other planets, and plans for human missions to Mars.'
            />
          </div>
        </div>
        <div className=' flex justify-center pt-[400px] pl-[500px] opacity-80'>
          <MoonWalk
            width='230px'
            height='440px'
            src={Walkimg}
            classnames='flex items-center justify-center w-[30vw] h-[40vh]'
          />
        </div>
      </div>
    </>
  );
};

export default Section7;
