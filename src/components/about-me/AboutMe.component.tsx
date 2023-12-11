import React from 'react';
import Cube from 'react-3d-cube';

import { useLazyAnimation, useSectionInView } from '../../library/hooks';

import rotateMe from '../../assets/images/rotate-me.png'
import titleBox from '../../assets/images/section-title.png'

import './AboutMe.styles.scss'
import { aboutMe } from '../../library/data';

const AboutMe = () => {
  const { ref: refSection } = useSectionInView("About Me");
  const { ref: refAnimation, inView } = useLazyAnimation();

  return (
    <section className='about-me-container' id='about-me' ref={refSection}>
      <div className={`section-title-container ${inView ? 'show' : ''}`} ref={refAnimation}>
        <img src={titleBox} alt='Title' />
        <h2>ABOUT ME</h2>
      </div>
      <div className={`cube-section ${inView ? 'show' : ''}`}>
        <div className='cube-container'>
          <div className='rotate-me'>
            <img src={rotateMe} alt="Rotate" />
          </div>
          <Cube size={550} index="front">
            { aboutMe.map((about, idx) => (
                <div className={`cube-content`} key={idx}>
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