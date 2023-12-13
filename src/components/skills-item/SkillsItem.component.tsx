import React, { FC } from 'react'

import './SkillsItem.styles.scss'

type Skill = {
    title: string;
    hash: string;
    icon: any;
    color: any;
}
  
type SkillCategory = {
    readonly skillsTitle: string;
    readonly skills: readonly Skill[];
}
  
type SkillSectionProps = {
    skillsData: readonly SkillCategory[];
    // theme: "dark" | "light";
}

const SkillsItem: FC<SkillSectionProps> = ({ skillsData }) => {

    const getSkillIconSrc = (skill: Skill) => {
        if (skill.title.includes("Express") || skill.title.includes("Adobe Photoshop")) {
          return skill.icon[1];
        } else if (skill.title !== "Adobe Photoshop" && skill.title !== "Express") {
          return skill.icon;
        } else {
          return skill.icon[0];
        }
      };

    const getSkillColor = (skill: Skill) => {
        if (skill.title.includes("Express") || skill.title.includes("Adobe Photoshop")) {
            return skill.color[1];
        } else if (skill.title !== "Adobe Photoshop" && skill.title !== "Express") {
            return skill.color;
        } else {
            return skill.color[0];
        }
    };
    
  return (
    <div className='skills-data-container'>
        <h3>{skillsData[0].skillsTitle}</h3>
        <div className="icons-container">
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