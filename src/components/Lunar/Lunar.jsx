import { forwardRef } from 'react';

const Lunar = forwardRef((_, lunarRef) => {
  return (
    <div
      ref={lunarRef}
      className='w-16 h-16 flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-500 rounded-[50%]'
    ></div>
  );
});

Lunar.displayName = 'Lunar';

export default Lunar;
