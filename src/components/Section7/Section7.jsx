import React, { useRef } from 'react';
import { walking } from '../../constant/images';

const Section7 = () => {
  const walkingVideoRef = useRef(null);
  return (
    <>
      <div className='absolute h-screen w-full z-20'>
        <video
          className='h-full w-full object-cover'
          ref={walkingVideoRef}
          src={walking}
          type='video/mp4'
          autoPlay
          muted
          loop={true}
        />
      </div>
    </>
  );
};

export default Section7;
