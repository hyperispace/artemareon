import Heading from './Heading';
import InfoBox from './InfoBox';
import SputnikImage from './SputnikImage';
import './Sputnik.css';
import PopUpText from './PopUpText';

function Sputnik() {
  return (
    <>
      <section className='space01'></section>
      <section className='space01'>
        <Heading title='The Dawn of the Space Age' />
        <div className='block'></div>
        <InfoBox
          title="Humanity's First Artificial Satellite"
          text="On October 4, 1957, the Soviet Union launched Sputnik 1, the world's first artificial satellite. This groundbreaking event marked the beginning of the space age and the start of the space race between the United States and the Soviet Union. Sputnik 1 was a polished metal sphere, 23 inches in diameter, with four external radio antennas. It transmitted radio pulses back to Earth Sputnik 1 orbited Earth every 96 minutes, traveling at a speed of about 18,000 miles per hour."
        />
        <SputnikImage />
        <PopUpText text='Its beeps echoed worldwide' />
      </section>
      <section className='space01'></section>
    </>
  );
}

export default Sputnik;
