import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./front.css";
import formatDate from "../../helpers/formatDate/formatData";

function AppointmentView() {

    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    const { id } = useParams();
    const navigate = useNavigate();

    const [appointment, setAppointment] = useState(null);
    const [doctor, setDoctor] = useState(null);

    // === Get appointment ===
    useEffect(() => {
        api
            .get(`/appointments/${id}`)
            .then(res => setAppointment(res.data))
            .catch(err => console.log(err));
    }, [id]);

    // === Get doctor details after appointment loads ===
    useEffect(() => {
        if (!appointment?.doctorId) return;

        api
            .get(`/doctors/${appointment.doctorId}`)
            .then(res => setDoctor(res.data))
            .catch(err => console.log(err));

    }, [appointment?.doctorId]);

    if (!appointment || !doctor) return null;


    return (
        <div className="home">

            <center>
                <h1 className="heading">Appointment Details</h1>
            </center>
            <hr />

            <div className="details-wrapper">

                <div className="details-card">

                    {/* Blue header */}
                    <div className="details-card-header">
                        Appointment for {appointment.patientName}
                    </div>

                    <div className="details-card-body">

                        <div className="details-row">
                            <span className="details-label">Patient Name</span>
                            <span className="details-value">{appointment.patientName}</span>
                        </div>

                        <div className="details-row">
                            <span className="details-label">Doctor</span>
                            <span className="details-value">Dr. {doctor.doctorName}</span>
                        </div>

                        <div className="details-row">
                            <span className="details-label">Appointment Date</span>
                            <span className="details-value">{formatDate(appointment.appointmentDate)}</span>
                        </div>

                        <div className="details-row">
                            <span className="details-label">Time</span>
                            <span className="details-value">{appointment.appointmentTime}</span>
                        </div>

                        <div className="details-actions">
                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate("/appointmentDisplay")}
                            >
                                Back to Appointments
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AppointmentView;
