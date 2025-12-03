import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./doctor.css";
import formatDate from "../../helpers/formatDate/formatData";

function PatientDetails() {

  if (!roleController.isDoctor()) {
    window.location = "/login";
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    api
      .get(`/appointments/patients/${id}`)
      .then(res => setPatient(res.data))
      .catch(err => console.log(err));
  }, [id]);

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
              <span className="details-label">Date of Birth</span>
              <span className="details-value">{formatDate(patient.dateOfBirth)}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Address</span>
              <span className="details-value">{patient.address}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Phone</span>
              <span className="details-value">{patient.phoneNumber}</span>
            </div>

            {/* Action buttons */}
            <div className="details-actions">

              <button
                className="btn btn-primary"
                onClick={() => navigate(`/prescriptionadd/${patient.patientId}`)}
              >
                Add Consultation
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate(`/patient/tests/${patient.patientId}`)}
              >
                View Lab Results
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate(`/viewpriscription`)}
              >
                View Prescription
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/appointmentlist")}
              >
                Back to List
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
