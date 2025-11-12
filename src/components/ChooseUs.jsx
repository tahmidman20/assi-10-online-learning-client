import React from "react";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const features = [
    {
      title: "Expert Instructors",
      desc: "Learn from highly qualified industry professionals.",
      icon: "🎓",
    },
    {
      title: "Flexible Learning",
      desc: "Study anytime from mobile, tablet or computer.",
      icon: "⏰",
    },
    {
      title: "Certified Courses",
      desc: "Earn verified certificates after completion.",
      icon: "✅",
    },
  ];
  return (
    <div>
      <section className="py-20 ">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl border border-white hover:shadow-2xl cursor-pointer"
            >
              <div className="text-5xl text-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
