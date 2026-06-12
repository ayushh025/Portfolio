import { useEffect, useState } from "react";
import { navItems } from "../data/data";

const Navbar = () => {
  const [activeSec, setActiveSec] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = sec.id;
        }
      });
      setActiveSec(current);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/20 px-3 bg-black">
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl text-outline font-bold">Ayush</div>
        <ul className="hidden sm:flex space-x-8 text-white text-sm font-light uppercase">
          {navItems.map((item) => {
            return (
              <li
                className={`hover:text-teal-500 transition-colors ${activeSec === item.id ? "text-teal-400" : ""}`}
                key={item.id}
              >
                <a href={item.id}>{item.label}</a>
              </li>
            );
          })}
        </ul>
        <button className="ml-4 px-5 py-1 rounded-full bg-linear-to-r from-teal-500 to-teal-700 hover:opacity-90 text-white font-normal transition-all">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
