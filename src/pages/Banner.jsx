import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Learn New Skills Online
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Improve your skills with structured courses and hands-on learning.
            </p>
            <Link to="/courses">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition">
                Explore Courses
              </button>
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/NgnQ9GTN/banner-image.jpg"
              alt=""
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
