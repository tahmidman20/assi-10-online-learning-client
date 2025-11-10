import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Loading from "../Loading";
import { NavLink } from "react-router";
import { div } from "framer-motion/client";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/courses/popular")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 text-lg animate-pulse">
        <Loading></Loading>
      </p>
    );

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="w-11/12 mx-auto px-4 py-12 ">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course._id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={course.image || "https://via.placeholder.com/400x200"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {course.isFeatured && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">
                    Category: {course.category}
                  </p>
                  <p className="text-gray-900 font-bold text-lg mb-4">
                    ${course.price}
                  </p>
                  <button className="mt-auto btn  bg-blue-600 text-white text-md font-medium hover:bg-blue-700 transition">
                    <NavLink to="/details">View Details</NavLink>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="items-center text-center mt-10">
          <button className="btn  bg-blue-600 text-white font-medium hover:bg-blue-700 transition mx-auto w-50 text-lg">
            <NavLink to="/courses">See All Courses</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
