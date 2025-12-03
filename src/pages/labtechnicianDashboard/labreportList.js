import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import LabReport from "./labreport";
import "./labtechnician.css";
import searchIcon from "../../assets/icons/search.svg";

function LabReportList() {

  if (!roleController.isLabtechnician()) {
    window.location = "/login";
  }

  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/reports")
      .then(res => setReports(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = reports.filter(rep =>
    rep.testName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      <center><h1 className="heading">Lab Reports</h1></center>
      <hr />

      <div className="list-page">

        {/* Search Bar */}
        <div className="list-search-wrapper">
          <input
            type="text"
            className="list-search"
            placeholder="Search reports..."
            onChange={e => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="list-search-icon" />
        </div>

        {/* If no reports exist */}
        {reports.length === 0 ? (
          <p className="list-empty">No Reports Generated!</p>
        ) : (
          <>
            {/* If search gives 0 matches */}
            {filtered.length === 0 ? (
              <p className="list-empty">No matching reports found!</p>
            ) : (
              <div className="list-container">
                {filtered.map(rep => (
                  <div className="list-card" key={rep.labReportId}>
                    <LabReport details={rep} />
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

export default LabReportList;
