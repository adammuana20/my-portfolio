import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../library/data'

import { useActiveSectionContext } from '../../contexts/ActiveSection.context';

import './Navbar.styles.scss'
import ScrollToAnchor from '../../components/Listener';

type CustomNavLinkProps = {
  link: string;
  children: React.ReactNode;
  linkTitle: string;
}

const Navbar = () => {

  const { activeSection, setActiveSection } = useActiveSectionContext()

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
    <div className='navlinks-container'>
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
                  <div onClick={() => setActiveSection(link.title)}>
                    {link.title}
                  </div>
                )
              }
            </CustomNavLink>
          )
        })
      }
    </div>
  )
}

export default Navbar