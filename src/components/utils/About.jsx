const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 bg-linear-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-300">
          About <span className="text-outline">Me</span>
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Get to know more about me
        </p>
        <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
          <div className="">
            <h3 className="text-xl font-semibold mb-4 text-white">Who am I?</h3>
            <p className="text-slate-300 mb-4">
              I'm a passionate Frontend Developer with a strong foundation in
              HTML, CSS, JavaScript, React.js, and responsive web design. I
              enjoy turning ideas into interactive, user-friendly web
              applications while focusing on clean code and modern development
              practices.
            </p>
            <p className="text-slate-300">
              I believe in continuous learning and consistently work on
              improving my skills by building projects, exploring new
              technologies, and solving real-world problems. My goal is to grow
              as a MERN Stack Developer and contribute to impactful digital
              experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-400">Name</p>
              <p className="font-medium text-white">Ayush Prajapati</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-400">Availability</p>
              <p className="font-medium text-teal-400">Open to Work</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium text-white break-all">
                ayushprj22@gmail.com
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium text-white">+91 9737334436</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10 sm:col-span-2">
              <p className="text-sm text-gray-400 mb-1">Education</p>
              <p className="font-medium text-white">
                Bachelor of Computer Applications (BCA)
              </p>
              <p className="text-gray-400 text-sm">Sardar Patel University</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10 sm:col-span-2">
              <p className="text-sm text-gray-400 mb-1">
                Professional Training
              </p>
              <p className="font-medium text-white">MERN Stack Development</p>
              <p className="text-gray-400 text-sm">
                Red & White Skill Education, Anand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
