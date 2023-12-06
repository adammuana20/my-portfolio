import htmlIcon from '../assets/icons/htmlicon.svg'
import cssIcon from '../assets/icons/cssicon.svg'
import jsIcon from '../assets/icons/javascripticon.svg'
import apiIcon from '../assets/icons/apiicon.svg'
import reactIcon from '../assets/icons/reacticon.svg'
import figmaIcon from '../assets/icons/figmaicon.svg'
import canvaIcon from '../assets/icons/canvaicon.svg'
import netlifyIcon from '../assets/icons/netlifyicon.svg'

import tastyMockup from '../assets/images/tasty_mockup.webp'

import { GoHome } from "react-icons/go";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiUser, CiMail } from "react-icons/ci";
import { FiGithub, FiLink, FiLinkedin } from "react-icons/fi";


export const navLinks = [
    { title: "Home", hash: "#home", icon: GoHome },
    { title: "Skills", hash: "#skills", icon: HiOutlineWrenchScrewdriver },
    { title: "Projects", hash: "#projects", icon: AiOutlineFundProjectionScreen },
    { title: "About Me", hash: "#about-me", icon: CiUser },
    { title: "Contact", hash: "#contact", icon: CiMail },
] as const;

export const projectsData = [
    {
        title: "Perhaps Manila",
        description:
        "Card 1",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "REST Api", icon: apiIcon },
            { name: "React", icon: reactIcon },
            { name: "Figma", icon: figmaIcon },
            { name: "Canva", icon: canvaIcon },
            { name: "Netlify", icon: netlifyIcon },
        ],
        image: tastyMockup,
        deploymenturl: "https://jolly-sunshine-9cadfb.netlify.app/",
        githuburl: "https://github.com/adammuana20/crown-clothing",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#70B9BE",
        },
    },
    {
        title: "Perhaps Manila",
        description:
        "Card 2",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "REST Api", icon: apiIcon },
            { name: "React", icon: reactIcon },
            { name: "Figma", icon: figmaIcon },
            { name: "Canva", icon: canvaIcon },
            { name: "Netlify", icon: netlifyIcon },
        ],
        image: tastyMockup,
        deploymenturl: "https://jolly-sunshine-9cadfb.netlify.app/",
        githuburl: "https://github.com/adammuana20/crown-clothing",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#70B9BE",
        },
    },
    {
        title: "Perhaps Manila",
        description:
        "Card 3",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "REST Api", icon: apiIcon },
            { name: "React", icon: reactIcon },
            { name: "Figma", icon: figmaIcon },
            { name: "Canva", icon: canvaIcon },
            { name: "Netlify", icon: netlifyIcon },
        ],
        image: tastyMockup,
        deploymenturl: "https://jolly-sunshine-9cadfb.netlify.app/",
        githuburl: "https://github.com/adammuana20/crown-clothing",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#70B9BE",
        },
    },
    {
        title: "Perhaps Manila",
        description:
        "Card 4",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "REST Api", icon: apiIcon },
            { name: "React", icon: reactIcon },
            { name: "Figma", icon: figmaIcon },
            { name: "Canva", icon: canvaIcon },
            { name: "Netlify", icon: netlifyIcon },
        ],
        image: tastyMockup,
        deploymenturl: "https://jolly-sunshine-9cadfb.netlify.app/",
        githuburl: "https://github.com/adammuana20/crown-clothing",
        githubicon: FiGithub,
        deploymenticon: FiLink,
        colors: {
            main: "main-btn",
            second: "secondary-btn",
            icon: "white",
            projectcolor: "#70B9BE",
        },
    },
] as const;