import { mars } from '../../constant/images';
import './Section11.css';
import marsimg from '/assets/mars-surface.png';

const Section11 = () => {
  return (
    // <section className='section11-background'>
    //   <img className='mars-surface' src={marsimg} alt='mars surface' />
    // </section>
    <>
      <div className='absolute h-screen w-full z-20'>
        <video
          className='h-full w-full object-cover'
          // ref={walkingVideoRef}
          src={mars}
          type='video/mp4'
          autoPlay
          muted
          loop={true}
        />
      </div>
    </>
  );
};

export default Section11;
