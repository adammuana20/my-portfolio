import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../library/data'

import { useActiveSectionContext } from '../../contexts/ActiveSection.context';

import './Navbar.styles.scss'
import ScrollToAnchor from '../../components/Listener';
import { useScreenSize } from '../../library/hooks';

type CustomNavLinkProps = {
  link: string;
  children: React.ReactNode;
  linkTitle: string;
}

const Navbar = () => {
  const { isMobileMenuActive, isSticky, setIsSticky } = useScreenSize()

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.outerHeight * 0.1;
      setIsSticky(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);  

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const CustomNavLink: FC<CustomNavLinkProps> = ({ link, children, linkTitle }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLinkActive = isHovered

    const linkClasses = isLinkActive || linkTitle === activeSection
      ? 'hovered'
      : ''

    const leftBracket = isLinkActive && <span className='left-bracket'>&#123;</span>
    const rightBracket = isLinkActive && <span className='right-bracket'>&#125;</span>

    return (
      <NavLink
        to={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`link ${linkClasses}`}
      >
        <span>
          {leftBracket}
          {children}
          {rightBracket}
        </span>
      </NavLink>
    )

  }

  return (
    <nav className={`navlinks-container ${isSticky ? 'sticky' : ''}`}>
      <ScrollToAnchor />
      { navLinks.map((link, idx) => {
          return(
            <CustomNavLink 
              key={idx}
              link={link.hash}
              linkTitle={link.title}
            >
              { link.title === activeSection ? (
                  <>
                    <span className='left-bracket'>&#123;</span>
                    {link.title}
                    <span className='right-bracket'>&#125;</span>
                  </>
                ) : (
                  <div onClick={() => {
                      setActiveSection(link.title)
                      setTimeOfLastClick(Date.now())
                    }}>
                    {link.title}
                  </div>
                )
              }
            </CustomNavLink>
          )
        })
      }
    </nav>
  )
}

export default Navbar