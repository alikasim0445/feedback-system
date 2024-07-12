import React, { useState } from "react";
import { useComplaintContext } from "../hooks/useComplaintContext";

const ComplaintForm = () => {
  const { dispatch } = useComplaintContext();
  const [phone, setPhone] = useState("");
  const [complaint, setComplaint] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComplaint = {
      phone,
      complaint,
    };

    try {
      const response = await fetch("http://localhost:5555/api/complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComplaint),
      });

      const json = await response.json();
      if (response.ok) {
        setPhone("");
        setComplaint("");
        dispatch({ type: "CREATE_COMPLAINT", payload: json });
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="bg-slate-300 max-w-lg mx-auto mt-8 p-5 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h1 className="text-center text-lg font-bold">Submit Your Complaint</h1>
        <textarea
          name="complaint"
          id="complaint"
          className="w-full p-3 rounded-t-lg border border-gray-300"
          placeholder="Enter your complaint"
          rows={10}
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />
        <input
          type="number"
          name="phone"
          id="phone"
          className="w-full p-3 rounded-b-lg border border-gray-300"
          placeholder="Enter your phone number"
          value={phone || ""}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white p-3 rounded-lg hover:bg-gray-800"
        >
          Submit
        </button>
        {error && (
          <p className="text-red-500 text-center mt-3">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ComplaintForm;
