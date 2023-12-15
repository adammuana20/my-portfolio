import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
import { Tooltip as ReactTooltip } from "react-tooltip";

import Button from '../button/Button.component';

import titleBox from '../../assets/images/section-title.png'

import { useLazyAnimation, useSectionInView } from '../../library/hooks';
import { projectsData } from '../../library/data';

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import './Projects.styles.scss'


const Projects = () => {
    const { ref: refSection } = useSectionInView('Projects')
    const { ref: refAnimation, inView } = useLazyAnimation();

    return (
        <>
            <section className='projects-container' id='projects' ref={refSection}>
                <div className={`section-title-container ${inView ? 'show' : ''}`} ref={refAnimation}>
                    <img src={titleBox} alt='Title' />
                    <h2 className='section-title'>PROJECTS</h2>
                </div>
                <div className={`hide ${inView ? 'show' : ''}`}>
                    <Swiper     
                        effect={"cards"}    
                        grabCursor={true}
                        modules={[EffectCards, Autoplay, Pagination]}
                        className={`swiper`}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        draggable={true}
                    >
                        { projectsData.map((project, idx) => (
                            <SwiperSlide key={idx} className='slider'>
                                <div className='slider-content'>
                                    <h2 className='desktop-project-title'>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <div className="technologies">
                                        <h3>Technologies</h3>
                                        <div className="projects-icons-container">
                                            { project.technologies.map((technology, innerIdx) => (
                                                    <img
                                                        key={innerIdx}
                                                        src={technology.icon}
                                                        alt={`${project.title}-icon`}
                                                        className="icon"
                                                        data-tooltip-id="my-tooltips"
                                                        data-tooltip-content={technology.name}
                                                    />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="buttons-container">
                                        <Button
                                            label="Live Demo"
                                            link={project.deploymenturl}
                                            iconSVG={project.deploymenticon}
                                            buttoncolor={project.colors.main}
                                            iconcolor={project.colors.icon}
                                        />
                                        <Button
                                            label="Github Repository"
                                            link={project.githuburl}
                                            iconSVG={project.githubicon}
                                            buttoncolor={project.colors.main}
                                            iconcolor={project.colors.icon}
                                        />
                                    </div>
                                </div>
                                <div className="mockup-container">
                                    <h2 className='mobile-project-title'>{project.title}</h2>
                                    <img
                                    src={project.image}
                                    alt={`${project.title}-project-mockup`}
                                    className={`mockup`}
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                        }        
                    </Swiper>
                </div>
            </section>
            <ReactTooltip
                id="my-tooltips"
                style={{
                    fontSize: "1.1rem",
                    backgroundColor: "var(--semidarkblue)",
                    zIndex: '10',
                }}
                opacity={1}
            />
        </>
    )
}

export default Projects