<<<<<<< HEAD
import { useComplaintContext } from "../hooks/useComplaint";
import CompontDetail from "./ComplaintDetail";
=======
import { useComplaintContext } from "../hooks/useComplaintContext";
import ComplaintDetail from "./ComplaintDetail";
>>>>>>> dcbf0145538be99e4ce197c33d579f0fc2ed3fc6
import { useEffect } from "react";

const Complaint = () => {
  const { complaints, dispatch } = useComplaintContext();

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/complaint");
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: "SET_COMPLAINT", payload: json });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchComplaint();
<<<<<<< HEAD
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-spacing-3 ">
      {complaints.map((complain) => (
        <CompontDetail key={complain._id} complaint={complain} />
=======
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-spacing-3 ">
      {complaints.map((complaint) => (
        <ComplaintDetail key={complaint._id} complaint={complaint} />
>>>>>>> dcbf0145538be99e4ce197c33d579f0fc2ed3fc6
      ))}
    </div>
  );
};

export default Complaint;
