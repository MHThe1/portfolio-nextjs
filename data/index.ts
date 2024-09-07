export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Philosophies", link: "#philosophies" },
    {name: "Experiences", link: "#experiences" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working with JS frameworks such as ReactJS, NextJS",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Automate-Routine for BRACU Students",
      des: "Pre Registration is a mess, and I wanted to make it easier to get the perfect combination of course and sections for each student. So I built this app with React.js in the frontend and Django REST API in the backend.",
      img: "/autoroutine.jpg",
      iconLists: ["/icons/react.svg", "/icons/django.svg", "/icons/django-rest.svg", "/icons/tailwindcss.svg", "/icons/javascript.svg",],
      link: "https://automate-routine.vercel.app/",
    },
    {
      id: 2,
      title: "The Quizzer - Sitcom Quiz App",
      des: "Simple yet elegent quiz app for sitcom fans. Built with React.js",
      img: "/thequizzer.jpg",
      iconLists: ["/icons/react.svg", "/icons/tailwindcss.svg", "/icons/javascript.svg",],
      link: "https://the-quizzer.vercel.app/",
    },
    {
      id: 3,
      title: "An anonymous Q&A platform",
      des: "A platform for anonymous Q&A. Built with Flask.",
      img: "/annoytext.jpg",
      iconLists: ["/icons/flask.svg", "/icons/html-5.svg", "/icons/css-3.svg", "/icons/javascript.svg",],
      link: "https://github.com/MHThe1/anonymous-qna-platform",
    },
    {
      id: 4,
      title: "Stuber - A safe ride sharing app for students",
      des: "A ride sharing app for students. Built completely on Django and MySQL. User's are verified through their school email.",
      img: "/stuber.jpg",
      iconLists: ["/icons/django.svg", "/icons/mysql.svg", "/icons/html-5.svg", "/icons/css-3.svg", "/icons/javascript.svg"],
      link: "https://github.com/MHThe1/Django-mysql-Student-Ride-Sharing-service",
    },
    {
      id: 5,
      title: "FoodThanda - Resturant's food ordering app",
      des: "A nice and slick design for ordering food. Built with React.js and Node.js",
      img: "/foodthanda.jpg",
      iconLists: ["/icons/react.svg", "/icons/nodejs.svg", "/icons/tailwindcss.svg", "/icons/javascript.svg",],
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
      desc: "Started my frontend journey recently with ReactJS, and cacting up super quick!",
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
      desc: "I have been on the web design space since 2015, when I was in high school. I used to design websites in Wapka.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
