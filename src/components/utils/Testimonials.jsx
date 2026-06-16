import { testimonials } from "../../data/data";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-linear-to-r from-[#022c2b] to-[#01191d]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-300 font-bold text-center mb-2">
          My <span className="text-outline">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-teal-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-300 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
