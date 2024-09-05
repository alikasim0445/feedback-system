import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import RatingsGraph from "../components/RatingsGraph";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedOffice, setSelectedOffice] = useState("All");
  const [selectedView, setSelectedView] = useState("Graph");

  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:5555/api/workouts", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        setIsLoading(false);
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
    setSelectedOffice("All");
  };

  const handleOfficeChange = (e) => {
    setSelectedOffice(e.target.value);
  };

  const filteredWorkouts = workouts.filter((workout) => {
    if (selectedSector !== "All" && workout.sector !== selectedSector) {
      return false;
    }
    if (selectedOffice !== "All" && workout.office !== selectedOffice) {
      return false;
    }
    return true;
  });

  const uniqueSectors = [...new Set(workouts.map((workout) => workout.sector))];
  const uniqueOffices = [
    ...new Set(
      workouts
        .filter((workout) => workout.sector === selectedSector)
        .map((workout) => workout.office)
    ),
  ];

  const handleViewChange = (e) => {
    setSelectedView(e.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row items-start bg-slate-200 rounded-2xl p-3">
          <div className="mt-3 mb-5 lg:mb-0 lg:mr-5 w-full lg:w-auto">
            <select
              value={selectedView}
              onChange={handleViewChange}
              className="px-3 py-2 border rounded-md w-full lg:w-auto"
            >
              <option value="Details">Details</option>
              <option value="Graph">Graph</option>
            </select>
          </div>
          {selectedView === "Graph" ? (
            <div className=" flex flex-col bg-blue-400 p-3 rounded-md w-full lg:w-1/5 lg:mt-0 lg:ml-10">
              <div className="mb-4">
                <label htmlFor="sector-select" className="mr-2">
                  Filter by Sector:
                </label>
                <select
                  id="sector-select"
                  value={selectedSector}
                  onChange={handleSectorChange}
                  className="px-3 py-2 border rounded-md w-full"
                >
                  <option value="All">All</option>
                  {uniqueSectors.map((sector, index) => (
                    <option key={index} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="office-select" className="mr-2">
                  Filter by Office:
                </label>
                <select
                  id="office-select"
                  value={selectedOffice}
                  onChange={handleOfficeChange}
                  className="px-3 py-2 border rounded-md w-full"
                  disabled={selectedSector === "All"}
                >
                  <option value="All">All</option>
                  {uniqueOffices.map((office, index) => (
                    <option key={index} value={office}>
                      {office}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex flex-col bg-blue-400 p-3 rounded-md w-full lg:w-[250px] mt-5 lg:mt-3 mb-5 lg:mb-5 lg:ml-auto mx-auto">
                <div className="mb-4">
                  <label htmlFor="sector-select" className="mr-2">
                    Filter by Sector:
                  </label>
                  <select
                    id="sector-select"
                    value={selectedSector}
                    onChange={handleSectorChange}
                    className="px-3 py-2 border rounded-md w-full"
                  >
                    <option value="All">All</option>
                    {uniqueSectors.map((sector, index) => (
                      <option key={index} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="office-select" className="mr-2">
                    Filter by Office:
                  </label>
                  <select
                    id="office-select"
                    value={selectedOffice}
                    onChange={handleOfficeChange}
                    className="px-3 py-2 border rounded-md w-full"
                    disabled={selectedSector === "All"}
                  >
                    <option value="All">All</option>
                    {uniqueOffices.map((office, index) => (
                      <option key={index} value={office}>
                        {office}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-slate-900 text-gray-100 mt-10 table-auto">
                  <thead className="bg-gray-500">
                    <tr>
                      <th className="border border-gray-700 p-2">Sector</th>
                      <th className="border border-gray-700 p-2">Office</th>
                      <th className="border border-gray-700 p-2">Desk</th>
                      <th className="border border-gray-700 p-2">Rate</th>
                      <th className="border border-gray-700 p-2">Phone</th>
                      <th className="border border-gray-700 p-2">Comments</th>
                      <th className="border border-gray-700 p-2">Created</th>
                      <th className="border border-gray-700 p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWorkouts.map((workout) => (
                      <WorkoutDetails key={workout._id} workout={workout} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-black mx-auto mt-3 rounded-xl">
            {selectedView === "Graph" && (
              <div className="">
                <RatingsGraph workouts={filteredWorkouts} />
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white p-2 rounded mt-5 print:hidden"
        >
          Print Page
        </button>
      </div>
    </div>
  );
};

export default Home;
