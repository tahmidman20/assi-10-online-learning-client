import React, { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { AuthContext } from "../components/context/AuthContext";
import { NavLink } from "react-router";

const MyAddedCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [updatedData, setUpdatedData] = useState({ title: "", price: "" });

  const fetchCourses = useCallback(() => {
    if (!user?.email) return;
    axios
      .get(`http://localhost:3000/courses?email=${user.email}`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/courses/${id}`)
          .then(() => {
            Swal.fire("Deleted!", "Your course has been deleted.", "success");
            fetchCourses();
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete course!", "error");
          });
      }
    });
  };

  const openModal = (course) => {
    setEditingCourse(course);
    setUpdatedData({
      title: course.title,
      price: course.price,
    });
    document.getElementById("update_modal").showModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:3000/courses/${editingCourse._id}`, updatedData)
      .then(() => {
        toast.success("Course updated successfully!");
        document.getElementById("update_modal").close();
        fetchCourses();
      })
      .catch(() => toast.error("Failed to update course!"));
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Added Courses</h2>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          You haven't added any courses yet.
        </p>
      ) : (
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

                <div className="card-actions justify-end mt-4 gap-2">
                  <button className="btn btn-primary btn-sm">
                    <NavLink to={`/details/${course._id}`}>
                      View Details
                    </NavLink>
                  </button>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => openModal(course)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDelete(course._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Update Course</h3>

          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="title"
              value={updatedData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Course Title"
              required
            />
            <input
              type="number"
              name="price"
              step="any"
              value={updatedData.price}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Course Price"
              required
            />

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("update_modal").close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyAddedCourses;
