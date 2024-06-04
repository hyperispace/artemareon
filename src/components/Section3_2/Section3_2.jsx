import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import CommonImage from '../common/CommonImage';

const Section3_2 = () => {
  return (
    <>
      {/* <div className='panel relative w-full h-full flex flex-col items-start justify-evenly pt-5'> */}
      <div className='panel relative w-full h-full pt-5 grid'>
        <SubHeadings title='Valentina Tereshkova: The First Woman in Space' />
        <div className='w-[30vw] h-full flex justify-start items-start absolute left-[8vw] top-[20vh]'>
          <div className='w-[30vw]'>
            <InfoBox
              title='Valentina Tereshkova'
              text='On June 16, 1963, Valentina Tereshkova, a Soviet cosmonaut, became the first woman to travel into space. Her mission aboard Vostok 6 was a significant achievement in the history of space exploration and women&#39;s role in science and technology. Vostok 6 launched from Baikonur Cosmodrome, It carried Tereshkova into orbit for a solo flight lasting nearly three days and orbited Earth 48 times.Tereshkova&#39;s call sign was "Chaika" (Seagull), and her flight was a major milestone for women in space.'
            />
          </div>
        </div>

        <CommonImage
          width='180px'
          height='240px'
          classes='rounded-lg place-self-end'
          src='./assets/Valentina.jpg'
          direction='right'
        />
      </div>
    </>
  );
};

export default Section3_2;
