import titleBox from '../../assets/images/section-title.png'
import { Tooltip as ReactTooltip } from "react-tooltip";

import SkillsItem from '../skills-item/SkillsItem.component'

import { skillsDataCMS, skillsDataDesign, skillsDataWeb } from '../../library/data'
import { useLazyAnimation, useSectionInView } from '../../library/hooks'

import './Skills.styles.scss'
import { useTheme } from '../../contexts/Theme.context';

const Skills = () => {
  const { ref: refSection } = useSectionInView('Skills')
  const { ref: refAnimation, inView } = useLazyAnimation();
  const { theme } = useTheme();

  return (
    <section className={`skills-container ${theme === 'dark' ? 'dark-section' : ''}`} id='skills' ref={refSection}>
    <div className={`section-title-container ${inView ? 'show' : ''}`} ref={refAnimation}>
      <img src={titleBox} alt='Title' />
      <h2 className='section-title'>SKILLS</h2>
    </div>
    <div className={`skills-contents`}>
      <div className={`web-dev-skills ${inView ? 'show' : ''}`} ref={refAnimation}>
        <SkillsItem skillsData={skillsDataWeb} />
      </div>
      <div className={`design-cms-container ${inView ? 'show' : ''}`} ref={refAnimation}>
        <div className="design-skills">
          <SkillsItem skillsData={skillsDataDesign} />
        </div>
        <div className="cms-skills">
          <SkillsItem skillsData={skillsDataCMS} />
        </div>
      </div>
    </div>
    <ReactTooltip
        id="my-tooltip"
        style={{
            fontSize: "1.1rem",
            backgroundColor: "var(--semidarkblue)",
            zIndex: '10',
        }}
        opacity={1}
    />
  </section>
  )
}

export default Skills