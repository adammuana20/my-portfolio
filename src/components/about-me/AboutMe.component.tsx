import { useSectionInView } from '../../library/hooks';

import titleBox from '../../assets/images/section-title.png'

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
        <p>I m a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.</p>
      </div>
    </section>
  )
}

export default AboutMe