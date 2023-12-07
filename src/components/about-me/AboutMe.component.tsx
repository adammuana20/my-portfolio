import { useSectionInView } from '../../library/hooks';

import titleBox from '../../assets/images/section-title.png'
import infoBox from '../../assets/images/info-box.png'

import './AboutMe.styles.scss'

const AboutMe = () => {
  const { ref } = useSectionInView("About Me");
  return (
    <section className='about-me-container' id='about-me' ref={ref}>
      <div className="section-title-container">
        <img src={titleBox} alt='Title' />
        <h2>ABOUT ME</h2>
      </div>
      <div className="about-content">
        <img src={infoBox} alt='banner' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque eius, ducimus a voluptate illo assumenda similique, inventore modi harum repellat optio officiis nesciunt. Voluptate, provident minus. Tempora, tempore ducimus!</p>
      </div>
    </section>
  )
}

export default AboutMe