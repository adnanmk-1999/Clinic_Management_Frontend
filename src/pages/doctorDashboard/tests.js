import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./doctor.css";

function TestCard({ details }) {

  const navigate = useNavigate();

  return (
    <Card className="generic-card">

      {/* Header */}
      <Card.Header className="generic-card-header">
        Test: {details.testName}
      </Card.Header>

      {/* Body */}
      <Card.Body className="generic-card-body">

        <Card.Title className="generic-card-title">
          Patient ID: {details.patientId}
        </Card.Title>

        {/* Action button */}
        <div className="generic-card-action">
          <Button onClick={() => navigate(`/patient/labresult/${details.labReportId}`)}>
            View Details
          </Button>
        </div>

      </Card.Body>

    </Card>
  );
}

export default TestCard;
