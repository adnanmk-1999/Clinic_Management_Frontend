import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./doctor.css";

function TestDetails() {

  if (!roleController.isDoctor()) {
    window.location = "/login";
  }

  const { id } = useParams();
  const navigate = useNavigate();
  const [test, setTest] = useState(null);

  useEffect(() => {
    api
      .get(`/reports/${id}`)
      .then(res => setTest(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!test) return null;

  return (
    <div className="home">

      <center>
        <h1 className="heading">Test Report Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">

        <div className="details-card">

          {/* Blue header */}
          <div className="details-card-header">
            {test.testName}
          </div>

          <div className="details-card-body">

            <div className="details-row">
              <span className="details-label">Test Name</span>
              <span className="details-value">{test.testName}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Description</span>
              <span className="details-value">{test.description}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Desired Range</span>
              <span className="details-value">{test.desiredRange}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Result Value</span>
              <span className="details-value">{test.resultValue}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Remarks</span>
              <span className="details-value">{test.remarks}</span>
            </div>

            <div className="details-actions">
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

export default TestDetails;
