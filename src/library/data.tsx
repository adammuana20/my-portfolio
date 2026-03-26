import { GoHome } from "react-icons/go";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CiUser, CiMail } from "react-icons/ci";
import { FiGithub, FiLink, FiLinkedin } from "react-icons/fi";

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
import axiosIcon from "../assets/icons/axiosicon.svg";
import reactRouter from "../assets/icons/react-router.svg";
import reactRouterWhite from "../assets/icons/react-router-white.svg";
import renderIcon from "../assets/icons/RenderBlack.png";
import mongoDbIcon from "../assets/icons/mongodbicon.svg";
import hostingerIcon from "../assets/icons/hostinger.svg";
import nextIcon from "../assets/icons/nextjsicon.svg";
import nextIconBlack from "../assets/icons/nextjsiconblack.svg";
import postgresqlIcon from "../assets/icons/postgresqlicon.svg";
import prismaIcon from "../assets/icons/prismaicon.svg";
import prismaIconWhite from "../assets/icons/prismaiconwhite.svg";
import vercelIcon from "../assets/icons/vercelicon.svg";
import stripeIcon from "../assets/icons/stripeicon.svg";
import paypalIcon from "../assets/icons/paypalicon.svg";
import jwtIcon from "../assets/icons/jwticon.svg";
import reactQueryIcon from "../assets/icons/reactqueryicon.svg";
import cloudinaryIcon from "../assets/icons/cloudinaryicon.svg";
import uploadthingIcon from "../assets/icons/uploadthingicon.svg";

import perhapsManila from "../assets/images/prhps-mnl.jpg";
// import vanlife from "../assets/images/vanlife.jpg";
import jobifyImg from "../assets/images/jobify.png";
import dentistApp from "../assets/images/dentist-app.png";
import prostore from "../assets/images/prostore.png";

import Privacy from "../components/privacy/Privacy.component";
import Imprint from "../components/imprint/Imprint.component";

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
      "I’m Adam Clint Muaña, a frontend-focused developer with 5 years of experience working on high-traffic web platforms.\n\nI specialize in building modern, scalable applications using React and Next.js, with strong experience in UI implementation, authentication, and fullstack systems.",
    face: "front",
  },
  {
    description:
      "I also work as a Fullstack developer, building end-to-end applications using modern tools like Next.js, Node.js, and databases such as PostgreSQL and MongoDB.\n\nI enjoy working on features like authentication, APIs, and payment integrations.",
    face: "right",
  },
  {
    description:
      "Outside of work, I enjoy playing basketball, online games, and badminton with my daughter.\n\nThese activities help me stay active, improve focus, and maintain a healthy work-life balance, which allows me to stay productive and consistent in my development work.",
    face: "back",
  },
  {
    description:
      "I’m a Frontend developer from the Philippines, passionate about creating responsive, user-friendly interfaces.\n\nI focus on clean design, performance, and delivering seamless user experiences across devices and browsers.",
    face: "left",
  },
  {
    description:
      "I’m committed to continuous learning and staying up to date with modern web technologies.\n\nI actively build real-world projects to improve my skills in frontend and fullstack development, focusing on writing clean, maintainable code and following best practices used in production environments.",
    face: "top",
  },
  {
    description:
      "My goal is to grow into a highly skilled frontend/fullstack developer and contribute to building scalable, impactful applications.\n\nI’m actively seeking opportunities where I can apply my skills, learn from experienced teams, and deliver meaningful solutions to real-world problems.",
    face: "bottom",
  },
] as const;

