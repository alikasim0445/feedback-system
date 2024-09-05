import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import RatingsGraph from "./RatingsGraph";
import WorkoutDetails from "./WorkoutDetails";

const WorkoutView = ({ workout }) => {
  const [selectedView, setSelectedView] = useState("details");

  return (
    <>
      <div>
        <button
          onClick={() => setSelectedView("details")}
          disabled={selectedView === "details"}
        >
          Workout Details
        </button>
        <button
          onClick={() => setSelectedView("graph")}
          disabled={selectedView === "graph"}
        >
          Graph
        </button>
      </div>

      {selectedView === "details" ? (
        <WorkoutDetails workout={workout} />
      ) : (
        <RatingsGraph workouts={[workout]} />
      )}
    </>
  );
};

export default WorkoutView;
