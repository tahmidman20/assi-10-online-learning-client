import React from "react";
import { motion } from "framer-motion";

const Instructors = () => {
  const instructors = [
    {
      name: "John Anderson",
      role: "Web Development Expert",
      img: "https://i.ibb.co.com/s9RGPyGq/1.jpg",
    },
    {
      name: "Sarah Mitchell",
      role: "UI/UX Designer",
      img: "https://i.ibb.co.com/RkfWNz43/3.jpg",
    },
    {
      name: "David Wilson",
      role: "Digital Marketing Specialist",
      img: "https://i.ibb.co.com/mCChFBbQ/Clipdrop-Remove-background.jpg",
    },
  ];

  return (
    <div>
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Top Instructors
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {instructors.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 bg-gradient-to-tr from-blue-50 to-white shadow-xl rounded-2xl text-center border border-gray-200 hover:shadow-2xl"
            >
              <img
                src={inst.img}
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg"
                alt="Instructor"
              />
              <h3 className="text-xl font-semibold">{inst.name}</h3>
              <p className="text-gray-500">{inst.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Instructors;
