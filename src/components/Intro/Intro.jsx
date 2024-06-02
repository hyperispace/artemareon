import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { familyPhoto, launching } from '../../constant/images';
import { useGSAP } from '@gsap/react';

const Intro = () => {
  const [isEntered, setIsEntered] = useState(false);
  const containerRef = useRef(null);
  const fullScreenVideoRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);
  const overlayRef = useRef(null);
  const introTimeline = useRef(gsap.timeline());
  const mainTimeline = useRef(gsap.timeline({ paused: true }));

  const handleStart = () => {
    mainTimeline.current.play();
  };

  useGSAP(() => {
    const fullScreenVideo = fullScreenVideoRef.current;

    introTimeline.current
      .fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.inOut',
          onStart: () => {
            // remove for sure
            document.body.classList.remove('overflow-hidden');
            // then add it back
            document.body.classList.add('overflow-hidden');
          },
        },
        '+=1',
      )

      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' },
        '-=0.5',
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.inOut' },
        '-=0.5',
      );

    mainTimeline.current
      .to([headingRef.current, buttonRef.current, paragraphRef.current], {
        opacity: 0,
      })
      .to(overlayRef.current, { opacity: 0 })
      .add(() => {
        fullScreenVideo.play();
      })
      .fromTo(
        containerRef.current,
        { y: '-100vh', x: '25vw', scale: 15 },
        { y: '0vh', x: '0vw', scale: 1, duration: 3, ease: 'power3.inOut' },
        '+=5',
      )
      .to(
        fullScreenVideo,
        { y: '6vh', x: '-1vw', duration: 1, scale: 0.2 },
        '-=1',
      )
      .to(containerRef.current, {
        // y: '200vh',
        // x: '-370vw',
        transformOrigin: '75% 29%',
        scale: 35,
        duration: 2,
        ease: 'power3.inOut',
        delay: 4,
      })
      .to(
        fullScreenVideo,
        {
          opacity: 0,
          // onComplete: () => {
          //   fullScreenVideo.pause();
          //   console.log('paused');
          // },
        },
        '-=1.9',
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          onComplete: () => {
            setIsEntered(true);
            document.body.classList.remove('overflow-hidden');
          },
        },
        '-=1',
      );
  }, []);

  return !isEntered ? (
    <section className='absolute top-0 left-0 h-screen w-full overflow-hidden z-[50] bg-black'>
      <div className='content absolute h-full w-full z-50 flex flex-col items-start justify-center p-14'>
        <h1
          ref={headingRef}
          className='py-5 px-10 rounded-md mb-4 text-7xl w-[16ch] text-green-500 font-bold leading-snug font-poppins'
        >
          The Beginning of a Giant Leap for Mankind
        </h1>
        <p
          ref={paragraphRef}
          className='w-[65ch] px-10 rounded-md text-[1.25rem] text-white tracking-wide leading-relaxed font-openSans'
        >
          Let&lsquo;s take one small step for man, and one giant leap for
          mankind, as we venture into the vast expanse of outer space together.
          Join us as we scroll through space history, from the early days of
          space flight to the visionary plans for interplanetary travel!
        </p>
        <button
          ref={buttonRef}
          className='bg-[#FFFFFF] py-3 px-10 rounded-md font-medium text-[#1A1C48] text-[1.5rem] mt-8 self-end hover:text-white hover:bg-transparent border border-white'
          onClick={handleStart}
        >
          Start Journey
        </button>
      </div>
      <div
        ref={overlayRef}
        className=' bg-black/70 absolute h-full w-full z-30'
      ></div>
      <div className='absolute h-screen w-full -z-10'>
        <video
          className='h-full w-full object-cover'
          ref={fullScreenVideoRef}
          src={launching}
          type='video/mp4'
          // loop={false}
        />
      </div>
      <div
        ref={containerRef}
        className='absolute w-full h-full overflow-hidden'
      >
        <img className='h-full w-full object-cover' src={familyPhoto} alt='' />
      </div>
    </section>
  ) : null;
};

export default Intro;
