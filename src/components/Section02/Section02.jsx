import Heading from '../common/Heading';
import LaikaImg from './LaikaImg';
import './Section02.css';
import StarWarsText from './StarWarsText';
import SubHeadings from '../common/SubHeadings';

const Section02 = () => {
  return (
    <section className='section02-background'>
      <Heading title='The First Living Being in Space' />
      <SubHeadings title='Sputnik 2' />
      <LaikaImg />
      <StarWarsText />
    </section>
  );
};

export default Section02;
