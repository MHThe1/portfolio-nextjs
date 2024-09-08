import { FaLocationArrow, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
import BackgroundGrid from "./ui/BackgroundGrid";

const socialMedia = [
  {
    id: '1',
    link: 'https://twitter.com/mh_the1/',
    icon: <FaTwitter size={20} />,
  },
  {
    id: '2',
    link: 'https://linkedin.com/in/mehedi-hasan-tanvir-5507b0228/',
    icon: <FaLinkedinIn size={20} />,
  },
  {
    id: '3',
    link: 'https://github.com/mhthe1',
    icon: <FaGithub size={20} />,
  },
  {
    id: '4',
    link: 'https://instagram.com/mhthe1',
    icon: <FaInstagram size={20} />,
  },
  {
    id: '5',
    link: 'https://facebook.com/mhthe1',
    icon: <FaFacebookF size={20} />,
  },
];

const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-black-100 text-gray-600 dark:text-gray-300"
      id="contact"
    >
      <div className="relative w-full overflow-hidden">
        <BackgroundGrid reverse={true} />
        <div className="container pt-32 flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple-400">your</span> digital
            presence to the next level?
          </h1>
          <p className="dark:text-white-200 text-black md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:mehedihtanvir@gmail.com">
            <MagicButton
              title="mehedihtanvir@gmail.com"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="container flex mt-16 md:flex-row flex-col justify-between items-center mb-4">
          <p className="mb-4 md:mb-0 md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Mehedi H Tanvir
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <Link key={info.id} href={info.link} target="_blank" rel="noopener noreferrer">
                <div 
                  style={{ borderRadius: "0.60rem" }}
                  className="w-10 h-10 hover:scale-110 transition-all duration-300 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 text-white bg-black border border-black-300">
                  {info.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
