import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./admin.css";

function Staff({ details }) {
  return (
    <div className="list-card">

      <Card className="generic-card">

        <Card.Header className="generic-card-header">
          Staff: {details.staffName}
        </Card.Header>

        <Card.Body className="generic-card-body">

          <Card.Title className="generic-card-title">
            Type: {details.staffType}
          </Card.Title>

          {/* Right aligned button */}
          <div className="generic-card-action">
            <Link to={`/staffdetails/${details.staffId}`}>
              <Button>View Details</Button>
            </Link>
          </div>

        </Card.Body>

      </Card>

    </div>
  );
}

export default Staff;
