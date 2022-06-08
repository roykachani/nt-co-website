import { useEffect, useState, useRef } from 'react';

export const useNearScreen = (distance = '100px') => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  const onchange = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setShow(true);
        observer.unobserve(fromRef.current);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onchange, {
      rootMargin: distance,
    });
    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
};
