import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./front.css";
import formatDate from "../../helpers/formatDate/formatData";


function PatientView() {

    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    const { patientId } = useParams();
    const navigate = useNavigate();

    const [patient, setPatient] = useState(null);

    useEffect(() => {
        api
            .get(`/patients/${patientId}`)
            .then(res => setPatient(res.data))
            .catch(err => console.log(err));
    }, [patientId]);

    if (!patient) return null;

    return (
        <div className="home">

            <center>
                <h1 className="heading">Patient Details</h1>
            </center>
            <hr />

            <div className="details-wrapper">

                <div className="details-card">

                    {/* Blue header */}
                    <div className="details-card-header">
                        {patient.patientName}
                    </div>

                    <div className="details-card-body">

                        <div className="details-row">
                            <span className="details-label">Full Name</span>
                            <span className="details-value">{patient.patientName}</span>
                        </div>

                        <div className="details-row">
                            <span className="details-label">Date of Birth</span>
                            <span className="details-value">{formatDate(patient.dateOfBirth)}</span>
                        </div>

                        <div className="details-row">
                            <span className="details-label">Address</span>
                            <span className="details-value">{patient.address}</span>
                        </div>

                        <div className="details-row">
                            <span className="details-label">Phone Number</span>
                            <span className="details-value">{patient.phoneNumber}</span>
                        </div>

                        <div className="details-actions">
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(`/patientEdit/${patient.patientId}`)}
                            >
                                Edit Patient Details
                            </button>

                            <button
                                className="btn btn-secondary"
                                onClick={() => navigate("/patientDisplay")}
                            >
                                Back to Patient List
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default PatientView;
