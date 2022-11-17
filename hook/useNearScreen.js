import { useEffect, useState, useRef } from 'react';

export const useNearScreen = (distance = '100px', thrsH = 0, s) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onchange = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (thrsH != 0) {
            entry.target.classList.add(s, entry.isIntersecting);
          }
          observer.unobserve(fromRef.current);
        }
      });
    };
    const observer = new IntersectionObserver(onchange, {
      rootMargin: distance,
      threshold: thrsH,
    });
    observer.observe(fromRef.current);

    return () => observer.disconnect();
  });

  return { isNearScreen, fromRef };
};
