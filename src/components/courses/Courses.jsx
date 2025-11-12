import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CircleLoader } from "react-spinners";
import { Link, NavLink } from "react-router";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://a-10-online-learning-server.vercel.app/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CircleLoader color="#3B82F6" size={80} />
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center">All Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
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
            <div className="p-5 flex flex-col justify-between flex-1">
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
              </div>
              <div className="flex gap-3 mt-auto">
                <button className="mt-auto btn  bg-blue-600 text-white text-md font-medium hover:bg-blue-700 transition">
                  <Link to={`/details/${course._id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
