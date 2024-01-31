import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,


  nodejs,
  mongodb,
  git,
 
  docker,
 
  MySql,
  carrent,
  jobit,
  tripguide,
  threejs,
  internpe,
  linkedin,
 
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title:"Frontend Developer",
    icon:mobile,

  },

 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
 
];

const technologies: TTechnology[] = [
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
 
  {
    name: "React JS",
    icon: reactjs,
  },

 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
  {
    name:"MySql",
    icon: MySql,
  },
  
];


const experiences: TExperience[] = [
  
  {
    title: "Content Creator",
    companyName: "LinkedIn | Self Employed |",
    icon:linkedin,
 // You can use an appropriate icon or placeholder
    iconBg: "black", // You can choose a suitable background color
    date: "March 2023 - Present",
    points: [
      "Spearheading AI and tech talk content creation for a growing audience.",
      "Crafting engaging narratives to bridge the gap between cutting-edge technology and everyday understanding.",
      "Delivering insightful content on the latest in AI, software solutions, and market updates.",
    ],
  },

  {
    title: "Web Development Intern",
    companyName: "InternPE",
    icon:internpe,
 // You can use an appropriate icon or placeholder
    iconBg: "black", // You can choose a suitable background color
    date: "June 2023 - July 2023",
    points: [
      "Completed a one-month internship focused on HTML and CSS.",
      "Contributed to the development of web projects.",
      "Gained practical experience in front-end technologies.",
      "Collaborated effectively in a team environment.",
    ],
  },

  

];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Twitter",
    description:
      "Developed a Twitter clone backend with Node.js, Express.js, and SQLite. Implemented secure user authentication using JWT tokens, designed RESTful APIs for user-related operations such as tweeting, following, and liking, and ensured data integrity and security throughout the application.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "purple-text-gradient",
      },
    ],
    image: carrent, // Replace with the actual image or use a placeholder
    sourceCodeLink: "https://github.com/", // Add the actual GitHub repository link
  },
  {
    name: "E-commerce Food Website",
    description:
      "Led the successful development of an e-commerce food website using Bootstrap, HTML, and CSS. Showcased expertise in front-end web development, leveraging Bootstrap’s responsive framework to create an intuitive and visually appealing online platform.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "purple-text-gradient",
      },
    ],
    image: jobit, // Replace with the actual image or use a placeholder
    sourceCodeLink: "https://venkatkumar23.github.io/Ecommerce-Food-Website/", // Add the actual GitHub repository link
  },
  {
    name: "Generative Design of Nose Landing Gear",
    description:
      "Researched how to design lighter aircraft landing gear using a computer program called generative design. Compared this new method with the usual way engineers design things. Found that the new method made the landing gear 36% lighter without making it weaker.",
    tags: [
      {
        name: "fusion360",
        color: "blue-text-gradient",
      },
      {
        name: "core-related",
        color: "gray-text-gradient",
      },
    ],
    image: tripguide, // Replace with the actual image or use a placeholder
    sourceCodeLink: "https://github.com/", // Add the actual GitHub repository link
  },
  // ... (other projects)
];





export { services, technologies,testimonials, experiences, projects };
