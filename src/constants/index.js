import mobile from "../assets/mobile.png";
import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import web from "../assets/web.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
// import figma from "../assets/tech/figma.png";
// import docker from "../assets/tech/docker.png";
import meta from "../assets/company/meta.png";
// import starbucks from "../assets/starbucks.png";
import tesla from "../assets/company/tesla.png";
import shopify from "../assets/company/shopify.png";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";
// import threejs from "../assets/threejs.png";
import drdl from "../assets/drdl.jpeg";
import rail from "../assets/company/rail.png"
import sap from "../assets/company/sap.png"
import saloon from "../assets/saloon.png"
import food from "../assets/food.png"
import grocery from "../assets/grocery.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  // {
  //   title: "Mechanical Engineer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "DRDL Internship",
    company_name: "DRDO",
    icon: drdl,
    iconBg: "#383E56",
    date: "October 2023 - November 2023",
    points: [
      "Developed advanced MATLAB and Python codes to simulate kinetic heating in missile systems, addressing the critical need to assess thermal and aerodynamic challenges encountered during high-speed atmospheric flight.",
      "Focused on analyzing the complex thermal and aerodynamic conditions faced by missiles, emphasizing the importance of maintaining structural integrity and optimizing performance under extreme environmental stress.",
      "Addressed the significant impact of kinetic heating due to high-speed atmospheric movement on missile systems by creating a versatile and user-friendly simulation tool.",
      "Improved the ability to predict and mitigate thermal stresses, contributing to more effective and reliable modern missile defense strategies.",
    ],
  },
  {
    title: "Indian Railway Internship",
    company_name: "Indian Railways",
    icon: rail,
    iconBg: "#E6DEDD",
    date: "march 2023 - April 2023",
    points: [
      "Conducted an in-depth study of key diesel engine systems, including the Power Pack, Fuel Oil System, Lube Oil System, Cooling System, and Turbo Air Super Charging System in WDM-3A and WDG-3A locomotives.",
      "Explored the functionality of crucial locomotive components such as the Air Compressor, Air Braking System, Traction Generator System, and Power Transmission, focusing on their roles in the overall operation.",
      "Prepared a detailed report on the repair, scheduled maintenance, and complete working of Diesel Electric Locomotives used in Indian Railways, highlighting practical insights and technical knowledge."
    ],
    
  },
 
  {
    title: "Front End Developer",
    company_name: "SAP Cadillus Cloud",
    icon: sap,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Saloon Booking Website",
    description:
      "This website was made by using React JS and deployed at Vercel. From this, the user can book appointments for his/her desired salons and can access services. It is not responsive now, so kindly view it on a laptop only.",
    tags: [
      {
        name: "react",
        color: "white",
      },
    ],
    image: saloon,
    source_code_link: "https://github.com/",
    view_link: "https://anirudh-saloons.vercel.app/", // Replace with actual URL
  },
  {
    name: "Food Delivery Website",
    description:
      "This website was made by using React JS and deployed at Vercel. From this, the user can order food items at his/her location. It is not responsive now, so kindly view it on a laptop only.",
    tags: [
      {
        name: "react",
        color: "white",
      },
    ],
    image: food,
    source_code_link: "https://github.com/",
    view_link: "https://anirudh-foods.vercel.app/", // Replace with actual URL
  },
  {
    name: "Grocery Website",
    description:
      "This website was made by using React JS and deployed at Netlify. From this, the user can order fruits, vegetables, etc. It is not responsive now, so kindly view it on a laptop only.",
    tags: [
      {
        name: "react",
        color: "white",
      },
    ],
    image: grocery,
    source_code_link: "https://github.com/",
    view_link: "https://anirudh-grocery.netlify.app/", // Replace with actual URL
  },
];


export { services, technologies, experiences, testimonials, projects };
