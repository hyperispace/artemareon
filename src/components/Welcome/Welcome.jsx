import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Welcome = ({ clicking }) => {
  const [isEntered, setIsEntered] = useState(false);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);

  const handleStart = () => {
    clicking(true);
    setIsEntered(true);
    document.body.classList.remove('overflow-hidden');
  };

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        headingRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' },
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' },
        '-=0.5',
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut' },
        '-=0.5',
      );
  }, []);

  return !isEntered ? (
    <section className='fixed w-full h-full flex flex-col gap-32 justify-start items-center text-white bg-[url("/assets/welcome.webp")] bg-no-repeat bg-cover bg-center pt-28  text-center z-50 top-0'>
      <h1 ref={headingRef} className='bg-[#1A1C48]/70 py-5 px-10 rounded-md'>
        The Beginning of a Giant Leap for Mankind
      </h1>
      <button
        ref={buttonRef}
        className='bg-[#FFFFFF] py-3 px-10 rounded-md text-[#1A1C48] text-[1.875rem]'
        onClick={handleStart}
      >
        Start
      </button>
      <p
        ref={paragraphRef}
        className='w-[42rem] bg-[#1A1C48]/70 py-5 px-10 rounded-md text-[1.25rem]'
      >
        Let&lsquo;s take one small step for man, and one giant leap for mankind,
        as we venture into the vast expanse of outer space together. Join us as
        we scroll through space history, from the early days of space flight to
        the visionary plans for interplanetary travel!
      </p>
    </section>
  ) : null;
};

export default Welcome;
