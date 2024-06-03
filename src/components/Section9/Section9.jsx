import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import PopUpText from '../common/PopUpText';
import InfoBox from '../common/InfoBox';

const Section9 = () => {
  return (
    <>
      <section className='panel relative w-full h-full flex flex-col justify-start items-start pt-5'>
        <Heading title='Lunar Gateway' />
        <SubHeadings title='Building the Infrastructure for Interplanetary Travel' />
        <InfoBox
          title='Lunar Gateway'
          text='Is a planned space station that will orbit the Moon, serving as a staging point for lunar exploration and as a gateway to deep space destinations like Mars. It will be assembled in lunar orbit over several missions.Crewed missions to Lunar Gateway will enable astronauts to conduct lunar surface expeditions, test technologies for future Mars missions, and explore the Moon&#39;s unique environment, including its resources and potential for sustained habitation'
        />

        <PopUpText text='Towards a Multi-Planetary Future' />
      </section>
    </>
  );
};

export default Section9;
