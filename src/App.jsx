import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';
import { useGSAP } from '@gsap/react';

import './App.css';
import Sample from './components/Sample';
import Sputnik from './components/Sputnik/Sputnik';
import StarsCanvas from './components/StarsCanvas/StarsCanvas';
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
    event: 'Event 1',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Section Gray 100</>,
  },
  {
    event: 'Event 2',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <Sputnik />,
  },
  {
    event: 'Event 3',
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Section Gray 400</>,
  },
  {
    event: 'Event 4',
    classes:
      'bg-gray-900 flex flex-col justify-center items-center bg-black text-white',
    component: <Sample />,
  },
];

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
        <div className='marker'></div>

        <div ref={trackRef} className='nav__track' data-draggable>
          {/* <ul className='flex justify-between'> */}
          <ul className='nav__list'>
            {sections.map(({ event }, index) => (
              <li key={index}>
                <a
                  href={`#${generateSectionId(index)}`}
                  className='nav__link'
                  data-link
                >
                  <span>{event}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className='w-full h-full'>
        {sections.map(({ classes, component }, index) => (
          <section
            id={generateSectionId(index)}
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
