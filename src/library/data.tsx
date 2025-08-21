import htmlIcon from "../assets/icons/htmlicon.svg";
import cssIcon from "../assets/icons/cssicon.svg";
import jsIcon from "../assets/icons/javascripticon.svg";
import apiIcon from "../assets/icons/apiicon.svg";
import reactIcon from "../assets/icons/reacticon.svg";
import figmaIcon from "../assets/icons/figmaicon.svg";
import canvaIcon from "../assets/icons/canvaicon.svg";
import netlifyIcon from "../assets/icons/netlifyicon.svg";
import tsIcon from "../assets/icons/typescripticon.svg";
import nodejsIcon from "../assets/icons/nodejsicon.svg";
import tailwindcssIcon from "../assets/icons/tailwindicon.svg";
import expressIcon from "../assets/icons/expressicon.svg";
import expressIconWhite from "../assets/icons/expressiconwhite.svg";
import sasscssIcon from "../assets/icons/sassicon.svg";
import wordpressIcon from "../assets/icons/wordpressicon.svg";
import photoshopIcon from "../assets/icons/adobephotoshopicon.svg";
import photoshopIconLight from "../assets/icons/adobephotoshopiconwhite.svg";
import sitecoreIcon from "../assets/icons/sitecoreicon.svg";
import styledcomponentsIcon from "../assets/icons/styledcomponentsicon.svg";
import firebaseIcon from "../assets/icons/firebase-icon.svg";
import chartJSIcon from "../assets/icons/chartjs.svg";
import reactRouter from "../assets/icons/react-router.svg";
import reactRouterWhite from "../assets/icons/react-router-white.svg";
import renderIcon from "../assets/icons/RenderBlack.png";
// import renderIconWhite from "../assets/icons/RenderWhite.png";
import mongoDbIcon from "../assets/icons/mongodbicon.svg";
import hostingerIcon from "../assets/icons/hostinger.svg";
// import materialUI from '../assets/icons/material-ui.svg'

import perhapsManila from "../assets/images/prhps-mnl.jpg";
import vanlife from "../assets/images/vanlife.jpg";
import jobify from "../assets/images/jobify.png";
import dentistApp from "../assets/images/dentist-app.png";

import Privacy from "../components/privacy/Privacy.component";
import Imprint from "../components/imprint/Imprint.component";
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
  {
    description:
      "Hi, I'm Adam Clint P. Muaña, a graduate in Information Technology from FEU Diliman.\n\nPassionate about technology and problem-solving, I've acquired valuable programming and system development skills during my academic journey.\n\nI stay updated on the latest tech trends and am excited about contributing to innovative solutions.\n\nLet's connect and explore the possibilities!",
    face: "front",
  },
  {
    description:
      "I'm a Front End developer from the Philippines.\n\nI create websites with a focus on user experience and responsiveness.\n\nI'm curious to learn more about developing scalable distribution systems, enjoy problem-solving, and prioritize writing maintainable code.\n\nResponsive design ensures your website is accessible to all users, regardless of their devices.",
    face: "right",
  },
  {
    description:
      "I've freelanced for over a year in web development, specializing in crafting WordPress websites.\n\nI'm skilled in customizing themes, integrating plugins, and turning PSD designs into HTML.\n\nExcited to tackle new challenges and bring my expertise to your projects!",
    face: "back",
  },
  {
    description:
      "When I'm not coding, you can usually find me unwinding with online games.\n\nI enjoy the intensity of FPS games, the strategy in Dota 2, and the immersive worlds of MMORPGs. Gaming not only gives me a break from coding but also inspires creativity.\n\nLet's connect over our shared interests in technology and gaming!",
    face: "left",
  },
  {
    description:
      "I'm a CMS Developer passionate about my work at BetMGM, one of the largest gambling companies in the US.\n\nMy focus includes creating engaging promotion pages and building custom pages from the ground up.\n\nI take pride in ensuring the quality of my work, collaborating with teammates, and conducting thorough cross-browser checks for a seamless user experience.",
    face: "top",
  },
  {
    description:
      "I proudly own Perhaps Manila, a clothing brand in the Philippines that stands for style, comfort, and individuality.\n\nAs the creative force behind the brand, I manage everything from design concepts to maintaining our website.\n\nCreating a smooth online experience for our customers isn't just a job; it's my passion. I believe in the power of fashion to express identity, and our clothing line reflects that belief.",
    face: "bottom",
  },
] as const;

