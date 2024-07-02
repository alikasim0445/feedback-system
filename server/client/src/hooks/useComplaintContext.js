import { useContext } from "react";
import { ComplaintContext } from "../context/ComplaintContext";

export const useComplaintContext = () => {
  return useContext(ComplaintContext);
};
