import React, { useState } from "react";
import { useComplaintContext } from "../hooks/useComplaint";

const ComplaintForm = () => {
  const { dispatch } = useComplaintContext(); // Call the hook here
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
    <div className="bg-slate-300 max-w-lg mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col p-5 rounded-lg">
        <h1 className="my-3 mx-auto">Here is the Complaint</h1>
        <div className="">
          <textarea
            name="complaint"
            id="complaint"
            className="w-full p-3 rounded-t-xl"
            placeholder="complaint"
            rows={10}
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)} // Fix typo here
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="phone"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-black rounded-b-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
