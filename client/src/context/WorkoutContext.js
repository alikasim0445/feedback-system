// WorkoutsContext.js
import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: [] });
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (user) {
        setIsLoading(true);
        const response = await fetch("http://localhost:5555/api/workouts", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, [dispatch, user]);

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch, isLoading }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
