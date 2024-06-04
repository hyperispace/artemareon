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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoElement,
          start: 'top center', // Adjust as needed
        },
      });

      // Add video play action to timeline
      tl.add(() => {
        videoElement.play();
      }).to(videoElement, {
        duration: 39, // Duration of the video
        onComplete: () => {
          videoElement.muted = true;
          videoElement.pause();
          gsap.to(textElement, { autoAlpha: 1, duration: 1 }); // Show text when video finishes
        },
      });

      // Initially hide the text
      gsap.set(textElement, { autoAlpha: 0 });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className='section11-background'>
      <video
        ref={videoRef}
        className='h-full w-full object-cover'
        src={mars}
        type='video/mp4'
        muted
        // playsInline
        autoPlay
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
