import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems } from "../../data/data";

const Navbar = () => {
  const [activeSec, setActiveSec] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#01191d]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-outline cursor-pointer"
          >
            &lt;Ayush /&gt;
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white text-sm uppercase">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`transition-colors hover:text-teal-400 ${
                    activeSec === item.id ? "text-teal-400" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl z-[60]"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#01191d]/95 backdrop-blur-lg flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8 text-2xl font-light uppercase text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors hover:text-teal-400 ${
                    activeSec === item.id ? "text-teal-400" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
