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
  { description: "Hi, I'm Adam Clint P. Muaña, I graduated from FEU Diliman with a degree in Information Technology.\n\n Passionate about technology and problem-solving, I've gained valuable skills in programming and system development during my academic journey. \n\n I stay updated on the latest tech trends and am excited about contributing to innovative solutions.\n\n Let's connect and explore the possibilities!", face: 'front' },
  { description: "I'm a Front End developer from Philippines. \n\n I build websites with a focus on providing the experience for everyone using them and responsiveness.\n\n Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code.\n\n A responsive design makes your website accessible to all users, regardless of their devices.", face: 'right' },
  { description: "I have worked as a freelancer with over a year of experience in web development.\n\n During this time, I specialized in crafting websites using WordPress, where I've honed my skills in customizing themes, integrating various plugins, and seamlessly transforming PSD designs into HTML.\n\nExcited to take on new challenges and contribute my expertise to your projects!", face: 'back' },
  { description: "When I'm not immersed in coding, you can often find me relaxing and unwinding by playing online games.\n\nI have a particular fondness for the intensity of FPS games, the strategic depth of Dota 2, and the immersive worlds of MMORPGs. \n\nGaming not only provides a break from the complexities of coding but also serves as a source of inspiration and creativity.\n\nLet's connect over shared interests in technology and gaming.", face: 'left' },
  { description: 'A passionate CMS Developer currently contributing my skills to one of the largest gambling companies in the US, BetMGM.\n\nIn my role, I specialize in crafting engaging promotion pages and building custom pages from scratch.\n\nI take pride in quality checking my own work and collaborating with teammates to maintain top-notch standards. Additionally, I conduct thorough cross-browser checks to guarantee a seamless experience for all users.', face: 'top' },
  { description: "I am also the proud owner of Perhaps Manila in the Philippines, a clothing brand that represents style, comfort, and individuality.\n\nAs the creative mind behind the brand, I handle everything from design concepts to the development and maintenance of our website.\n\n Crafting a seamless online experience for our customers is not just a task; it's a passion. I believe in the power of fashion to express identity, and our clothing line is a testament to that belief.", face: 'bottom' },
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