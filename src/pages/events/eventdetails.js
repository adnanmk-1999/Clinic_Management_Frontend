import { Card } from "react-bootstrap";
import "./event.css";
import calendarIcon from "../../assets/icons/calendar.svg"
import formatDate from "../../helpers/formatDate/formatData";

function Event(props) {
  const { eventName, description, dateOfEvent } = props.details;

  return (
    <div className="event-card-wrapper">
      <Card className="event-card">

        {/* Blue header */}
        <Card.Header className="event-header">
          {eventName}
        </Card.Header>

        {/* White content */}
        <Card.Body className="event-body">
          <Card.Title className="event-title">
            {description}
          </Card.Title>

          <div className="event-date">
            <img src={calendarIcon} alt="calendar" className="event-date-icon" />
            <span>{formatDate(dateOfEvent)}</span>
          </div>
        </Card.Body>

      </Card>
    </div>
  );
}

export default Event;
