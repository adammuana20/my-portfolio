import {
    BsMoon,
    BsSun,
    BsLinkedin,
    BsFillEnvelopeAtFill,
    BsGithub,
  } from "react-icons/bs";

import { useTheme } from "../../contexts/Theme.context"
import { useScreenSize } from "../../library/hooks"

import './ThemeSwitch.styles.scss'
import { footerSocials } from "../../library/data";
import { Link } from "react-router-dom";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme()
    const { isTooltipVisible, setIsTooltipVisible, isMobile } = useScreenSize()

  return (
    <div className={`tooltip 
            ${isTooltipVisible ? 'tooltip-height' : '' }
            ${isMobile ? 'top': 'bottom'}
        `} 
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        onTouchStart={() => setIsTooltipVisible(true)}
        onTouchEnd={() => setIsTooltipVisible(false)}
    >
        <button
            onClick={toggleTheme}
            className={`tooltip-btn 
                ${theme === 'dark' ? 'dark-mode' : ''}
                ${isMobile ? 'top': 'bottom'}
            `}
        >
            { theme === 'light' ? <BsSun /> : <BsMoon/> }
        </button>
        <button
            className={`tooltip-btn 
                ${theme === 'dark' ? 'dark-mode' : ''}
                ${isTooltipVisible && !isMobile ? 'tooltip-bottom-show' : isTooltipVisible && isMobile ? 'tooltip-top-show': 'tooltip-hide'}
                ${isMobile ? 'top': 'bottom'}
            `}
        >
            <Link
                to={footerSocials[1].link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsGithub  /> 
            </Link>
        </button>
        <button
            className={`tooltip-btn 
                ${theme === 'dark' ? 'dark-mode' : ''}
                ${isTooltipVisible && !isMobile ? 'tooltip-bottom-show' : isTooltipVisible && isMobile ? 'tooltip-top-show': 'tooltip-hide'}
                ${isMobile ? 'top': 'bottom'}
            `}
        >
            <Link
                to={footerSocials[0].link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsLinkedin  />
            </Link>
        </button>
        <button
            className={`tooltip-btn 
                ${theme === 'dark' ? 'dark-mode' : ''}
                ${isTooltipVisible && !isMobile ? 'tooltip-bottom-show' : isTooltipVisible && isMobile ? 'tooltip-top-show': 'tooltip-hide'}
                ${isMobile ? 'top': 'bottom'}
            `}
        >
            <Link
                to={footerSocials[2].link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsFillEnvelopeAtFill  />
            </Link>
        </button>
    </div>
  )
}

export default ThemeSwitch