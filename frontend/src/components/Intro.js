import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Intro = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

  useEffect(() => {
    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1 });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  }, [tl]);
  return (
    <>
      <div className='intro'>
        <div className='intro-text'>
          <h1 className='hide'>
            <span className='text'>Selling fresh grocery</span>
          </h1>
          <h1 className='hide'>
            <span className='text'>For Everyday</span>
          </h1>
          <h1 className='hide'>
            <span className='text'>people.</span>
          </h1>
        </div>
      </div>
      <div className='slider'></div>
    </>
  );
};

export default Intro;
