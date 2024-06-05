import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Draggable from 'gsap/Draggable';

import './App.css';
import Intro from './components/Intro/Intro';
import Sputnik from './components/Sputnik/Sputnik';
import Section0 from './components/Section0/Section0';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section8 from './components/Section8/Section8';
import Section10 from './components/Section10/Section10';
import StarsCanvas from './components/StarsCanvas';
import Section02 from './components/Section02/Section02';
import Section3_1 from './components/Section3_1';
import Section3_2 from './components/Section3_2';
import Section9 from './components/Section9';
import Section6 from './components/Section6';
import Section11 from './components/Section11/Section11';
import Section7 from './components/Section7';

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
    classes: 'text-white text-5xl flex justify-center items-center h-screen',
    component: <Section0 />,
  },
  {
    // SECTION 1
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.xxzlvykqote4
    title: 'The Dawn of the Space Age',
    isEvent: true,
    classes: 'relative flex flex-col items-start',
    component: <Sputnik />, // TODO: rename the component name
  },
  {
    // SECTION 2
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.woscxkgg8cfo
    title: 'The First Living Being in Space',
    isEvent: true,
    classes: 'relative  flex flex-col items-start mt-32',
    component: <Section02 />,
  },
  {
    // SECTION 3.1
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.6krekl9614td
    title: 'Pioneers of Space',
    isEvent: true,
    classes: 'flex w-full h-full justify-start items-start',
    component: <Section3_1 />,
  },
  {
    // SECTION 3.2
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.6krekl9614td
    title: 'Pioneers of Space',
    isEvent: true,
    classes: 'flex w-full h-full justify-start items-start',
    component: <Section3_2 />,
  },
  {
    // SECTION 4
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.prif68mv8rja
    title: 'A Historic First',
    isEvent: true,
    classes:
      'h-[80rem] relative text-white text-5xl  flex justify-center items-center',
    component: <Section4 />,
  },
  {
    // SECTION 5
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.imldyyu6bthd
    title: 'Circling the Moon',
    isEvent: true,
    classes:
      'h-[100vh] relative text-white text-5xl flex justify-center items-center',
    component: <Section5 />,
  },
  {
    // SECTION 6
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.1naq12f5fca8
    title: 'Moon Landing',
    isEvent: true,
    classes:
      'flex justify-center items-center relative overflow-hidden h-screen',
    component: <Section6 />,
  },
  {
    // SECTION 7
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.nqenuqysn7nm
    title: 'One Small Step',
    isEvent: true,
    timeline_picture: './assets/timeline-lunar.png',
    classes:
      'flex justify-center items-center relative overflow-hidden h-screen',
    component: <Section7 />,
  },
  {
    // SECTION 8
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.m6chkh9cl3vt
    title: 'Space Oddity',
    isEvent: true,
    classes:
      'h-[50rem] relative text-white text-5xl flex justify-center items-center',
    component: <Section8 />,
  },
  {
    // SECTION 9
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.akcexmg63ges
    title: 'Lunar Gateway',
    isEvent: true,
    classes: 'text-white text-5xl flex justify-center items-center',
    component: <Section9 />,
  },
  {
    // SECTION 10
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.emyklo4l5an1
    title: 'The Red Frontier',
    isEvent: true,
    classes: 'relative  flex flex-col items-start',
    component: <Section10 />,
  },
  {
    // SECTION 11
    // ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.ns9b64vt82qc
    title: 'Landing Humans on Mars',
    isEvent: true,
    timeline_picture: './assets/timeline-mars.png',
    classes: 'text-white text-5xl  flex justify-center items-center',
    component: <Section11 />,
  },
].map((section, index) => ({ ...section, id: index }));

const generateSectionId = (index) => `section_${index}`;

gsap.registerPlugin(ScrollTrigger, Draggable);

const App = () => {
  return (
    <>
      <StarsCanvas />
      {/* SECTION 0, the intro video, ref: https://docs.google.com/document/d/1cZQQio5FPE1P0ubhuIMOD4cylDEnEDy37rf4lmy6GU8/edit#heading=h.r5hwvakbnzcb */}
      {/* <Intro /> */}
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
