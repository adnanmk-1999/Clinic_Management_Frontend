import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./labtechnician.css";
import formatDate from "../../helpers/formatDate/formatData";

function ReportDetails() {

  if (!roleController.isLabtechnician()) {
    window.location = "/login";
  }

  const { labReportId } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState(null);
  const [patient, setPatient] = useState(null);

  // Fetch report details
  useEffect(() => {
    api
      .get(`/reports/${labReportId}`)
      .then(res => setReport(res.data))
      .catch(err => console.log(err));
  }, [labReportId]);

  // Fetch patient AFTER report loads
  useEffect(() => {
    if (report?.patientId) {
      api
        .get(`/patients/${report.patientId}`)
        .then(res => setPatient(res.data))
        .catch(err => console.log(err));
    }
  }, [report]);

  if (!report) return null;

  return (
    <div className="home">

      <center>
        <h1 className="heading">Lab Report Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">

        <div className="details-card">

          {/* Blue Title Bar */}
          <div className="details-card-header">
            {report.testName}
          </div>

          {/* Body */}
          <div className="details-card-body">

            <div className="details-row">
              <span className="details-label">Test Name</span>
              <span className="details-value">{report.testName}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Description</span>
              <span className="details-value">{report.description}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Patient Name</span>
              <span className="details-value">{patient?.patientName ? patient.patientName : "Not Available"}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Result Value</span>
              <span className="details-value">{report.resultValue}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Remarks</span>
              <span className="details-value">{report.remarks}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Report Date</span>
              <span className="details-value">{formatDate(report.reportDate)}</span>
            </div>

            {/* Action Buttons */}
            <div className="details-actions">

              <button
                className="btn btn-primary"
                onClick={() => navigate(`/reportedit/${report.labReportId}`)}
              >
                Edit
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/reportlist")}
              >
                Back to Reports
              </button>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default ReportDetails;