export const projectsData = [
  {
    title: "Prostore",
    description:
      "A fullstack e-commerce built with Next.js (App Router), TypeScript, and PostgreSQL. Features include authentication, role-based access, Stripe and PayPal integration (test mode), admin dashboard, and scalable backend using Prisma ORM. Implements modern practices such as server actions, form validation, and responsive UI.",
    technologies: [
      { name: "Next.js", icon: nextIconBlack },
      { name: "REST Api", icon: apiIcon },
      { name: "Postgres", icon: postgresqlIcon },
      { name: "Prisma", icon: prismaIcon },
      { name: "Tailwind", icon: tailwindcssIcon },
      { name: "Typescript", icon: tsIcon },
      { name: "Stripe", icon: stripeIcon },
      { name: "PayPal", icon: paypalIcon },
      { name: "Vercel", icon: vercelIcon },
      { name: "Uploadthing", icon: uploadthingIcon },
    ],
    image: prostore,
    deploymenturl: "https://prostore-iota-five.vercel.app/",
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
    title: "The Dentist",
    description:
      "A dental clinic app with a React.js frontend and WordPress backend. Patients can book appointments, track treatments, and make payments, while dentists manage schedules, procedures, and billing. Designed for a smooth, responsive experience and easy clinic management.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Axios", icon: axiosIcon },
      { name: "REST Api", icon: apiIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Wordpress", icon: wordpressIcon },
      { name: "Hostinger", icon: hostingerIcon },
      { name: "Tailwind", icon: tailwindcssIcon },
      { name: "Netlify", icon: netlifyIcon },
      { name: "Typescript", icon: tsIcon },
      { name: "TanStack Query", icon: reactQueryIcon },
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
  {
    title: "Jobify",
    description:
      "A fullstack application built with MERN stack, featuring JWT authentication, RESTful APIs. It allows users to manage job applications with CRUD functionality, filtering, search, and status tracking (pending, interview, declined). The backend uses Node.js, Express, and MongoDB with Mongoose, while the frontend leverages React and Context API.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "Express", icon: expressIcon },
      { name: "Node JS", icon: nodejsIcon },
      { name: "Mongo DB", icon: mongoDbIcon },
      { name: "Tailwind", icon: tailwindcssIcon },
      { name: "Render", icon: renderIcon },
      { name: "Typescript", icon: tsIcon },
      { name: "JWT & Bcrypt", icon: jwtIcon },
      { name: "TanStack Query", icon: reactQueryIcon },
      { name: "Cloudinary", icon: cloudinaryIcon },
    ],
    image: jobifyImg,
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
    title: "Perhaps Manila",
    description:
      "E-commerce platform where style meets simplicity! Our clothing brand offers a curated selection for everyone. With features like adding favorites, seamless payments via Stripe, and tracking orders, shopping has never been easier. Experience convenience and fashion-forward choices with us.",
    technologies: [
      { name: "React", icon: reactIcon },
      { name: "React Router", icon: reactRouter },
      { name: "REST Api", icon: apiIcon },
      { name: "Firebase", icon: firebaseIcon },
      { name: "Styled Components", icon: styledcomponentsIcon },
      { name: "Typescript", icon: tsIcon },
      { name: "Stripe", icon: stripeIcon },
      { name: "Netlify", icon: netlifyIcon },
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
  // {
  //   title: "Vanlife",
  //   description:
  //     "Global van reservation platform, where adventure knows no bounds! Whether you're a traveler seeking the perfect ride or a van owner looking to share your wheels, we've got you covered. With seamless online reservations and the power of Chart.js for insightful data visualization, embark on your next journey with ease and confidence.",
  //   technologies: [
  //     { name: "React", icon: reactIcon },
  //     { name: "React Router", icon: reactRouter },
  //     { name: "Chart JS", icon: chartJSIcon },
  //     { name: "REST Api", icon: apiIcon },
  //     { name: "Canva", icon: canvaIcon },
  //     { name: "Netlify", icon: netlifyIcon },
  //     { name: "Firebase", icon: firebaseIcon },
  //     { name: "Tailwind", icon: tailwindcssIcon },
  //     { name: "Typescript", icon: tsIcon },
  //     // { name: "Material UI", icon: materialUI },
  //   ],
  //   image: vanlife,
  //   deploymenturl: "https://travel-van.netlify.app/",
  //   // githuburl: "https://github.com/adammuana20/vanlife",
  //   // githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#70B9BE",
  //   },
  // },
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

export const skillsDataFrontend = [
  {
    skillsTitle: "{ Frontend }",
    skills: [
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
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextIconBlack, nextIcon],
        color: ["#000000", "#f3f3f3"],
      },
      {
        title: "React Router",
        hash: "#ReactRouter",
        icon: [reactRouter, reactRouterWhite],
        color: ["#D0021B"],
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
    ],
  },
] as const;

export const skillsDataBackend = [
  {
    skillsTitle: "{ Backend }",
    skills: [
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
      {
        title: "Postgres",
        hash: "#Postgres",
        icon: [postgresqlIcon],
        color: ["#336791"],
      },
      {
        title: "Prisma",
        hash: "#Prisma",
        icon: [prismaIcon, prismaIconWhite],
        color: ["#336791"],
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "{ Design }",
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
    skillsTitle: "{ CMS }",
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
