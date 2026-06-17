import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeewwebv");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-20 px-6 bg-linear-to-r from-[#01191d] to-[#022c2b]"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-400">
            ✅ Message Sent Successfully!
          </h2>
          <p className="text-gray-400 mt-4">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

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
          Interested in my work? Feel free to reach out for opportunities,
          collaborations, or interviews.
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
                <p className="text-white font-medium">ayushprj22@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-medium">+91 9737334436</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Nadiad, Gujarat, India</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Availability</p>
                <p className="text-teal-400 font-medium">Open to Work</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <div className="mb-4">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-teal-500"
              />
            </div>

            <div className="mb-4">
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-teal-500"
              />

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-2"
              />
            </div>

            <div className="mb-4">
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white outline-none focus:border-teal-500 resize-none"
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-2"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 rounded-lg bg-linear-to-r from-teal-500 to-teal-700 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
