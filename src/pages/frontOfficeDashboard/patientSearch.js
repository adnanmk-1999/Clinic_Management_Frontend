import { useState } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import roleController from "../../helpers/roleLogin/roleLogin";
import "./front.css";

function Patientsearch() {
    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    return (
        <div className="home">
            <center><h1 className="heading">Search Patient</h1></center>
            <hr />
            <div className="form-card">
                <MyForm />
            </div>
        </div>
    );
}

function MyForm() {
    const [inputs, setInputs] = useState({});
    const [foundPatient, setFoundPatient] = useState(null);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(v => ({ ...v, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.get(`/patients/patient/${inputs.patientName}`)
            .then(res => {
                if (res.data.length === 0) {
                    alert("Patient not registered!");
                    window.location = "/registerPatient";
                } else {
                    setFoundPatient(res.data[0]);
                    alert("Patient exists! You can add an appointment.");
                }
            })
            .catch(err => {
                if (err.response) alert(err.response.data);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Patient Name Input */}
            <Form.Group className="mb-4">
                <label className="form-label">Patient Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="patientName"
                    placeholder="Enter patient name"
                    value={inputs.patientName || ""}
                    onChange={handleChange}
                    minLength={3}
                    maxLength={15}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button type="submit" className="btn-primary-form">
                    Check
                </Button>

                {foundPatient && (
                    <Button
                        type="button"
                        className="btn-secondary-form"
                        onClick={() => navigate(`/patientappointment/${foundPatient.patientId}`)}
                    >
                        Add Appointment
                    </Button>
                )}
            </div>
        </Form>
    );
}

export default Patientsearch;
