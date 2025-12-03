import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./admin.css";

function Doctor({ details }) {
  return (
    <div className="list-card">

      <Card className="generic-card">

        <Card.Header className="generic-card-header">
          Doctor: {details.doctorName}
        </Card.Header>

        <Card.Body className="generic-card-body">

          <Card.Title className="generic-card-title">
            Specialization: {details.specialization}
          </Card.Title>

          {/* Button Right */}
          <div className="generic-card-action">
            <Link to={`/doctordetails/${details.doctorId}`}>
              <Button>View Details</Button>
            </Link>
          </div>

        </Card.Body>

      </Card>

    </div>
  );
}

export default Doctor;
