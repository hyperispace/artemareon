import { useState } from 'react';

const Welcome = () => {
  const [isEntered, setIsEntered] = useState(false);
  return !isEntered ? (
    <section className='fixed w-full h-full flex justify-center flex-col items-center bg-black text-white'>
      <h1>Artemareon</h1>
      <p>From Earth to Moon, from Moon to Mars</p>
      <button onClick={() => setIsEntered(true)}>Start</button>
    </section>
  ) : null;
};

export default Welcome;
