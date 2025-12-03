import { useState } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./front.css";   // Shared form styles
import roleController from "../../helpers/roleLogin/roleLogin";

function RegisterPatient() {
    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    return (
        <div className="home">
            <center><h1 className="heading">Register Patient</h1></center>
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

        api.post(`patients`, inputs)
            .then(response => {
                alert("Patient registered successfully");
                window.location = "/patientDisplay";
            })
            .catch(error => {
                if (error.response) alert(error.response.data);
            });
    }

    // Get today's date in YYYY-MM-DD
    function getToday() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const dd = String(today.getDate()).padStart(2, "0");
        return `${yyyy}-${mm}-${dd}`;
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
                    max={getToday()}
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
                    type="text"
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

export default RegisterPatient;
