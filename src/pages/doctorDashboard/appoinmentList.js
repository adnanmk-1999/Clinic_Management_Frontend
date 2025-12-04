import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import PatientList from "./patients";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./doctor.css";
import formatDate from "../../helpers/formatDate/formatData";
import searchIcon from "../../assets/icons/search.svg";

function Listall() {

    if (!roleController.isDoctor()) {
        window.location = "/login";
    }

    const [doctor, setDoctor] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");

    // === Get doctor profile by email ===
    useEffect(() => {
        const email = localStorage.getItem("myemail");

        api
            .get(`/doctors/doctoremail/${email}`)
            .then(res => setDoctor(res.data[0]))
            .catch(() => setDoctor(undefined));
    }, []);

    const today = new Date().toISOString().split("T")[0];

    // === Get appointments for today ===
    useEffect(() => {
        api
            .get(`/appointments/bydate/${today}`)
            .then(res => setAppointments(res.data))
            .catch(err => console.log(err));
    }, [today]);

    if (doctor === undefined) {
        alert("You are not registered! Contact admin.");
        window.location = "/";
    }

    // === Filter appointments (by appointmentTime for now) ===
    const filtered = appointments.filter(app =>
        (app.appointmentTime || "")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <center>
                <h1 className="heading">Appointments</h1>
            </center>
            <hr />

            {doctor && (
                <div className="doctor-greeting">
                    <h2>Dr. {doctor.doctorName}</h2>
                    <h3>{formatDate(today)}</h3>
                </div>
            )}

            <div className="list-page">

                {/* Search bar */}
                <div className="list-search-wrapper">
                    <input
                        type="text"
                        className="list-search"
                        placeholder="Search by appointment time..."
                        onChange={e => setSearch(e.target.value)}
                    />
                    <img src={searchIcon} alt="search" className="list-search-icon" />
                </div>

                {/* Empty states */}
                {appointments.length === 0 ? (
                    <p className="list-empty">No appointments for today.</p>
                ) : (
                    <>
                        {filtered.length === 0 ? (
                            <p className="list-empty">No matching appointments found!</p>
                        ) : (
                            <div className="list-container">
                                {filtered.map(app => (
                                    <div className="list-card" key={app.id}>
                                        <PatientList details={app} />
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

export default Listall;
