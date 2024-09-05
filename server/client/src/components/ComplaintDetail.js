import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useComplaintContext } from "../hooks/useComplaint";

<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { json } from "express";

const ComplaintDetail = ({ complaint }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const { dispatch } = useComplaintContext();
  const navigate = useNavigate();
=======
const ComplaintDetail = ({ complaint }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const { dispatch } = useComplaintContext();
>>>>>>> dcbf0145538be99e4ce197c33d579f0fc2ed3fc6

  const toggleDescription = (id) => {
    setExpandedPost((prevId) => (prevId === id ? null : id));
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5555/api/complaint/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
<<<<<<< HEAD
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      dispatch({ type: "DELETE_COMPLAINT", playload: json });
      // toast.success("Post deleted successfully!");
      console.log("Post deleted successfully!");
    } catch (error) {
      console.log(error);
=======

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      dispatch({ type: "DELETE_COMPLAINT", payload: json });
      console.log("Complaint deleted successfully!");
    } catch (error) {
      console.log("Error deleting complaint:", error);
>>>>>>> dcbf0145538be99e4ce197c33d579f0fc2ed3fc6
    }
  };

  return (
    <div
      key={complaint._id}
      className="bg-slate-600 border-spacing-3 flex flex-col justify-between text-white mx-auto p-6 rounded-md m-4 relative lg:w-full pb-10 sm:h-auto"
    >
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2>
            <span className="text-green-400 text-1xl">Phone:</span>
          </h2>
          <span className="text-white text-1xl">{complaint.phone}</span>
        </div>
        <h2>
          <span className="text-green-400 text-1xl grid place-content-center mb-5">
            Complaint:
          </span>
        </h2>
        <p
          onClick={() => toggleDescription(complaint._id)}
          className="cursor-pointer first-letter:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left"
        >
          {expandedPost === complaint._id
            ? complaint.complaint
            : `${complaint.complaint.slice(0, 400)}...`}
        </p>
      </div>
      <span className="flex gap-2 mt-2 text-indigo-800 flex-row justify-center bg-slate-400 p-2 rounded w-32 absolute bottom-6 right-7">
        {formatDistanceToNow(new Date(complaint.createdAt), {
          addSuffix: true,
        })}
      </span>
      <button
<<<<<<< HEAD
        onClick={handleDelete}
        className="bg-red-600 rounded-full w-20 p-2 mt-5 absolute bottom-6 shadow-md "
=======
        onClick={() => handleDelete(complaint._id)}
        className="bg-red-600 rounded-full w-20 p-2 mt-5 absolute bottom-6 shadow-md"
>>>>>>> dcbf0145538be99e4ce197c33d579f0fc2ed3fc6
      >
        Delete
      </button>
    </div>
  );
};

export default ComplaintDetail;
