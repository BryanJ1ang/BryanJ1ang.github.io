// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Bryan",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
  "I’m a computer science student at the University of British Columbia. Despite growing up immersed in technology, taking my first CS course in university was when I started to truly appreciate the innovations that I use  everyday.  Since then, I’ve developed my software development skills through academics, personal projects and hackathons. In the future, I hope to develop technology has a meaningful impact on the world."
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [

  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "HTML",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Chess",
    skills: ["React, Java"],
    url: "https://github.com/BryanJ1ang/chess-spring",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Echo Homes",
    skills: ["React, Firebase, Docker"],
    url: "https://github.com/parthkumar-patel/Echo-Homes",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Blackjack",
    skills: ["Python"],
    url: "https://github.com/BryanJ1ang/Python-Blackjack",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "";
const miscellaneous = [
  
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "";
const contact = {
  pitch: "",
  copyright: "Bryan Jiang",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/bryanj1ang",
  //facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  //instagram: "https://instagram.com",
  linkedin: "https://linkedin.com/in/bryanj1ang",
  //resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
