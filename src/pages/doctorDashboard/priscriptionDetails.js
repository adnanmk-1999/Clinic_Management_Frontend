import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./doctor.css";

function PrescriptionDetails() {

  if (!roleController.isDoctor()) {
    window.location = "/login";
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    api
      .get(`/medicines/${id}`)
      .then(res => setMedicine(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!medicine) return null;

  return (
    <div className="home">

      <center>
        <h1 className="heading">Prescription Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">

        <div className="details-card">

          {/* Blue header */}
          <div className="details-card-header">
            {medicine.medicineName}
          </div>

          <div className="details-card-body">

            <div className="details-row">
              <span className="details-label">Medicine Name</span>
              <span className="details-value">{medicine.medicineName}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Unit</span>
              <span className="details-value">{medicine.unit}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Dose</span>
              <span className="details-value">{medicine.dose}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Type</span>
              <span className="details-value">{medicine.type}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Duration (Days)</span>
              <span className="details-value">{medicine.day}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Comments</span>
              <span className="details-value">{medicine.comment}</span>
            </div>

            <div className="details-actions">

              <button
                className="btn btn-primary"
                onClick={() => navigate(`/prescriptionedit/${medicine.medicineid}`)}
              >
                Edit
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/appointmentlist")}
              >
                Back
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default PrescriptionDetails;
