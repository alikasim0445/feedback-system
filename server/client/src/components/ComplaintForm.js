import React from "react";
import { useComplaintContext } from "../hooks/useComplaintContext";

const ComplaintForm = () => {
  const { phone, setPhone, complaint, setComplaint, handleSubmit } =
    useComplaintContext(); // Call the hook here

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
