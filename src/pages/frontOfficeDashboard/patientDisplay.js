import { useEffect, useState } from "react";
import api from "../../helpers/axiosServer/api";
import Patient from "./patient";
import searchIcon from "../../assets/icons/search.svg";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./front.css";

function PatientDisplay() {

    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    const [patients, setPatients] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/patients")
            .then(res => setPatients(res.data))
            .catch(err => console.log(err));
    }, []);

    const filtered = patients.filter(p =>
        p.patientName?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <center>
                <h1 className="heading">Registered Patients</h1>
            </center>
            <hr />

            <div className="list-page">

                {/* SEARCH BAR */}
                <div className="list-search-wrapper">
                    <input
                        type="text"
                        className="list-search"
                        placeholder="Search patients..."
                        onChange={e => setSearch(e.target.value)}
                    />
                    <img src={searchIcon} alt="search" className="list-search-icon" />
                </div>

                {/* EMPTY STATES */}
                {patients.length === 0 ? (
                    <p className="list-empty">No patients registered!</p>
                ) : (
                    <>
                        {filtered.length === 0 ? (
                            <p className="list-empty">No matching patients found!</p>
                        ) : (
                            <div className="list-container">
                                {filtered.map(patient => (
                                    <div className="list-card" key={patient.patientId}>
                                        <Patient details={patient} />
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

export default PatientDisplay;
