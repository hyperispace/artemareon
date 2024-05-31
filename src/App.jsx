import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
import { IoMdRocket } from 'react-icons/io';

import './App.css';
import Sample from './components/Sample';
import Sputnik from './components/Sputnik/Sputnik';
import StarsCanvas from './components/StarsCanvas';
import Welcome from './components/Welcome';
import { useRef } from 'react';
/**
 * Push your sections into this array
 * `classes`: section specific class name
 * `component`: the content component to put in section
 *    component itself doesn't need `<section>` element,
 *    cause we'll have this component wrapped into a `<section>` element.
 *    e.g. the <Sample /> component
 */
const sections = [
  {
    title: 'Event 1',
    isEvent: false,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Pre Section</>,
  },
  {
    title: "Humanity's First Artificial Satellite",
    isEvent: true,
    classes: 'relative border-[1px] flex flex-col items-start',
    component: <Sputnik />,
  },
  {
    title: 'Event 2',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center h-[200vh]',
    component: <>Event 2</>,
  },
  {
    title: 'Event 3',
    isEvent: true,
    classes:
      'bg-gray-900 flex flex-col justify-center items-center bg-black text-white',
    component: <Sample />,
  },
  {
    title: 'Event 4',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Event 4</>,
  },
  {
    title: 'Event 5',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Event 5</>,
  },
  {
    title: 'Event 6',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Event 6</>,
  },
  {
    title: 'The Lunar',
    isEvent: true,
    timeline_picture: './assets/timeline-lunar.png',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>The Lunar</>,
  },
  {
    title: 'Event 8',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Event 8</>,
  },
  {
    title: 'Event 9',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Event 9</>,
  },
  {
    title: 'Event 10',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Event 10</>,
  },
  {
    title: 'The Mars',
    isEvent: true,
    timeline_picture: './assets/timeline-mars.png',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>The Mars</>,
  },
].map((section, index) => ({ ...section, id: index }));

const generateSectionId = (index) => `section_${index}`;

gsap.registerPlugin(ScrollTrigger, Draggable);

const App = () => {
  const trackRef = useRef(null);

  useGSAP(
    () => {
      if (!trackRef.current) return;

      const track = document.querySelector('[data-draggable]');
      const navLinks = gsap.utils.toArray('[data-link]');

      const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;

      const getUseableHeight = () =>
        document.documentElement.offsetHeight - window.innerHeight;

      const getDraggableWidth = () => {
        return track.offsetWidth * 0.5 - lastItemWidth();
      };

      const updatePosition = () => {
        const left = track.getBoundingClientRect().left * -1;
        const width = getDraggableWidth();
        const useableHeight = getUseableHeight();
        const y = gsap.utils.mapRange(0, width, 0, useableHeight, left);

        st.scroll(y);
      };

      /* Create the timeline to move the track */
      const tl = gsap.timeline().to(track, {
        x: () => getDraggableWidth() * -1,
        ease: 'none', // remove easing - very important!
      });

      /* Create the ScrollTrigger instance */
      const st = ScrollTrigger.create({
        animation: tl,
        scrub: 0, // sync timeline to scroll position
      });

      /* Create the Draggable instance */
      Draggable.create(track, {
        type: 'x',
        inertia: true,
        bounds: {
          minX: 0,
          maxX: getDraggableWidth() * -1,
        },
        edgeResistance: 1,
        onDragStart: () => st.disable(),
        onDragEnd: () => st.enable(),
        onDrag: updatePosition,
        onThrowUpdate: updatePosition,
      });

      /* Allow navigation via keyboard */
      track.addEventListener('keyup', (e) => {
        console.log(e);
        const id = e.target.getAttribute('href');
        if (!id || e.key !== 'Tab') return;

        const section = document.querySelector(id);
        const y = section.getBoundingClientRect().top + window.scrollY;

        st.scroll(y);
      });
    },
    { dependencies: [trackRef] },
  );

  return (
    <>
      <StarsCanvas />
      <Welcome />
      <nav>
        {/* <div className='marker'></div> */}
        <IoMdRocket className='marker' />

        <div ref={trackRef} className='nav__track' data-draggable>
          <ul className='nav__list'>
            {sections
              .filter(({ isEvent }) => isEvent)
              .map(({ title, id, timeline_picture }, index) => (
                <li key={index} className='relative'>
                  <a
                    href={`#${generateSectionId(id)}`}
                    className='nav__link'
                    data-link
                  >
                    <span>{title}</span>
                  </a>
                  {timeline_picture && (
                    <img
                      src={timeline_picture}
                      className='absolute top-[-28%] left-[32%] w-12 h-12 z-30'
                      alt={`Icon of ${title}`}
                    />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </nav>
      <main className='w-full h-full'>
        {sections.map(({ classes, component, id }, index) => (
          <section
            id={generateSectionId(id)}
            key={index}
            className={`${classes}`}
          >
            {component}
          </section>
        ))}
      </main>
    </>
  );
};

export default App;
