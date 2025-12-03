import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import roleController from "../../helpers/roleLogin/roleLogin";
import dates from "../../helpers/todayDate/getDate";
import "./admin.css";

function EventEdit() {
    if (!roleController.isAdmin()) {
        window.location = "/login";
    }

    const { id } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Edit Event</h1></center>
            <hr />

            <div className="form-card">
                <MyForm id={id} />
            </div>
        </div>
    );
}

function MyForm({ id }) {
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        api.get(`/events/${id}`)
            .then(response => setInputs(response.data))
            .catch(err => console.log(err));
    }, [id]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.put(`/events/${id}`, inputs)
            .then(() => {
                alert("Event updated!");
                window.location = "/eventlist";
            })
            .catch(err => console.log(err));
    }

    function goBack() {
        window.location = "/eventlist";
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Event Name */}
            <Form.Group className="mb-4">
                <label className="form-label">Event Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="eventName"
                    placeholder="Enter event name"
                    value={inputs.eventName || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-4">
                <label className="form-label">Description</label>
                <input
                    className="form-input"
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Event Date */}
            <Form.Group className="mb-4">
                <label className="form-label">Event Date</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfEvent"
                    value={inputs.dateOfEvent || ""}
                    onChange={handleChange}
                    min={dates.getDate()}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button className="btn-primary-form" type="submit">
                    Update
                </Button>

                <Button className="btn-secondary-form" onClick={goBack}>
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default EventEdit;
