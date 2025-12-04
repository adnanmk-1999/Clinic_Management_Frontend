import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./admin.css";

function Event({ details }) {
  return (
    <div className="list-card">

      <Card className="generic-card">

        <Card.Header className="generic-card-header">
          Event: {details.eventName}
        </Card.Header>

        <Card.Body className="generic-card-body">

          <Card.Title className="generic-card-title">
            Description: {details.description}
          </Card.Title>

          {/* Button Right */}
          <div className="generic-card-action">
            <Link to={`/eventdetails/${details.id}`}>
              <Button>View Details</Button>
            </Link>
          </div>

        </Card.Body>

      </Card>

    </div>
  );
}

export default Event;
