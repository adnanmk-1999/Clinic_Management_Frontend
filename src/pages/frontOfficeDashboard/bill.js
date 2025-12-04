import { Card, Button } from "react-bootstrap";
import "./front.css";

function Bill({ details }) {
    return (
        <Card className="generic-card">

            <Card.Header className="generic-card-header">
                Bill Receipt
            </Card.Header>

            <Card.Body className="generic-card-body">

                <Card.Title className="generic-card-title">
                    Full Name: {details.patientName}
                </Card.Title>

                <Card.Title className="generic-card-title">
                    Amount to Pay: ₹ {details.billAmount} /-
                </Card.Title>

                <div className="generic-card-action">
                    <Button>Print</Button>
                </div>

            </Card.Body>

        </Card>
    );
}

export default Bill;
