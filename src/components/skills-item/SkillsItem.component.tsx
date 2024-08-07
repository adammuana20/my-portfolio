import { FC } from 'react'

import './SkillsItem.styles.scss'
import { useTheme } from '../../contexts/Theme.context';

type Skill = {
    title: string;
    hash: string;
    icon: readonly string[];
    color: readonly string[];
}
  
type SkillCategory = {
    readonly skillsTitle: string;
    readonly skills: readonly Skill[];
}
  
type SkillSectionProps = {
    skillsData: readonly SkillCategory[];
}

const SkillsItem: FC<SkillSectionProps> = ({ skillsData }) => {
    const { theme } = useTheme()

    const getSkillIconSrc = (skill: Skill) => {
        if ( theme === 'dark' 
            && (skill.title.includes("Express") 
            || skill.title.includes("Adobe Photoshop")
            || skill.title.includes("React Router"))
        ) {
          return skill.icon[1];
        }  else {
          return skill.icon[0];
        }
      };

    const getSkillColor = (skill: Skill) => {
        if ( theme === 'dark' &&
            (skill.title.includes("Express") || skill.title.includes("Adobe Photoshop"))) {
            return skill.color[1];
        } else {
            return skill.color[0];
        }
    };
    
  return (
    <div className='skills-data-container'>
        <h3>{skillsData[0].skillsTitle}</h3>
        <div className="skills-icons-container">
            { skillsData[0].skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className={`skill-icon skill-item`}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={skill.title}
                        style={{
                            borderColor: getSkillColor(skill),
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.animation = "animation: pulse 2s infinite";
                            e.currentTarget.style.transform = "scale(1)";
                            document.documentElement.style.setProperty(
                                "--box-shadow-color",
                                `${getSkillColor(skill)}b3`
                            );
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.animation = "";
                            e.currentTarget.style.transform = "";
                            document.documentElement.style.setProperty(
                                "--box-shadow-color",
                                "inherit"
                            );
                        }}
                    >
                        <img
                            src={getSkillIconSrc(skill)}
                            alt={`${skill.icon}-icon`}
                            className="skill-img"
                        />
                        <h3 className="skill-title">
                            {skill.title}
                        </h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SkillsItem