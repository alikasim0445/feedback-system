import { useComplaintContext } from "../hooks/useComplaintContext";
import ComplaintDetail from "./ComplaintDetail";
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
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-spacing-3 ">
      {complaints.map((complaint) => (
        <ComplaintDetail key={complaint._id} complaint={complaint} />
      ))}
    </div>
  );
};

export default Complaint;
