import { useEffect, useState, useCallback } from 'react';

const useScrollToBottom = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollTop + windowHeight < documentHeight) return;
    setIsLoaded(true);
    window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return [isLoaded];
};

export default useScrollToBottom;
