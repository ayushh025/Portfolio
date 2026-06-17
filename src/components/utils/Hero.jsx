import { FaGithub } from "react-icons/fa";
import AnimatedTitles from "./AnimatedTitles";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/hero-sec.png')] bg-cover bg-center bg-no-repeat"></div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-light capitalize tracking-wide text-teal-500">
            Hello, I'm Ayush Prajapati
          </h3>
          <AnimatedTitles />
          <p className="mt-4 text-gray-300 max-w-xl">
            Building responsive web applications with React and modern web
            technologies. Always learning, creating, and improving.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-400">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              React.js
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
              Responsive Design
            </span>
          </div>

          <div className="flex gap-5 mt-8 justify-center md:justify-start text-gray-400">
            <a
              href="https://github.com/ayushh025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:text-teal-400 hover:bg-white/20 transition-all"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/ayush-prj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:text-teal-400 hover:bg-white/20 transition-all"
            >
              <LiaLinkedin size={22} />
            </a>

            <a
              href="mailto:ayushprj22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:text-teal-400 hover:bg-white/20 transition-all"
            >
              <HiOutlineMail size={22} />
            </a>

            <a
              href="https://wa.me/919737334436"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full hover:text-teal-400 hover:bg-white/20 transition-all"
            >
              <BsWhatsapp size={22} />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="px-6 py-2 text-sm rounded-full bg-linear-to-r from-teal-400 to-teal-700 font-light text-white hover:opacity-70 cursor-pointer"
            >
              View My Projects
            </button>

            <a
              href="/resume/my_resume.pdf"
              download
              className="px-6 py-2 text-sm rounded-full bg-white/10 backdrop-blur-md font-light text-white hover:opacity-70 transition-all inline-flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
