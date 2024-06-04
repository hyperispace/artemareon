import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StarWarsText.css';

function StarWarsText() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const content = textRef.current.querySelector('.section02-content');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        markers: true,
      },
    });

    tl.to(content, {
      y: '-120%',
      duration: 4,
    });
  }, []);

  return (
    <section className='section02-crawl' ref={textRef}>
      <div className='section02-content'>
        <h2 className='section02-subtitle'>
          Laika, from Stray Dog to Space Dog
        </h2>
        <p>
          Following the success of Sputnik 1, the Soviet Union launched Sputnik
          2 on November 3, 1957. This mission carried the first living being
          into space, a dog named Laika, marking another significant milestone
          in space exploration.
        </p>
        <p>
          Laika became the first animal to orbit Earth, paving the way for human
          spaceflight. Sputnik 2 included systems to provide oxygen, manage
          temperature, and remove carbon dioxide. These innovations were
          critical for maintaining life in the harsh environment of space.
        </p>
        <p>
          Laika's journey provided invaluable data on the effects of space
          travel on living organisms. Although her mission was brief, the
          information gathered helped scientists understand the physiological
          and psychological challenges faced by astronauts in space. This data
          played a crucial role in the development of life support systems and
          protocols for future manned missions.
        </p>
        <p>
          Unfortunately, Laika did not survive the mission, highlighting the
          risks and challenges of early space exploration. Her sacrifice,
          however, contributed valuable data to the understanding of space
          travel and the development of life support systems for future
          missions.
        </p>
      </div>
    </section>
  );
}

export default StarWarsText;
