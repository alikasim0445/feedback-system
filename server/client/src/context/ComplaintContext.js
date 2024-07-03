import React, { createContext, useReducer, useEffect } from "react";

export const ComplaintContext = createContext({});

export const complaintReducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLAINTS":
      return {
        ...state,
        complaints: action.payload,
      };
    case "CREATE_COMPLAINT":
      return {
        ...state,
        complaints: [action.payload, ...state.complaints],
      };
    case "DELETE_COMPLAINT":
      return {
        ...state,
        complaints: state.complaints.filter(
          (complaint) => complaint._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const ComplaintContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(complaintReducer, {
    complaints: [], // Initialize complaints as an empty array
  });

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/complaint");
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: "SET_COMPLAINTS", payload: json });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <ComplaintContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ComplaintContext.Provider>
  );
};
