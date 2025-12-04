import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import Doctor from "./doctor";
import "./admin.css";

import searchIcon from "../../assets/icons/search.svg";

function DoctorList() {
  if (!roleController.isAdmin()) {
    window.location = "/login";
  }

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/doctors")
      .then(res => setDoctors(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = doctors.filter(doc =>
    doc.doctorName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <center>
        <h1 className="heading">Doctor List</h1>
      </center>
      <hr />

      <div className="list-page">

        {/* Search Bar */}
        <div className="list-search-wrapper">
          <input
            type="text"
            className="list-search"
            placeholder="Search doctors..."
            onChange={e => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="list-search-icon" />
        </div>

        {/* Empty List Message */}
        {doctors.length === 0 ? (
          <p className="list-empty">No doctors registered!</p>
        ) : (
          <>
            {/* No matching doctors */}
            {filtered.length === 0 ? (
              <p className="list-empty">No matching doctors found!</p>
            ) : (
              <div className="list-container">
                {filtered.map(doc => (
                  <div className="list-card" key={doc.doctorId}>
                    <Doctor details={doc} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default DoctorList;