export const projectsData = [
  {
    title: "Perhaps Manila",
    description:
      "E-commerce platform where style meets simplicity! Our clothing brand offers a curated selection for everyone. With features like adding favorites, seamless payments via Stripe, and tracking orders, shopping has never been easier. Experience convenience and fashion-forward choices with us.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "React Router", icon: reactRouter },
      { name: "REST Api", icon: apiIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Netlify", icon: netlifyIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Styled Components", icon: styledcomponentsIcon },
      { name: "Typescript", icon: tsIcon },
    ],
    image: perhapsManila,
    deploymenturl: "https://perhaps-manila.netlify.app/",
    // githuburl: "https://github.com/adammuana20/crown-clothing",
    // githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Vanlife",
    description:
      "Global van reservation platform, where adventure knows no bounds! Whether you're a traveler seeking the perfect ride or a van owner looking to share your wheels, we've got you covered. With seamless online reservations and the power of Chart.js for insightful data visualization, embark on your next journey with ease and confidence.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "React Router", icon: reactRouter },
      { name: "Chart JS", icon: chartJSIcon },
      { name: "REST Api", icon: apiIcon },
      { name: "Canva", icon: canvaIcon },
      { name: "Netlify", icon: netlifyIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Tailwind", icon: tailwindcssIcon },
      { name: "Typescript", icon: tsIcon },
      // { name: "Material UI", icon: materialUI },
    ],
    image: vanlife,
    deploymenturl: "https://travel-van.netlify.app/",
    // githuburl: "https://github.com/adammuana20/vanlife",
    // githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Jobify",
    description:
      "A MERN stack web application for browsing and posting job opportunities. Features user authentication, job search filters, and a responsive interface for employers and job seekers.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "React Router", icon: reactRouter },
      { name: "REST Api", icon: apiIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Express", icon: expressIcon },
      { name: "Node JS", icon: nodejsIcon },
      { name: "Mongo DB", icon: mongoDbIcon },
      { name: "Tailwind", icon: tailwindcssIcon },
      { name: "Render", icon: renderIcon },
      { name: "Typescript", icon: tsIcon },
    ],
    image: jobify,
    deploymenturl: "https://jobify-jf0q.onrender.com/",
    // githuburl: "https://github.com/adammuana20/crown-clothing",
    // githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "The Clinic",
    description:
      "A dental clinic app with a React.js frontend and WordPress backend. Patients can book appointments, track treatments, and make payments, while dentists manage schedules, procedures, and billing. Designed for a smooth, responsive experience and easy clinic management.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "React Router", icon: reactRouter },
      { name: "REST Api", icon: apiIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Wordpress", icon: wordpressIcon },
      { name: "Hostinger", icon: hostingerIcon },
      { name: "Tailwind", icon: tailwindcssIcon },
      { name: "Netlify", icon: netlifyIcon },
      { name: "Typescript", icon: tsIcon },
    ],
    image: dentistApp,
    deploymenturl: "https://ak-clinic.netlify.app/auth/signin",
    // githuburl: "https://github.com/adammuana20/crown-clothing",
    // githubicon: FiGithub,
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
        title: "React",
        hash: "#React",
        icon: [reactIcon],
        color: ["#61DAFB"],
      },
      {
        title: "React Router",
        hash: "#ReactRouter",
        icon: [reactRouter, reactRouterWhite],
        color: ["#D0021B"],
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: [tsIcon],
        color: ["#007ACC"],
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: [tailwindcssIcon],
        color: ["#38B2AC"],
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
      {
        title: "Mongo DB",
        hash: "#MongoDB",
        icon: [mongoDbIcon],
        color: ["#339933"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: [nodejsIcon],
        color: ["#3C873A"],
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressIcon, expressIconWhite],
        color: ["#000000", "#FFFFFF"],
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
        hash: "#AdobePhotoshop",
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
