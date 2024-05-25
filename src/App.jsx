import './App.css';
import Welcome from './components/Welcome';
import useWelcome from './hooks/useWelcome';

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
  useWelcome();
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
