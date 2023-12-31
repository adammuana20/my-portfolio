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

export const aboutMe = [
  { description: "Hi, I'm Adam Clint P. Muaña, a graduate in Information Technology from FEU Diliman.\n\nPassionate about technology and problem-solving, I've acquired valuable programming and system development skills during my academic journey.\n\nI stay updated on the latest tech trends and am excited about contributing to innovative solutions.\n\nLet's connect and explore the possibilities!", face: 'front' },
  { description: "I'm a Front End developer from the Philippines.\n\nI create websites with a focus on user experience and responsiveness.\n\nI'm curious to learn more about developing scalable distribution systems, enjoy problem-solving, and prioritize writing maintainable code.\n\nResponsive design ensures your website is accessible to all users, regardless of their devices.", face: 'right' },
  { description: "I've freelanced for over a year in web development, specializing in crafting WordPress websites.\n\nI'm skilled in customizing themes, integrating plugins, and turning PSD designs into HTML.\n\nExcited to tackle new challenges and bring my expertise to your projects!", face: 'back' },
  { description: "When I'm not coding, you can usually find me unwinding with online games.\n\nI enjoy the intensity of FPS games, the strategy in Dota 2, and the immersive worlds of MMORPGs. Gaming not only gives me a break from coding but also inspires creativity.\n\nLet's connect over our shared interests in technology and gaming!", face: 'left' },
  { description: "I'm a CMS Developer passionate about my work at BetMGM, one of the largest gambling companies in the US.\n\nMy focus includes creating engaging promotion pages and building custom pages from the ground up.\n\nI take pride in ensuring the quality of my work, collaborating with teammates, and conducting thorough cross-browser checks for a seamless user experience.", face: 'top' },
  { description: "I proudly own Perhaps Manila, a clothing brand in the Philippines that stands for style, comfort, and individuality.\n\nAs the creative force behind the brand, I manage everything from design concepts to maintaining our website.\n\nCreating a smooth online experience for our customers isn't just a job; it's my passion. I believe in the power of fashion to express identity, and our clothing line reflects that belief.", face: 'bottom' },
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
      link: "https://www.linkedin.com/in/adam-clint-mua%C3%B1a-7934a9180/",
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
          icon: [htmlIcon],
          color: ["#F1662A"],
        },
        {
          title: "CSS",
          hash: "#CSS",
          icon: [cssIcon],
          color: ["#1572B6"],
        },
        {
          title: "JavaScript",
          hash: "#JavaScript",
          icon: [jsIcon],
          color: ["#F7DF1E"],
        },
        {
          title: "TypeScript",
          hash: "#TypeScript",
          icon: [tsIcon],
          color: ["#007ACC"],
        },
        {
          title: "React",
          hash: "#React",
          icon: [reactIcon],
          color: ["#61DAFB"],
        },
        {
          title: "Node.js",
          hash: "#Node.js",
          icon: [nodejsIcon],
          color: ["#339933"],
        },
        {
          title: "Tailwind",
          hash: "#Tailwind",
          icon: [tailwindcssIcon],
          color: ["#38B2AC"],
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
          icon: [sasscssIcon],
          color: ["#CC6699"],
        },
        {
          title: "Styled Components",
          hash: "#StyledComponents",
          icon: [styledcomponentsIcon],
          color: ["#ff72b8"],
        },
      ],
    },
  ] as const;
  
  export const skillsDataDesign = [
    {
      skillsTitle: "Design",
      skills: [
        { title: "Figma", hash: "#Figma", icon: [figmaIcon], color: ["#F24E1E"] },
        { 
          title: "Adobe Photoshop", 
          hash: "#Adobe Photoshop", 
          icon: [photoshopIcon, photoshopIconLight],
          color: ["#001E36", "#31A8FF"],
        },
        { title: "Canva", hash: "#Canva", icon: [canvaIcon], color: ["#00C4CC"] },
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
          icon: [wordpressIcon],
          color: ["#21759B"],
        },
        {
          title: "Sitecore",
          hash: "#Sitecore",
          icon: [sitecoreIcon],
          color: ["#E53028"],
        },
      ],
    },
  ] as const;