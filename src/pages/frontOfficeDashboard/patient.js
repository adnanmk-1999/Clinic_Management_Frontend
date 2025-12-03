import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import "./front.css";

function Patient({ details }) {
    return (
        <Card className="generic-card">

            <Card.Header className="generic-card-header">
                Patient: {details.patientName}
            </Card.Header>

            <Card.Body className="generic-card-body">

                <Card.Title className="generic-card-title">
                    Patient ID: {details.patientId}
                </Card.Title>

                <div className="generic-card-action">
                    <Link to={`/patientView/${details.patientId}`}>
                        <Button>View</Button>
                    </Link>

                    <Link to={`/PatientDelete/${details.patientId}`} className="btn btn-danger">
                        Delete
                    </Link>

                    <Link to={`/billGenerate/${details.patientId}`}>
                        <Button variant="secondary" >
                            Generate Bill
                        </Button>
                    </Link>
                </div>

            </Card.Body>

        </Card>
    );
}

export default Patient;
