const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-linear-to-r from-[#01191d] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-300 font-bold text-center mb-2">
          Get In <span className="text-outline">Touch</span>
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Have a project in mind or want to connect? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">
                  ayushprj22@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">
                  +91 9737334436
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">
                  Nadiad, Gujarat, India
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Availability</p>
                <p className="text-teal-400 font-medium">
                  Open to Work
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-4">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-teal-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-linear-to-r from-teal-500 to-teal-700 text-white font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;