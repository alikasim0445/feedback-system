import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { FaSearch } from "react-icons/fa";

// import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  // const { user } = useAuthContext()
  const [sector, setSector] = useState("");
  const [desk, setDesk] = useState("");
  const [office, setOffice] = useState("");
  const [rate, setRate] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComments] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [showError, setShowError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!user) {
    //   setError('You must be logged in')
    //   return
    // }

    if (sector === "" || rate === "") {
      setShowError(true);
      return;
    }

    const workout = { sector, office, desk, rate, phone, comment };

    const response = await fetch("http://localhost:5555/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setDesk("");
      setSector("");
      setOffice("");
      setRate("");
      setPhone("");
      setComments("");
      setShowError(false);
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  const rating = ["Bad", "Normal", "Good", "Great", "Excellent"];

  const OfficeLabels = [
    "Minister Office",
    "Innovation & Technology Partnership and Alliance Affairs Office",
    "Innovation and Research Sector",
    "ICT and Digital Economy Sector",
    "Administration Office",
    "Policy & Strategy Studies Research Executive",
    "Innovation Fund Office",
  ];

  const deskOptionsByOffice = {
    "Minister Office": [
      "Legal Service Office",
      "Audit Service Office",
      "Institutional Transition Office",
      "Ethics and Anti-Corruption Office",
      "Public relations and Communication Office",
      "Public Relations & Communication Team",
      "Women and Social Affairs Office",
    ],
    "Innovation & Technology Partnership and Alliance Affairs Office": [
      "International Relations & Cooperation Desk",
      "Sector & Regional Councils Desk",
      "Private Sector Industries Technology Desk",
    ],

    "Innovation and Research Sector": [
      "National Research Office",
      "Technology Transformation Office",
      "Technology Innovation and Management Office",
    ],
    "ICT and Digital Economy Sector": [
      "National E-Government Services Office",
      "ICT Infrastructure Development and Management Office",
      "Digital Economy Development Sector Office",
    ],
    "Administration Office": [
      "Strategic Affairs Office",
      "Finance & Procurement Office",
      "Human Resource Competency & Management Office",
      "Information Communication Technology Office",
      "Facilities Management Office",
    ],
    "Policy & Strategy Studies Research Executive": [
      "Policy & Strategy Studies Research Executive",
    ],
    "Innovation Fund Office": ["Innovation Fund Office"],
  };

  const deskHelpOptionsByOffice = {
    "Legal Service Office": ["Legal Service Office"],
    "Audit Service Office": ["Audit Service Office"],
    "Institutional Transition Office": ["Institutional Transition Office"],
    "Ethics and Anti-Corruption Office": ["Ethics and Anti-Corruption Office"],
    "Public relations and Communication Office": [
      "Public relations and Communication Office",
    ],
    "Public Relations & Communication Team": [
      "Public Relations & Communication Team",
    ],
    "Women and Social Affairs Office": ["Women and Social Affairs Office"],
    "Innovation Fund Office": ["Innovation Fund Office"],

    "International Relations & Cooperation Desk": [
      "International Relations & Cooperation Desk",
    ],
    "Sector & Regional Councils Desk": ["Sector & Regional Councils Desk"],
    "Private Sector Industries Technology Desk": [
      "Private Sector Industries Technology Desk",
    ],

    "Policy & Strategy Studies Research Executive": [
      "Policy & Strategy Studies Research Executive",
    ],

    "National Research Office": [
      "National Research Development Desk",
      "National Research Infrastructure Development Desk",
      "National Research Ethics and Methodology Development Desk",
    ],

    "Technology Transformation Office": [
      "Innovation & Information Technology Development & Management Desk",
      "Technological Transformation and Collaboration Desk",
      "Indigenous Technology Development Desk",
    ],

    "Technology Innovation and Management Office": [
      "Innovation Development Desk",
      "Innovation Infrastructure Development Desk",
      "Startup & Innovative Enterprise Development Desk 1",
      "Startup & Innovative Enterprise Development Desk 2",
    ],
    "National E-Government Services Office": [
      "National E-Government Services Development & Management Desk",
      "National E-Government Strategy Coordination Desk",
      "National Data Development Coordination Desk",
    ],
    "ICT Infrastructure Development and Management Office": [
      "National Data Center Management Desk",
      "Cyber Security Desk",
      "National ICT Infrastructure Development Desk",
    ],
    "Digital Economy Development Sector Office": [
      "Digital Economy Development Standards & Control Desk",
      "Digital Industry Development Desk",
      "Digital Society Development Desk",
    ],
    "Strategic Affairs Office": [
      "Planning & Budget Preparation, Monitoring & Evaluation Team",
    ],
    "Finance & Procurement Office": ["Procurement Team", "Finance Team"],
    "Human Resource Competency & Management Office": [
      "Human Resource Administration Team ",
      "Human Resource Competency Development & Management Team",
      "Records Management Team",
    ],
    "Information Communication Technology Office": [
      "Information Communication Technology Office",
    ],
    "Facilities Management Office": [
      "Property Management Team",
      "Property Treasury Team",
      "General Services Team",
      "Transport Deployment Service Team",
    ],
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    let newSuggestions = [];

    // Search desks
    for (let office in deskHelpOptionsByOffice) {
      const desks = deskHelpOptionsByOffice[office].filter((desk) =>
        desk.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (desks.length > 0) {
        newSuggestions = [...newSuggestions, ...desks];
      }
    }

    // Search offices
    for (let sector in deskOptionsByOffice) {
      const offices = deskOptionsByOffice[sector].filter((office) =>
        office.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (offices.length > 0) {
        newSuggestions = [...newSuggestions, ...offices];
      }
    }

    // Search sectors
    const sectors = OfficeLabels.filter((label) =>
      label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (sectors.length > 0) {
      newSuggestions = [...newSuggestions, ...sectors];
    }

    setSuggestions(newSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);

    // Check if the suggestion matches any desk
    for (let office in deskHelpOptionsByOffice) {
      if (deskHelpOptionsByOffice[office].includes(suggestion)) {
        const sector = Object.keys(deskOptionsByOffice).find((key) =>
          deskOptionsByOffice[key].includes(office)
        );
        setSector(sector);
        setOffice(office);
        setDesk(suggestion);
        return;
      }
    }

    // Check if the suggestion matches any office
    for (let sector in deskOptionsByOffice) {
      if (deskOptionsByOffice[sector].includes(suggestion)) {
        setSector(sector);
        setOffice(suggestion);
        setDesk("");
        return;
      }
    }

    // Check if the suggestion matches any sector
    if (OfficeLabels.includes(suggestion)) {
      setSector(suggestion);
      setOffice("");
      setDesk("");
    }
  };

  return (
    <form
      className="bg-slate-300 max-w-xl mx-auto rounded-lg p-10 shadow-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-1">
        <h3 className="text-center text-lg font-semibold font-sans">
          Comment Here
        </h3>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1 relative sm:flex-col md:flex-col lg:flex-col">
            <FaSearch className="absolute left-3 top-5  text-gray-400 border-collapse ml-1 pt-1 text-2xl lg:w-fit" />
            <input
              id="search"
              type="text"
              onChange={handleSearch}
              value={searchTerm}
              placeholder="Search for desk, office, or sector"
              className="form-control pl-10  sm:w-fit md:w-fit lg:w-fit rounded-[300px]"
            />

            {suggestions.length > 0 && (
              <select
                className="border border-gray-300 bg-white rounded-md  h-10 mt-3  "
                onChange={(event) => handleSuggestionClick(event.target.value)}
              >
                <option value="" className=""></option>
                {suggestions.map((suggestion, index) => (
                  <option key={index} value={suggestion} className="p-3">
                    {suggestion}
                  </option>
                ))}
              </select>
            )}
          </div>
          <label htmlFor="sector">Sector:</label>
          <select
            id="sector"
            onChange={(e) => setSector(e.target.value)}
            value={sector}
            className={`form-control p-2 rounded-md ${
              sector === "" ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Sector</option>
            {OfficeLabels.map((label, index) => (
              <option key={index} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="office">Office:</label>
          <select
            id="office"
            onChange={(e) => setOffice(e.target.value)}
            value={office}
            className={`form-control p-2 rounded-md ${
              office === "" ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Office</option>
            {deskOptionsByOffice[sector]?.map((office, index) => (
              <option key={index} value={office}>
                {office}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="desk">Desk:</label>
          <select
            id="desk"
            onChange={(e) => setDesk(e.target.value)}
            value={desk}
            className={`form-control p-2 rounded-md ${
              desk === "" ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Desk</option>
            {deskHelpOptionsByOffice[office]?.map((desk, index) => (
              <option key={index} value={desk}>
                {desk}
              </option>
            ))}
          </select>
        </div>

        <div className="">
          <label>Rate:</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {rating.map((rateOption, index) => (
              <div key={index} className="flex items-center gap-3 mx-auto">
                <input
                  type="radio"
                  id={rateOption.toLowerCase()}
                  name="rate"
                  value={rateOption}
                  onChange={(e) => setRate(e.target.value)}
                  checked={rate === rateOption}
                  className="form-radio"
                />
                <label htmlFor={rateOption.toLowerCase()} className="mr-3">
                  {rateOption}
                </label>
              </div>
            ))}
          </div>
          {rate === "" && showError && (
            <span className="text-red-600 text-sm">Please select a rate!</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="+251"
            className="form-control sm:w-fit md:w-fit lg:w-fit"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="comment">Comments:</label>
          <textarea
            id="comment"
            onChange={(e) => setComments(e.target.value)}
            value={comment}
            cols={20}
            rows={3}
            placeholder="Comment here"
            className="form-control rounded-md p-2"
          ></textarea>
        </div>

        <button className="self-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mt-5">
          Submit
        </button>
        {error && <div className="text-red-600">{error}</div>}
      </div>
    </form>
  );
};

export default WorkoutForm;
