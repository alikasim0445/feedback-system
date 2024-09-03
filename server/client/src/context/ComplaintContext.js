import { createContext, useReducer, useEffect, useState } from "react";

export const ComplaintContext = createContext({});

export const complaintReducer = (state, action) => {
  switch (action.type) {
    case "SET+COMPLAINT":
      return {
        complaints: action.payload,
      };
    case "CREATE_COMPLAINT":
      return {
        complaints: [action.payload, ...state.complaints],
      };
    case "DELETE_COMPLAINT":
      return {
        complaints: state.complaints.filter(
          (complaint) => complaint.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const ComplaintContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(complaintReducer, {
    complaints: null,
  });

  return (
    <ComplaintContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ComplaintContext.Provider>
  );
};
