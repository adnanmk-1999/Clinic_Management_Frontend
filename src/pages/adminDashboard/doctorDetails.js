import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./admin.css";
import formatDate from "../../helpers/formatDate/formatData";


function DoctorDetails() {

  if (!roleController.isAdmin()) {
    window.location = "/login";
  }

  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/doctors/${doctorId}`)
      .then(res => setDoctor(res.data))
      .catch(err => console.log(err));
  }, [doctorId]);

  function handleDelete(id) {
    api
      .delete(`/doctors/${id}`)
      .then(() => {
        window.location = "/doctorlist";
      })
      .catch(err => console.log(err));
  }

  if (!doctor) return null;

  return (
    <div className="home">
      <center>
        <h1 className="heading">Doctor Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">
        <div className="details-card">

          <div className="details-card-header">
            {doctor.doctorName}
          </div>

          <div className="details-card-body">
            <div className="details-row">
              <span className="details-label">Specialization</span>
              <span className="details-value">{doctor.specialization}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Qualification</span>
              <span className="details-value">{doctor.qualification}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Gender</span>
              <span className="details-value">{doctor.gender}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Date of Birth</span>
              <span className="details-value">{formatDate(doctor.dateOfBirth)}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Address</span>
              <span className="details-value">{doctor.address}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Date of Join</span>
              <span className="details-value">{formatDate(doctor.dateOfJoin)}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Phone</span>
              <span className="details-value">{doctor.phone}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Email</span>
              <span className="details-value">{doctor.email}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Experience</span>
              <span className="details-value">{doctor.experience}</span>
            </div>

            <div className="details-actions">

              <Button
                variant="primary"
                onClick={() => navigate(`/doctoredit/${doctor.doctorId}`)}
              >
                Edit
              </Button>

              <Button
                variant="danger"
                onClick={() => handleDelete(doctor.doctorId)}
              >
                Delete
              </Button>

              <Button
                variant="secondary"
                onClick={() => navigate("/doctorlist")}
              >
                Back to List
              </Button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
