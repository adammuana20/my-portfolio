import React from 'react';

import Cube from '../cube/Cube.component';

import { aboutMe } from '../../library/data';
import { useLazyAnimation, useScreenSize, useSectionInView } from '../../library/hooks';

import rotateMe from '../../assets/images/rotate-me.png'
import titleBox from '../../assets/images/section-title.png'

import './AboutMe.styles.scss'


const AboutMe = () => {
  const { ref: refSection } = useSectionInView("About Me");
  const { ref: refAnimation, inView } = useLazyAnimation();
  const { isMobileMenuActive } = useScreenSize()

  return (
    <section className='about-me-container' id='about-me' ref={refSection}>
      <div className={`section-title-container ${inView ? 'show' : ''}`} ref={refAnimation}>
        <img src={titleBox} alt='Title' />
        <h2>ABOUT ME</h2>
      </div>
      <div className={`cube-container ${inView ? 'show' : ''}`} ref={refAnimation}>
        <div className='cube-wrap'>
          <div className='rotate-me'>
            <img src={rotateMe} alt="Rotate" />
          </div>
          <Cube index='front' size={isMobileMenuActive ? 350 : 500}>
            { aboutMe.map((about, idx) => (
                <div className={`face`} key={idx}>
                  <p>{about.description.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}</p>
                </div>
              ))
            }
          </Cube>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

