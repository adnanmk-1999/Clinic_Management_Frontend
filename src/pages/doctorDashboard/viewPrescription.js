import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import MedicineCard from "./medicines";
import searchIcon from "../../assets/icons/search.svg";
import "./doctor.css"; // common listing CSS

function Prescription() {

  if (!roleController.isDoctor()) {
    window.location = "/login";
  }

  const [medicines, setMedicines] = useState([]);
  const [search, setSearch] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    api.get(`/medicines/bydate/${today}`)
      .then(res => setMedicines(res.data))
      .catch(err => console.log(err));
  }, [today]);

  const filtered = medicines.filter(med =>
    med.medicineName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      <center>
        <h1 className="heading">Prescription</h1>
      </center>
      <hr />

      <div className="list-page">

        {/* Search bar */}
        <div className="list-search-wrapper">
          <input
            type="text"
            className="list-search"
            placeholder="Search medicines..."
            onChange={e => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="list-search-icon" />
        </div>

        {/* Empty List */}
        {medicines.length === 0 ? (
          <p className="list-empty">No prescriptions for today!</p>
        ) : (
          <>
            {filtered.length === 0 ? (
              <p className="list-empty">No matching prescriptions found!</p>
            ) : (
              <div className="list-container">
                {filtered.map(med => (
                  <div className="list-card" key={med.medicineid}>
                    <MedicineCard details={med} />
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

export default Prescription;
