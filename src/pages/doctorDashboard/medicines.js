import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./doctor.css";

function MedicineCard({ details }) {

  return (
    <Card className="generic-card">

      {/* Header */}
      <Card.Header className="generic-card-header">
        Medicine: {details.medicineName}
      </Card.Header>

      {/* Body */}
      <Card.Body className="generic-card-body">

        <Card.Title className="generic-card-title">
          Remarks: {details.comment}
        </Card.Title>

        {/* Right-aligned button */}
        <div className="generic-card-action">
          <Link to={`/priscdetails/${details.medicineid}`}>
            <Button>View Details</Button>
          </Link>
        </div>

      </Card.Body>

    </Card>
  );
}

export default MedicineCard;
