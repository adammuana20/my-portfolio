import htmlIcon from '../assets/icons/htmlicon.svg'
import cssIcon from '../assets/icons/cssicon.svg'
import jsIcon from '../assets/icons/javascripticon.svg'
import apiIcon from '../assets/icons/apiicon.svg'
import reactIcon from '../assets/icons/reacticon.svg'
import figmaIcon from '../assets/icons/figmaicon.svg'
import canvaIcon from '../assets/icons/canvaicon.svg'
import netlifyIcon from '../assets/icons/netlifyicon.svg'
import tsIcon from '../assets/icons/typescripticon.svg'
import nodejsIcon from '../assets/icons/nodejsicon.svg'
import tailwindcssIcon from '../assets/icons/tailwindicon.svg'
import expressIcon from '../assets/icons/expressicon.svg'
import expressIconWhite from '../assets/icons/expressiconwhite.svg'
import sasscssIcon from '../assets/icons/sassicon.svg'
import wordpressIcon from '../assets/icons/wordpressicon.svg'
import photoshopIcon from '../assets/icons/adobephotoshopicon.svg'
import photoshopIconLight from '../assets/icons/adobephotoshopiconwhite.svg'
import sitecoreIcon from '../assets/icons/sitecoreicon.svg'
import styledcomponentsIcon from '../assets/icons/styledcomponentsicon.svg'

import tastyMockup from '../assets/images/tasty_mockup.webp'

import Privacy from '../components/privacy/Privacy.component'
import Imprint from '../components/imprint/Imprint.component'
import { GoHome } from "react-icons/go";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiUser, CiMail } from "react-icons/ci";
import { FiGithub, FiLink, FiLinkedin } from "react-icons/fi";


export const navLinks = [
    { title: "Home", hash: "#home", icon: GoHome },
    { title: "About Me", hash: "#about-me", icon: CiUser },
    { title: "Skills", hash: "#skills", icon: HiOutlineWrenchScrewdriver },
    { title: "Projects", hash: "#projects", icon: AiOutlineFundProjectionScreen },
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

export const FooterLinks = [
    { name: "Imprint", hash: "#imprint", data: <Imprint /> },
    { name: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const footerSocials = [
    {
      link: "",
      icon: FiLinkedin,
      name: "linkedin",
    },
    {
      link: "https://github.com/adammuana20",
      icon: FiGithub,
      name: "github",
    },
    {
      link: "mailto:adammuanawork@gmail.com",
      icon: CiMail,
      name: "mail",
    },
] as const;

export const skillsDataWeb = [
    {
      skillsTitle: "Web Development",
      skills: [
        {
          title: "HTML",
          hash: "#html",
          icon: htmlIcon,
          color: "#F1662A",
        },
        {
          title: "CSS",
          hash: "#CSS",
          icon: cssIcon,
          color: "#1572B6",
        },
        {
          title: "JavaScript",
          hash: "#JavaScript",
          icon: jsIcon,
          color: "#F7DF1E",
        },
        {
          title: "TypeScript",
          hash: "#TypeScript",
          icon: tsIcon,
          color: "#007ACC",
        },
        {
          title: "React",
          hash: "#React",
          icon: reactIcon,
          color: "#61DAFB",
        },
        {
          title: "Node.js",
          hash: "#Node.js",
          icon: nodejsIcon,
          color: "#339933",
        },
        {
          title: "Tailwind",
          hash: "#Tailwind",
          icon: tailwindcssIcon,
          color: "#38B2AC",
        },
        {
          title: "Express",
          hash: "#Express",
          icon: [expressIcon, expressIconWhite],
          color: ["#000000", "#FFFFFF"],
        },
        {
          title: "SASS/SCSS",
          hash: "#SASS/SCSS",
          icon: sasscssIcon,
          color: "#CC6699",
        },
        {
          title: "Styled Components",
          hash: "#StyledComponents",
          icon: styledcomponentsIcon,
          color: "#ff72b8",
        },
      ],
    },
  ] as const;
  
  export const skillsDataDesign = [
    {
      skillsTitle: "Design",
      skills: [
        { title: "Figma", hash: "#Figma", icon: figmaIcon, color: "#F24E1E" },
        { 
          title: "Adobe Photoshop", 
          hash: "#Adobe Photoshop", 
          icon: [photoshopIcon, photoshopIconLight],
          color: ["#001E36", "#31A8FF"],
        },
        { title: "Canva", hash: "#Canva", icon: canvaIcon, color: "#00C4CC" },
      ],
    },
  ] as const;
  
  export const skillsDataCMS = [
    {
      skillsTitle: "CMS",
      skills: [
        {
          title: "WordPress",
          hash: "#WordPress",
          icon: wordpressIcon,
          color: "#21759B",
        },
        {
          title: "Sitecore",
          hash: "#Sitecore",
          icon: sitecoreIcon,
          color: "#E53028",
        },
      ],
    },
  ] as const;