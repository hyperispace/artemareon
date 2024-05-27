import './App.css';
import Sample from './components/Sample';
import StarsCanvas from './components/StarsCanvas/StarsCanvas';
import Welcome from './components/Welcome';

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
    classes:
      ' text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Section Gray 100</>,
  },
  {
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Section Gray 400</>,
  },
  {
    classes:
      'text-white text-5xl border-[1px] flex justify-center items-center',
    component: <>Section Gray 800</>,
  },
  {
    classes:
      'bg-gray-900 flex flex-col justify-center items-center bg-black text-white',
    component: <Sample />,
  },
];

const App = () => {
  return (
    <>
      <StarsCanvas />
      <Welcome />
      {sections.map(({ classes, component }, index) => (
        <section key={index} className={`w-full h-full ${classes}`}>
          {component}
        </section>
      ))}
    </>
  );
};

export default App;
