import SubHeadings from '../common/SubHeadings';
import InfoBox from '../common/InfoBox';
import CommonImage from '../common/CommonImage';

const Section3_2 = () => {
  return (
    <>
      <div className='panel relative w-full h-full flex flex-col items-start justify-evenly pt-5'>
        <div>
          <SubHeadings title='Valentina Tereshkova: The First Woman in Space' />
        </div>
        <div className=' w-full h-full flex justify-end items-start absolute right-[20vw] top-[50vh]'>
          <div className=' w-[30vw]'>
            <InfoBox
              title='Valentina Tereshkova'
              text='On June 16, 1963, Valentina Tereshkova, a Soviet cosmonaut, became the first woman to travel into space. Her mission aboard Vostok 6 was a significant achievement in the history of space exploration and women&#39;s role in science and technology. Vostok 6 launched from Baikonur Cosmodrome, It carried Tereshkova into orbit for a solo flight lasting nearly three days and orbited Earth 48 times.Tereshkova&#39;s call sign was "Chaika" (Seagull), and her flight was a major milestone for women in space.'
            />
          </div>
        </div>

        <CommonImage
          width='180px'
          height='240px'
          classes='rounded-lg'
          src='./assets/Valentina.jpg'
        />
      </div>
    </>
  );
};

export default Section3_2;
