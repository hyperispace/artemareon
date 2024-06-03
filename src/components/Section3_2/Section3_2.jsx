import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import CommonImage from '../common/CommonImage';

const Section3_2 = () => {
  return (
    <>
      <section className='panel relative w-full h-full flex flex-col items-start justify-evenly pt-5'>
        <div>
          <Heading title='Pioneers of Space' />
          <SubHeadings title='Valentina Tereshkova: The First Woman in Space' />
        </div>
        <InfoBox
          title='Valentina Tereshkova'
          text='On June 16, 1963, Valentina Tereshkova, a Soviet cosmonaut, became the first woman to travel into space. Her mission aboard Vostok 6 was a significant achievement in the history of space exploration and women&#39;s role in science and technology. Vostok 6 launched from Baikonur Cosmodrome, It carried Tereshkova into orbit for a solo flight lasting nearly three days and orbited Earth 48 times.Tereshkova&#39;s call sign was "Chaika" (Seagull), and her flight was a major milestone for women in space.'
        />

        <CommonImage
          width='150px'
          height='150px'
          src='./assets/Valentina.jpg'
        />
      </section>
    </>
  );
};

export default Section3_2;
