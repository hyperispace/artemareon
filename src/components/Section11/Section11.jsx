import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mars } from '../../constant/images';
import './Section11.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Section11 = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const videoElement = videoRef.current;
    const textElement = textRef.current;

    if (videoElement && textElement) {
      // Initially hide the text
      gsap.set(textElement, { autoAlpha: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: videoElement,
            start: 'top center',
            onEnter: () => {
              videoElement.play();
            },
            onLeaveBack: () => {
              videoElement.pause();
            },
          },
        })
        .to(videoElement, {
          duration: 42, // Duration of the video
          onComplete: () => {
            videoElement.muted = true;
            videoElement.pause();
            gsap.to(textElement, { autoAlpha: 1, duration: 1 }); // Show text when video finishes
          },
        });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='section11-background'>
      <div
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '30px',
          background:
            'linear-gradient(to bottom, rgba(149, 98, 48, 0.7), rgba(149, 98, 48, 0))',
          zIndex: 400,
        }}
      />

      <video
        ref={videoRef}
        className='h-full w-full object-cover'
        src={mars}
        type='video/mp4'
      />
      <div
        ref={textRef}
        className='hidden-text absolute h-full w-full flex justify-center items-center z-30'
      >
        This is the text that appears after the video finishes.
      </div>
    </section>
  );
};

export default Section11;
