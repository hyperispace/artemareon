import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import PopUpText from '../common/PopUpText';
import InfoBox from '../common/InfoBox';
import Gateway from './Gateway';

const Section9 = () => {
  return (
    <>
      <section className='panel relative w-full h-full flex flex-col pt-5 items-start justify-between'>
        <div>
          <Heading title='Lunar Gateway' />
          <SubHeadings title='Building the Infrastructure for Interplanetary Travel' />
        </div>
        <InfoBox
          title='Lunar Gateway'
          text='Is a planned space station that will orbit the Moon, serving as a staging point for lunar exploration and as a gateway to deep space destinations like Mars. It will be assembled in lunar orbit over several missions.Crewed missions to Lunar Gateway will enable astronauts to conduct lunar surface expeditions, test technologies for future Mars missions, and explore the Moon&#39;s unique environment, including its resources and potential for sustained habitation'
        />
        <Gateway width='200px' height='200px' src='./assets/lunargateway.png' />
        <PopUpText text='Towards a Multi-Planetary Future' />
      </section>
    </>
  );
};

export default Section9;
