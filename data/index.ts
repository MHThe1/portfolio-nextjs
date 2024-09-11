export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Philosophies", link: "#philosophies" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Automate-Routine for BRACU Students",
    des: "Pre Registration is a mess, and I wanted to make it easier to get the perfect combination of course and sections for each student. So I built this app with React.js in the frontend and Django REST API in the backend.",
    img: "/autoroutine.jpg",
    iconLists: [
      { icon: "/icons/react.svg", name: "React" },
      { icon: "/icons/django.svg", name: "Django" },
      { icon: "/icons/django-rest.svg", name: "Django REST" },
      { icon: "/icons/tailwindcss.svg", name: "Tailwind CSS" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
    ],
    link: "https://automate-routine.vercel.app/",
  },
  {
    id: 2,
    title: "The Quizzer - Sitcom Quiz App",
    des: "Simple yet elegant quiz app for sitcom fans. Built with React.js",
    img: "/thequizzer.jpg",
    iconLists: [
      { icon: "/icons/react.svg", name: "React" },
      { icon: "/icons/tailwindcss.svg", name: "Tailwind CSS" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
    ],
    link: "https://the-quizzer.vercel.app/",
  },
  {
    id: 3,
    title: "An anonymous Q&A platform",
    des: "A platform for anonymous Q&A. Built with Flask.",
    img: "/annoytext.jpg",
    iconLists: [
      { icon: "/icons/flask.svg", name: "Flask" },
      { icon: "/icons/html-5.svg", name: "HTML5" },
      { icon: "/icons/css-3.svg", name: "CSS3" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
    ],
    link: "https://github.com/MHThe1/anonymous-qna-platform",
  },
  {
    id: 4,
    title: "Stuber - A safe ride sharing app for students",
    des: "A ride sharing app for students. Built completely on Django and MySQL. Users are verified through their school email.",
    img: "/stuber.jpg",
    iconLists: [
      { icon: "/icons/django.svg", name: "Django" },
      { icon: "/icons/mysql.svg", name: "MySQL" },
      { icon: "/icons/html-5.svg", name: "HTML5" },
      { icon: "/icons/css-3.svg", name: "CSS3" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
    ],
    link: "https://github.com/MHThe1/Django-mysql-Student-Ride-Sharing-service",
  },
  {
    id: 5,
    title: "FoodThanda - Restaurant's food ordering app",
    des: "A nice and slick design for ordering food. Built with React.js and Node.js",
    img: "/foodthanda.jpg",
    iconLists: [
      { icon: "/icons/react.svg", name: "React" },
      { icon: "/icons/nodejs.svg", name: "Node.js" },
      { icon: "/icons/tailwindcss.svg", name: "Tailwind CSS" },
      { icon: "/icons/javascript.svg", name: "JavaScript" },
    ],
    link: "https://github.com/MHThe1/food-ordering-react-app",
  },
];

export const philosophies = [
  {
    quote:
      "Programming isn't just about writing code; it's about crafting solutions that make lives easier and experiences more engaging. Every line of code has the power to transform ideas into reality.",
    title: "The Essence of Coding",
  },
  {
    quote:
      "Web development is an art form, blending creativity with functionality. It's the bridge between vision and user interaction, where design meets purpose and every pixel serves a purpose.",
    title: "The Beauty of Web Design",
  },
  {
    quote:
      "App development is like sculpting in the digital world. It requires patience, precision, and a deep understanding of user needs. A well-built app isn't just useful; it's intuitive, seamless, and feels like an extension of the user.",
    title: "The Craft of App Development",
  },
  {
    quote:
      "In web development, simplicity is key. Stripping down a design to its core elements while maintaining functionality is where true mastery lies. Minimalism often leads to the most impactful results.",
    title: "The Power of Simplicity",
  },
  {
    quote:
      "The beauty of programming lies in its limitless potential. With a few keystrokes, you can build something that touches the lives of millions. It's a journey of constant learning and evolving.",
    title: "The Journey of a Programmer",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Started my frontend journey recently with ReactJS, and catching up super quick!",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "I have been working with Flask, Django, RESTAPI for the past 3 years and recently I've started using NextJS as well.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Competetive Programming",
    desc: "I sometimes dive into the world of competitive programming and solve problems in C++ and sometimes Python.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "An early bird",
    desc: "I have been on the web design space since 2015, while still in high school. Back then I used to design websites in Wapka.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
