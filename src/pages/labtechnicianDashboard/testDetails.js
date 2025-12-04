import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./labtechnician.css";

function TestDetails() {

  if (!roleController.isLabtechnician()) {
    window.location = "/login";
  }

  const { testId } = useParams();
  const navigate = useNavigate();

  const [test, setTest] = useState(null);
  const [patient, setPatient] = useState(null);

  // === Fetch test information ===
  useEffect(() => {
    api
      .get(`/tests/${testId}`)
      .then(res => setTest(res.data))
      .catch(err => console.log(err));
  }, [testId]);

  // === Fetch patient info once test is known ===
  useEffect(() => {
    if (test?.patientId) {
      api
        .get(`/patients/${test.patientId}`)
        .then(res => setPatient(res.data))
        .catch(err => console.log(err));
    }
  }, [test]);

  if (!test) return null;

  return (
    <div className="home">
      <center>
        <h1 className="heading">Test Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">

        <div className="details-card">

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
              <span className="details-label">Patient Name</span>
              <span className="details-value">
                {patient?.patientName ? patient.patientName : "Not Available"}
              </span>
            </div>


            <div className="details-actions">

              <button
                className="btn btn-primary"
                onClick={() => navigate(`/generatereport/${test.testId}`)}
              >
                Begin Test
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/testList")}
              >
                Back to Test List
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TestDetails;
