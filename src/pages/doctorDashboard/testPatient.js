import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import dates from "../../helpers/todayDate/getDate";
import "./doctor.css";

function TestForm(props) {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    // Fetch patient info
    useEffect(() => {
        api.get(`/patients/${props.patient}`)
            .then((response) => {
                setInputs(response.data);
            })
            .catch((err) => console.log(err));
    }, [props.patient]);

    function handleChange(event) {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        api.post(`/tests`, inputs)
            .then(() => {
                alert("Test added! You can add more.");
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="home">
            <center>
                <h1 className="heading">Add Lab Test</h1>
            </center>
            <hr />

            <div className="form-card">
                <Form onSubmit={handleSubmit}>

                    {/* Hidden Patient ID */}
                    <input
                        type="hidden"
                        name="patientId"
                        value={inputs.patientId || ""}
                        onChange={handleChange}
                    />

                    {/* Test Name */}
                    <Form.Group className="mb-4">
                        <label className="form-label">Test Name</label>
                        <input
                            className="form-input"
                            type="text"
                            name="testName"
                            placeholder="Enter test name"
                            value={inputs.testName || ""}
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
                            placeholder="Short description"
                            value={inputs.description || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Test Date */}
                    <Form.Group className="mb-4">
                        <label className="form-label">Test Date</label>
                        <input
                            className="form-input"
                            type="date"
                            name="testDate"
                            value={inputs.testDate || ""}
                            onChange={handleChange}
                            min={dates.getDate()}
                            max={dates.getDate()}
                            required
                        />
                    </Form.Group>

                    {/* Buttons */}
                    <div className="form-buttons">
                        <Button className="btn-primary-form" type="submit">
                            Add Test
                        </Button>

                        <Button
                            className="btn-secondary-form"
                            type="button"
                            onClick={() => navigate("/appointmentlist")}
                        >
                            Finish
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default TestForm;
