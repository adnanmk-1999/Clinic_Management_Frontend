import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./admin.css";
import formatDate from "../../helpers/formatDate/formatData";


function StaffDetails() {
  if (!roleController.isAdmin()) {
    window.location = "/login";
  }

  const { staffId } = useParams();
  const [staff, setStaff] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/staffs/${staffId}`)
      .then(res => setStaff(res.data))
      .catch(err => console.log(err));
  }, [staffId]);

  function handleDelete(id) {
    api
      .delete(`/staffs/${id}`)
      .then(() => {
        window.location = "/stafflist";
      })
      .catch(err => console.log(err));
  }

  if (!staff) return null;

  return (
    <div className="home">
      <center>
        <h1 className="heading">Staff Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">
        <div className="details-card">
          <div className="details-card-header">
            {staff.staffName}
          </div>

          <div className="details-card-body">
            <div className="details-row">
              <span className="details-label">Staff Type</span>
              <span className="details-value">{staff.staffType}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Qualification</span>
              <span className="details-value">{staff.qualification}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Gender</span>
              <span className="details-value">{staff.gender}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Date of Birth</span>
              <span className="details-value">{formatDate(staff.dateOfBirth)}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Address</span>
              <span className="details-value">{staff.address}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Date of Join</span>
              <span className="details-value">{formatDate(staff.dateOfJoin)}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Phone</span>
              <span className="details-value">{staff.phone}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Email</span>
              <span className="details-value">{staff.email}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Experience</span>
              <span className="details-value">{staff.experience}</span>
            </div>

            <div className="details-actions">
              <Button
                variant="primary"
                onClick={() => navigate(`/staffedit/${staff.staffId}`)}
              >
                Edit Staff
              </Button>

              <Button
                variant="danger"
                onClick={() => handleDelete(staff.staffId)}
              >
                Delete
              </Button>

              <Button
                variant="secondary"
                onClick={() => navigate("/stafflist")}
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

export default StaffDetails;
