import './Section11.css';
import marsimg from '/assets/mars-surface.png';

const Section11 = () => {
  return (
    <section className='section11-background'>
      <img className='mars-surface' src={marsimg} alt='mars surface' />
    </section>
  );
};

export default Section11;
