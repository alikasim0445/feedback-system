import { createContext, useEffect, useState } from "react";

export const ComplaintContext = createContext({});

export const ComplaintContextProvider = ({ children }) => {
  const [complaintState, setComplaintState] = useState([]);
  const [error, setError] = useState(false);
  const [phone, setPhone] = useState(null);
  const [complaint, setComplaint] = useState("");

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch("http://localhost:4444/api/complaint");
        const json = await response.json();
        setComplaintState(json);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };

    fetchComplaint();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComplaint = {
      phone,
      complaint,
    };

    try {
      const response = await fetch("http://localhost:4444/api/complaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComplaint),
      });
      const savedComplaint = await response.json();
      setComplaintState((prevComplaintState) => [
        savedComplaint,
        ...prevComplaintState,
      ]);
      setPhone(null);
      setComplaint("");
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4444/api/complaint/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setComplaintState(complaintState.filter((c) => c._id !== id));
      // toast.success("Post deleted successfully!");
      console.log("Post deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ComplaintContext.Provider
      value={{
        complaintState,
        error,
        phone,
        setPhone,
        complaint,
        setComplaint,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </ComplaintContext.Provider>
  );
};
