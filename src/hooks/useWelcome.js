import { useEffect } from 'react';

const useWelcome = () => {
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return [];
};

export default useWelcome;
