import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./doctor.css";

function PatientList({ details }) {

  const [patient, setPatient] = useState({});
  const [doctor, setDoctor] = useState(null);

  // === Get patient info ===
  useEffect(() => {
    api
      .get(`/patients/${details.patientId}`)
      .then(res => setPatient(res.data));
  }, [details.patientId]);

  // === Get logged-in doctor ===
  useEffect(() => {
    const email = localStorage.getItem("myemail");

    api
      .get(`/doctors/doctoremail/${email}`)
      .then(res => setDoctor(res.data[0]));
  }, []);

  if (!doctor || doctor.doctorId !== details.doctorId) return null;

  return (
    <Card className="generic-card">

      <Card.Header className="generic-card-header">
        Patient: {patient.patientName}
      </Card.Header>

      <Card.Body className="generic-card-body">

        <Card.Title className="generic-card-title">
          Time: {details.appointmentTime}
        </Card.Title>

        <div className="generic-card-action">
          <Link to={`/patientdetails/${details.patientId}`}>
            <Button>View Details</Button>
          </Link>
        </div>

      </Card.Body>

    </Card>
  );
}

export default PatientList;
