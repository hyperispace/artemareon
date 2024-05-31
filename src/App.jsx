import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';
import { IoMdRocket } from 'react-icons/io';

import './App.css';
import Intro from './components/Intro/Intro';
import Sputnik from './components/Sputnik/Sputnik';
import StarsCanvas from './components/StarsCanvas';
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
    // SECTION 1
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.xxzlvykqote4
    title: 'The Dawn of the Space Age',
    isEvent: true,
    classes: 'relative border-[1px] flex flex-col items-start',
    component: <Sputnik />, // TODO: rename the component name
  },
  {
    // SECTION 2
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.woscxkgg8cfo
    title: 'The First Living Being in Space',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center h-[200vh]',
    component: <>The First Living Being in Space</>,
  },
  {
    // SECTION 3
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.6krekl9614td
    title: 'Pioneers of Space',
    isEvent: true,
    classes:
      'bg-gray-900 flex flex-col justify-center items-center bg-black text-white',
    component: <>Pioneers of Space</>,
  },
  {
    // SECTION 4
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.prif68mv8rja
    title: 'A Historic First',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>A Historic First</>,
  },
  {
    // SECTION 5
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.imldyyu6bthd
    title: 'Circling the Moon',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Circling the Moon</>,
  },
  {
    // SECTION 6
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.1naq12f5fca8
    title: 'Moon Landing',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Moon Landing</>,
  },
  {
    // SECTION 7
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.nqenuqysn7nm
    title: 'One Small Step',
    isEvent: true,
    timeline_picture: './assets/timeline-lunar.png',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>One Small Step</>,
  },
  {
    // SECTION 8
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.m6chkh9cl3vt
    title: 'Space Oddity',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Space Oddity</>,
  },
  {
    // SECTION 9
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.akcexmg63ges
    title: 'Lunar Gateway',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Lunar Gateway</>,
  },
  {
    // SECTION 10
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.emyklo4l5an1
    title: 'The Red Frontier',
    isEvent: true,
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>The Red Frontier</>,
  },
  {
    // SECTION 11
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.ns9b64vt82qc
    title: 'Landing Humans on Mars',
    isEvent: true,
    timeline_picture: './assets/timeline-mars.png',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Landing Humans on Mars</>,
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
      {/* SECTION 0, the intro video, ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.r5hwvakbnzcb */}
      <Intro />
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
