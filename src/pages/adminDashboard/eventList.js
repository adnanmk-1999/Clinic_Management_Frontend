import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import Event from "./event";
import "./admin.css";

import searchIcon from "../../assets/icons/search.svg"

function EventList() {
  if (!roleController.isAdmin()) {
    window.location = "/login";
  }

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = events.filter(ev =>
    ev.eventName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <center>
        <h1 className="heading">Event List</h1>
      </center>
      <hr />

      <div className="list-page">

        {/* Search Bar */}
        <div className="list-search-wrapper">
          <input
            type="text"
            className="list-search"
            placeholder="Search events..."
            onChange={e => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="list-search-icon" />
        </div>

        {/* Empty Message */}
        {/* If the events array itself is empty */}
        {events.length === 0 ? (
          <p className="list-empty">No events available!</p>
        ) : (
          <>
            {/* If search is applied but returns zero results */}
            {filtered.length === 0 ? (
              <p className="list-empty">No matching events found!</p>
            ) : (
              <div className="list-container">
                {filtered.map(event => (
                  <div className="list-card" key={event.id}>
                    <Event details={event} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EventList;
