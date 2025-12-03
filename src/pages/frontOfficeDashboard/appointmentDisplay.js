import { useEffect, useState } from "react";
import api from "../../helpers/axiosServer/api";
import Appointment from "./appointment";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./front.css";

import searchIcon from "../../assets/icons/search.svg";

function AppointmentDisplay() {

    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/appointments")
            .then(res => setAppointments(res.data))
            .catch(err => console.log(err));
    }, []);

    const filtered = appointments.filter(app =>
        app.patientName?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <center><h1 className="heading">Appointments</h1></center>
            <hr />

            <div className="list-page">

                {/* Search Bar */}
                <div className="list-search-wrapper">
                    <input
                        type="text"
                        className="list-search"
                        placeholder="Search appointments..."
                        onChange={e => setSearch(e.target.value)}
                    />
                    <img src={searchIcon} alt="search" className="list-search-icon" />
                </div>

                {/* Empty states */}
                {appointments.length === 0 ? (
                    <p className="list-empty">No appointments found!</p>
                ) : (
                    <>
                        {filtered.length === 0 ? (
                            <p className="list-empty">No matching appointments found!</p>
                        ) : (
                            <div className="list-container">
                                {filtered.map(app => (
                                    <div className="list-card" key={app.id}>
                                        <Appointment details={app} />
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

export default AppointmentDisplay;
