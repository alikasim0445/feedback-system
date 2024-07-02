import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useComplaintContext } from "../hooks/useComplaintContext";

import { useNavigate } from "react-router-dom";

const ComplaintDetail = ({ complaint }) => {
  const [expandedPost, setExpandedPost] = useState(null);
  const { handleDelete } = useComplaintContext();
  const navigate = useNavigate();

  const toggleDescription = (id) => {
    setExpandedPost((prevId) => (prevId === id ? null : id));
  };

  const handleDeletePost = () => {
    handleDelete(complaint._id);
    navigate("/complaintdetail");
    // toast.success("Post deleted successfully!");
  };

  return (
    <div
      key={complaint._id}
      className="bg-slate-600 border-spacing-3 flex flex-col justify-between text-white mx-auto p-6 rounded-md m-4 relative lg:w-full pb-10"
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
        onClick={handleDeletePost}
        className="bg-red-600 rounded-full w-20 p-2 mt-5 absolute bottom-6 shadow-md "
      >
        Delete
      </button>
    </div>
  );
};

export default ComplaintDetail;
