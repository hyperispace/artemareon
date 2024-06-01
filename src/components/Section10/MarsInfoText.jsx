import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './MarsInfoText.css';

function MarsInfoText() {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    const text = textRef.current;

    if (title && text) {
      // Define the typewriter animation for the title
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: true,
        },
      });

      // Define the typewriter animation for the text
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: true,
        },
      });

      // Split title text into individual letters
      const titleLetters = title.textContent.split('');
      title.textContent = ''; // Empty the title element

      // Create spans for each letter in the title
      titleLetters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        title.appendChild(span);

        // Add animation to reveal each letter
        titleTimeline.to(span, {
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        });
      });

      // Split text into individual letters
      const textLetters = text.textContent.split('');
      text.textContent = ''; // Empty the text element

      // Create spans for each letter in the text
      textLetters.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        text.appendChild(span);

        // Add animation to reveal each letter
        textTimeline.to(span, {
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        });
      });
    }
  }, []);

  return (
    <>
      <h2 className='mars-title' ref={titleRef}>
        The Ultimate Goal of Interplanetary Exploration
      </h2>
      <p className='mars-text' ref={textRef}>
        Future missions to Mars will require advanced life support systems to
        provide astronauts with air, water, and food for the duration of their
        journey and stay on the Red Planet. The pursuit of Mars exploration
        captures the imagination of people of all ages and backgrounds,
        inspiring future scientists, engineers, and explorers to push the
        boundaries of human knowledge and achievement. Landing a human on Mars
        represents the pinnacle of human space exploration, a monumental
        achievement that has captured the imagination of generations. While
        incredibly challenging, this ambitious goal is within reach thanks to
        advancements in technology, international collaboration, and the
        pioneering spirit of humanity. Despite the progress made in space
        exploration, landing humans on Mars remains an immensely challenging
        endeavor. From radiation exposure to the psychological effects of
        long-duration spaceflight. Crewed missions to Mars will involve
        spacecraft designed to support astronauts for months or even years in
        the harsh environment of deep space. Communication delays between Earth
        and Mars can range from several minutes to over 20 minutes, making
        real-time control of missions impossible.
      </p>
    </>
  );
}

export default MarsInfoText;
