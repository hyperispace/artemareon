import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';

const Section3_1 = () => {
  return (
    <>
      <section className='panel relative w-full h-full flex flex-col justify-start items-start pt-5'>
        <Heading title='Pioneers of Space' />
        <SubHeadings title='Yuri Gagarin: The First Human in Space' />
        <InfoBox
          title='Yuri Gagarin'
          text='On April 12, 1961, Yuri Gagarin, a Soviet cosmonaut, made history by becoming the first human to journey into outer space. His mission aboard Vostok 1 was a major milestone in the space race. Vostok 1 lifted off from the Baikonur Cosmodrome. Gagarin&#39;s historic flight lasted 108 minutes, completing one orbit around Earth.As Vostok 1 launched, Gagarin famously exclaimed, "Poyekhali!" (Let&#39;s go!). These words became iconic, symbolizing the beginning of human space exploration.'
        />
      </section>
    </>
  );
};

export default Section3_1;
