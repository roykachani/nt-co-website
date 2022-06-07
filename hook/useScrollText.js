import { useEffect, useRef, useContext } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { MainContext } from '../context/mainContext';

export const useScrollText = (
  id,
  trigger,
  pin = false,
  start = '',
  end = '',
  scrub,
  markers = true,
  onE = false,
  onU = false,
  funct,
  anim
) => {
  const { fontLoaded, windowSize } = useContext(MainContext);
  const { width, height } = windowSize;

  const tl = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const addAnim = () => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger,
        pin: pin,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
        onEnter: !!onE && funct,
        onUpdate: !!onU && funct,
      },
    });
    if (!!anim) {
      anim.map((anim, index) => {
        tl.current.to(anim.target, anim.animation, anim.duration);
      });
    }

    ScrollTrigger.refresh(true);
  };
  const removeAnim = () => {
    ScrollTrigger.getById(id).kill(true);
    tl.current.kill();
  };

  useEffect(() => {
    addAnim();
    return () => {
      removeAnim();
    };
  }, [width, height, fontLoaded]);

  return [tl];
};
