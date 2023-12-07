import titleBox from '../../assets/images/section-title.png'
import skillBox from '../../assets/images/skills-box.png'
import { useSectionInView } from '../../library/hooks'

import './Skills.styles.scss'

const Skills = () => {
  const { ref } = useSectionInView('Skills')

  return (
    <section className='skills-container' id='skills' ref={ref}>
    <div className="section-title-container">
      <img src={titleBox} alt='Title' />
      <h2>TECH STACK/SKILLS</h2>
    </div>
    <div className="skills-content">
      <img src={skillBox} alt='banner' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque eius, ducimus a voluptate illo assumenda similique, inventore modi harum repellat optio officiis nesciunt. Voluptate, provident minus. Tempora, tempore ducimus!</p>
    </div>
  </section>
  )
}

export default Skills