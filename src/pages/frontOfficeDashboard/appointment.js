import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./front.css";

function Appointment({ details }) {
    return (
        <Card className="generic-card">

            <Card.Header className="generic-card-header">
                Appointment – {details.patientName}
            </Card.Header>

            <Card.Body className="generic-card-body">

                <Card.Title className="generic-card-title">
                    Time: {details.appointmentTime}
                </Card.Title>

                <div className="generic-card-action">
                    <Link to={`/appointmentView/${details.id}`}>
                        <Button>View</Button>
                    </Link>

                    <Link to={`/appointmentDelete/${details.id}`} className="btn btn-danger">
                        Cancel
                    </Link>
                </div>

            </Card.Body>

        </Card>
    );
}

export default Appointment;
