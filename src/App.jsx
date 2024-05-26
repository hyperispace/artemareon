import './App.css';
import Welcome from './components/Welcome';
import useScrollToBottom from './hooks/useScrollToBottom';

/**
 * Push your sections into this array
 * `classes`: section specific class name
 * `component`: the content component to put in section
 *    component itself doesn't need `<section>` element,
 *    cause we'll have this component wrapped into a `<section>` element.
 *    e.g. the <Welcome /> component
 */
const sections = [
  {
    classes: 'bg-gray-300',
    component: <>Section Gray 100</>,
  },
  {
    classes: 'bg-gray-600',
    component: <>Section Gray 400</>,
  },
  {
    classes: 'bg-gray-800',
    component: <>Section Gray 800</>,
  },
  {
    classes:
      'bg-gray-900 flex flex-col justify-center items-center bg-black text-white',
    component: <Welcome />,
  },
];

const App = () => {
  useScrollToBottom();

  return (
    <>
      {sections.map(({ classes, component }, index) => (
        <section key={index} className={`w-full h-full ${classes}`}>
          {component}
        </section>
      ))}
    </>
  );
};

export default App;
