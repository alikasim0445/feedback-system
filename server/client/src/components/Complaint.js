import { useComplaintContext } from "../hooks/useComplaintContext";
import CompontDetail from "./ComplaintDetail";

const Complaint = () => {
  const { complaintState } = useComplaintContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-spacing-3 ">
      {complaintState.map((complain) => (
        <CompontDetail key={complain._id} complaint={complain} />
      ))}
    </div>
  );
};

export default Complaint;
