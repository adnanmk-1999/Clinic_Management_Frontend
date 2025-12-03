import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./labtechnician.css";

function Test({ details }) {
  return (
    <Card className="generic-card">

      <Card.Header className="generic-card-header">
        Test: {details.testName}
      </Card.Header>

      <Card.Body className="generic-card-body">

        <Card.Title className="generic-card-title">
          {details.description}
        </Card.Title>

        {/* Right-aligned button */}
        <div className="generic-card-action">
          <Link to={`/testdetails/${details.testId}`} className="btn btn-primary">
            View Details
          </Link>
        </div>

      </Card.Body>

    </Card>
  );
}

export default Test;
