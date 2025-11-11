import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../components/context/AuthContext";

const AddCourse = () => {
  const { user } = useContext(AuthContext);

  const [courseData, setCourseData] = useState({
    title: "",
    image: "",
    price: "",
    duration: "",
    category: "",
    description: "",
    isFeatured: false,
    email: user?.email,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setCourseData({
      ...courseData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/courses", courseData)
      .then(() => {
        toast.success("Course added successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to add course!");
      });
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Add New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 10 hours)"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Web Development)"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Course Description"
          className="textarea textarea-bordered w-full"
          onChange={handleChange}
          required
        />

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isFeatured"
            className="checkbox"
            onChange={handleChange}
          />
          <label>Mark as Featured Course</label>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
