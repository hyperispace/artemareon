import Heading from '../Sputnik/Heading';
import LaikaImg from './LaikaImg';
import './Section02.css';
import StarWarsText from './StarWarsText';

const Section02 = () => {
  return (
    <section className='section02-background'>
      <Heading title='The First Living Being in Space' />
      <LaikaImg />
      <StarWarsText />
    </section>
  );
};

export default Section02;
