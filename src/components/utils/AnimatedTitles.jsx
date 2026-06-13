import { useEffect, useState } from "react";

const AnimatedTitles = () => {
  const roles = [
    { title: "React Developer" },
    { title: "Frontend Developer" },
    { title: "MERN Stack Developer" },
    { title: "Web Developer" },
  ];
  const [currRoleIdx, setCurrRoleIdx] = useState(0);
  const [currTxt, setCurrTxt] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = roles[currRoleIdx].title;
      if (!isDeleting) {
        if (currTxt === current) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(500);
        } else {
          setCurrTxt(current.substring(0, currTxt.length + 1));
          setTypingSpeed(150);
        }
      } else {
        if (currTxt === "") {
          setIsDeleting(false);
          setCurrRoleIdx((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setCurrTxt(current.substring(0, currTxt.length - 1));
          setTypingSpeed(150);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currTxt, isDeleting, currRoleIdx, roles, typingSpeed]);

  return (
    <div className="text-center md:text-start">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        <span className="text-outline pb-1">{currTxt}</span>
        <span className="inline-block h-7 md:h-14 w-0.5 bg-cyan-300 ml-1 animate-pulse"></span>
      </h1>
    </div>
  );
};

export default AnimatedTitles;
