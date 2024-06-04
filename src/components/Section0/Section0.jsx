import { rocketIcon } from '../../constant/images';
import Heading from '../common/Heading';
import SubHeadings from '../common/SubHeadings';

const Section0 = () => {
  return (
    <section className='section02-background'>
      <div className=' flex flex-col justify-center'>
        <Heading title='Scroll Through Space History' />
        <SubHeadings title='From Early Days to Visionary Plans' />
      </div>
      <div className=' absolute flex justify-center items-center h-full w-full z-40'>
        <img className=' text-white' src={rocketIcon} alt='' />
      </div>
    </section>
  );
};

export default Section0;
