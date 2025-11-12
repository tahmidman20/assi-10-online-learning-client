import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../components/context/AuthContext";

const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("enrolled")) || [];
    setCourses(stored);
    if (user?.email) {
      axios
        .get(
          `https://a-10-online-learning-server.vercel.app/enroll?email=${user.email}`
        )
        .then((res) => setCourses(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        My Enrolled Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="card bg-base-100 shadow-xl border">
            <figure>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body">
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-600">${course.price}</p>
              <p className="text-gray-500">{course.email}</p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          You have not enrolled in any courses yet.
        </p>
      )}
    </div>
  );
};

export default MyEnrolledCourses;
