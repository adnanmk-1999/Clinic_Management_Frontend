import { useState } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./admin.css";
import roleController from "../../helpers/roleLogin/roleLogin";
import dates from "../../helpers/todayDate/getDate";

function RegisterEvent() {
    if (!roleController.isAdmin()) {
        window.location = "/login";
    }

    return (
        <div className="home">
            <center><h1 className="heading">Register Event</h1></center>
            <hr />

            <div className="form-card">
                <MyForm />
            </div>
        </div>
    );
}

function MyForm() {
    const [inputs, setInputs] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.post(`events`, inputs)
            .then(() => {
                alert("Event registered successfully!");
                window.location = "/eventlist";
            })
            .catch(error => {
                if (error.response) alert(error.response.data);
            });
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
                    placeholder="Enter event description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Date of Event */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Event</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfEvent"
                    min={dates.getDate()}
                    value={inputs.dateOfEvent || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button className="btn-primary-form" type="submit">
                    Register
                </Button>

                <Button
                    className="btn-secondary-form"
                    onClick={() => (window.location = "/")}
                >
                    Cancel
                </Button>
            </div>

        </Form>
    );
}

export default RegisterEvent;
