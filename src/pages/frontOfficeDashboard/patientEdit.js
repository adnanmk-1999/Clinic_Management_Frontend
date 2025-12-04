import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./front.css";      // Same shared CSS as other forms
import roleController from "../../helpers/roleLogin/roleLogin";
import dates from "../../helpers/todayDate/getDate";

function PatientEdit() {

    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    const { patientId } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Edit Patient Details</h1></center>
            <hr />

            <div className="form-card">
                <MyForm patientId={patientId} />
            </div>
        </div>
    );
}

function MyForm({ patientId }) {

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        api.get(`patients/${patientId}`)
            .then(response => {
                setInputs(response.data);
            });
    }, [patientId]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.put(`patients/${patientId}`, inputs)
            .then(() => {
                alert("Patient details updated successfully!");
                window.location = "/patientDisplay";
            });
    }

    function goBack() {
        window.location = "/patientDisplay";
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Full Name */}
            <Form.Group className="mb-4">
                <label className="form-label">Full Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="patientName"
                    placeholder="Enter full name"
                    minLength={3}
                    maxLength={30}
                    value={inputs.patientName || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Date of Birth */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Birth</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfBirth"
                    max={dates.getDate()}
                    value={inputs.dateOfBirth || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Address */}
            <Form.Group className="mb-4">
                <label className="form-label">Address</label>
                <input
                    className="form-input"
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    maxLength={60}
                    value={inputs.address || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-4">
                <label className="form-label">Phone Number</label>
                <input
                    className="form-input"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    maxLength={10}
                    value={inputs.phoneNumber || ""}
                    onChange={handleChange}
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

export default PatientEdit;
