import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../components/context/AuthContext";
import Login from "../components/authentication/Login";

const ViewDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://a-10-online-learning-server.vercel.app/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    <Login></Login>;
  }

  const { title, image, price, duration, category, description } = course;

  const handleEnroll = () => {
    if (!user) {
      toast.error("Please login to enroll!");
      return;
    }

    const enrollData = {
      courseId: course._id,
      title,
      image,
      price,
      email: user.email,
    };

    axios
      .post("https://a-10-online-learning-server.vercel.app/enroll", enrollData)
      .then(() => {
        toast.success("Enrolled successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        <img src={image} alt={title} className="rounded-xl shadow-xl w-full" />{" "}
        <div className="space-y-4">
          <p>
            <span className="font-semibold">Category:</span>{" "}
            <span className="badge badge-secondary">{category}</span>
          </p>

          <p>
            <span className="font-semibold">Duration:</span> {duration}
          </p>

          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-2xl font-bold text-blue-600">${price}</span>
          </p>

          <p className="text-gray-700">{description}</p>

          <button
            onClick={handleEnroll}
            className="btn btn-primary w-full mt-4"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
