import React from 'react';
import { Link } from 'react-router-dom'
import Popup from "reactjs-popup";
import { VscChromeClose } from "react-icons/vsc";

import './Footer.styles.scss'
import { FooterLinks, footerSocials } from '../../library/data'

import 'reactjs-popup/dist/index.css';

type SocialLink = {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  name: string;
  iconcolor?: string;
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className='footer-links'>
          <div className="modal-container">
            { FooterLinks.map((link, index) => (
              <Popup
                  trigger={
                  <Link
                      to="#"
                      className="footer-link"
                  >
                      {link.name}
                  </Link>
                  }
                  modal
                  key={index}
              >
                {
                  ((close: () => void) => (
                    <div
                      className={`modal`}
                    >
                      <button
                        className="close-btn fixed top-0 right-0 bg-orange p-4 z-10 rounded-2xl m-4 hover:bg-lightblue transition-all duration-500 dark-shadow text-white"
                        onClick={() => close()}
                      >
                        <VscChromeClose />
                      </button>
                      {link.data}
                    </div>
                  )) as unknown as React.ReactNode
                }
              </Popup>
            ))} 
          </div>
          <div className="disclaimer">
            About this website: built with React JS (App Router & Server Actions), Typescript, SCSS, Framer Motion, React Hook Form & Nodemailer (Serverless), Netlify Hosting
          </div>
          <div className="social-icons">
          { footerSocials.map((social: SocialLink, index: number) => (
            <Link
              to={social.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className={`icon-color`} />
            </Link>
          ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer