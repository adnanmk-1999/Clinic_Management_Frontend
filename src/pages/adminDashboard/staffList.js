import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import Staff from "./staff";
import searchIcon from "../../assets/icons/search.svg";
import "./admin.css";

function StaffList() {
  if (!roleController.isAdmin()) {
    window.location = "/login";
  }

  const [staffs, setStaffs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/staffs")
      .then(res => setStaffs(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = staffs.filter(st =>
    st.staffName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <center>
        <h1 className="heading">Staff List</h1>
      </center>
      <hr />

      <div className="list-page">

        {/* Search Bar */}
        <div className="list-search-wrapper">
          <input
            type="text"
            className="list-search"
            placeholder="Search staff..."
            onChange={e => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="list-search-icon" />
        </div>

        {/* If no staff in DB */}
        {staffs.length === 0 ? (
          <p className="list-empty">No staff registered!</p>
        ) : (
          <>
            {/* No search match */}
            {filtered.length === 0 ? (
              <p className="list-empty">No matching staff found!</p>
            ) : (
              <div className="list-container">
                {filtered.map(staff => (
                  <div className="list-card" key={staff.staffId}>
                    <Staff details={staff} />
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

export default StaffList;
