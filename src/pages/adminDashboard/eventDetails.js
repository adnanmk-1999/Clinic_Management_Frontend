import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./admin.css";
import formatDate from "../../helpers/formatDate/formatData";


function EventDetails() {

  if (!roleController.isAdmin()) {
    window.location = "/login";
  }

  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  function handleDelete(eventId) {
    api
      .delete(`/events/${eventId}`)
      .then(() => {
        window.location = "/eventlist";
      })
      .catch(err => console.log(err));
  }

  if (!event) return null;

  return (
    <div className="home">
      <center>
        <h1 className="heading">Event Details</h1>
      </center>
      <hr />

      <div className="details-wrapper">
        <div className="details-card">

          {/* Blue header */}
          <div className="details-card-header">
            {event.eventName}
          </div>

          {/* Body */}
          <div className="details-card-body">

            <div className="details-row">
              <span className="details-label">Description</span>
              <span className="details-value">{event.description}</span>
            </div>

            <div className="details-row">
              <span className="details-label">Date of Event</span>
              <span className="details-value">{formatDate(event.dateOfEvent)}</span>
            </div>

            {/* Buttons */}
            <div className="details-actions">
              <button
                className="btn btn-primary"
                onClick={() => navigate(`/eventedit/${event.id}`)}
              >
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/eventlist")}
              >
                Back to List
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default EventDetails;
