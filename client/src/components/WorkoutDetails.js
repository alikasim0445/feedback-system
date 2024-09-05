import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import RatingsGraph from "./RatingsGraph";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      "http://localhost:5555/api/workouts/" + workout._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      <tr
        key={workout._id}
        className="border-b border-gray-700 hover:bg-gray-800"
      >
        <td className="border border-gray-700 p-2">{workout.sector}</td>
        <td className="border border-gray-700 p-2">{workout.office}</td>
        <td className="border border-gray-700 p-2">{workout.desk}</td>
        <td className="border border-gray-700 p-2">{workout.rate}</td>
        <td className="border border-gray-700 p-2">{workout.phone}</td>
        <td className="border border-gray-700 p-2">{workout.comment}</td>
        <td className="border border-gray-700 p-2">
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </td>
        <td className="border border-gray-700 p-2 text-center">
          <span
            className="material-symbols-outlined cursor-pointer text-red-500 font-bold"
            onClick={handleClick}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default WorkoutDetails;
