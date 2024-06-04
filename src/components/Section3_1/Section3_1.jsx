import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import CommonImage from '../common/CommonImage';

const Section3_1 = () => {
  return (
    <>
      <section className='panel relative w-full h-screen flex flex-col items-start justify-evenly pt-5'>
        <div>
          <Heading title='Pioneers of Space' />
          <SubHeadings title='Yuri Gagarin: The First Human in Space' />
        </div>
        <div className=' w-full h-full flex justify-end items-start absolute right-[20vw] top-[50vh]'>
          <div className=' w-[30vw]'>
            <InfoBox
              title='Yuri Gagarin'
              text='On April 12, 1961, Yuri Gagarin, a Soviet cosmonaut, made history by becoming the first human to journey into outer space. His mission aboard Vostok 1 was a major milestone in the space race. Vostok 1 lifted off from the Baikonur Cosmodrome. Gagarin&#39;s historic flight lasted 108 minutes, completing one orbit around Earth.As Vostok 1 launched, Gagarin famously exclaimed, "Poyekhali!" (Let&#39;s go!). These words became iconic, symbolizing the beginning of human space exploration.'
            />
          </div>
        </div>
        <CommonImage
          width='180px'
          height='240px'
          src='./assets/Gagarin.jpg'
          classes='rounded-lg'
        />
      </section>
    </>
  );
};

export default Section3_1;
