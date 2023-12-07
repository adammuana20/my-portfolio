import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"

import infoBox from '../../assets/images/info-box.png'
import avatar from '../../assets/images/avatar.png'
import avatarContainer from '../../assets/images/avatar-container.png'

import './Introduction.styles.scss'
import { useSectionInView } from "../../library/hooks"

const Introduction = () => {
  const { ref } = useSectionInView('Home')
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const spans = document.querySelectorAll('.color-changing-container span');

    const changeColor = (index: number) => {
      spans[index].classList.add('change');
      const timeoutId = setTimeout(() => {
        spans[index].classList.remove('change');
        const nextIndex = (index + 1) % spans.length;
        setCurrentIndex(nextIndex);
      }, 300);
      return () => {
        clearTimeout(timeoutId);
      };
    };

    // Start the color change sequence
    changeColor(currentIndex);
  }, [currentIndex]);
  
  return (
    <section className='home-container' id='home' ref={ref}>
      <div className="information">
        <img src={infoBox} alt='banner' />
        <div className="overlay-text">
          <div className="text">
            <h2>Hello, I'm</h2>
            <h1 className="color-changing-container">
              <span className={currentIndex === 0 ? 'change' : ''}>A</span>
              <span className={currentIndex === 1 ? 'change' : ''}>d</span>
              <span className={currentIndex === 2 ? 'change' : ''}>a</span>
              <span className={currentIndex === 3 ? 'change' : ''}>m</span>
              <span className={currentIndex === 4 ? 'change' : ''}>C</span>
              <span className={currentIndex === 5 ? 'change' : ''}>l</span>
              <span className={currentIndex === 6 ? 'change' : ''}>i</span>
              <span className={currentIndex === 7 ? 'change' : ''}>n</span>
              <span className={currentIndex === 8 ? 'change' : ''}>t</span>
              <span className={currentIndex === 9 ? 'change' : ''}>P.</span>
              <span className={currentIndex === 10 ? 'change' : ''}>M</span>
              <span className={currentIndex === 11 ? 'change' : ''}>u</span>
              <span className={currentIndex === 12 ? 'change' : ''}>a</span>
              <span className={currentIndex === 13 ? 'change' : ''}>ñ</span>
              <span className={currentIndex === 14 ? 'change' : ''}>a</span>
              <span className="wave">👋</span>
            </h1>
          </div>
          <TypeAnimation
            sequence={[
              'Front-end Developer', 1000,
              'CMS Developer', 1000,
              'UI/UX Designer', 1000,
              'Online Gamer 😃', 1000,
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: '2rem', display: 'block', textAlign: 'center', }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="avatar-container">
        <div className="rotating-img-container">
          <img src={avatarContainer} alt='Sample' className="rotating" />
        </div>
        <div className="avatar">
          <img src={avatar} alt='Avatar' />
        </div>
      </div>
    </section>
  )
}

export default Introduction