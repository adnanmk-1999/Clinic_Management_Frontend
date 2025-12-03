import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import roleController from "../../helpers/roleLogin/roleLogin";
import dates from "../../helpers/todayDate/getDate";
import "./doctor.css";

function MedicineEdit() {
    if (!roleController.isDoctor()) {
        window.location = "/login";
    }

    const { id } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Edit Medicine</h1></center>
            <hr />
            <div className="form-card">
                <MyForm medicineId={id} />
            </div>
        </div>
    );
}

function MyForm({ medicineId }) {
    const [inputs, setInputs] = useState({});

    // Fetch existing medicine details
    useEffect(() => {
        api.get(`/medicines/${medicineId}`)
            .then(response => {
                setInputs(response.data);
            })
            .catch(err => console.log(err));
    }, [medicineId]);

    // Change handler
    function handleChange(event) {
        const { name, value } = event.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    }

    // Submit (Update medicine)
    function handleSubmit(event) {
        event.preventDefault();

        api.put(`/medicines/${medicineId}`, inputs)
            .then(() => {
                alert("Medicine updated!");
                window.location = `/patientdetails/${inputs.patientId}`;
            })
            .catch(err => console.log(err));
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Patient ID */}
            <input
                type="hidden"
                name="patientId"
                value={inputs.patientId || ""}
                onChange={handleChange}
            />

            {/* Medicine Name */}
            <Form.Group className="mb-4">
                <label className="form-label">Medicine Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="medicineName"
                    placeholder="Enter medicine name"
                    value={inputs.medicineName || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Unit */}
            <Form.Group className="mb-4">
                <label className="form-label">Unit</label>
                <select
                    name="unit"
                    className="form-select"
                    value={inputs.unit || ""}
                    onChange={handleChange}
                    required
                >
                    <option value="">Choose one</option>
                    <option value="mg">MG</option>
                    <option value="ml">ML</option>
                </select>
            </Form.Group>

            {/* Dose */}
            <Form.Group className="mb-4">
                <label className="form-label">Dose</label>
                <input
                    className="form-input"
                    type="text"
                    name="dose"
                    value={inputs.dose || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Type */}
            <Form.Group className="mb-4">
                <label className="form-label">Type</label>
                <input
                    className="form-input"
                    type="text"
                    name="type"
                    value={inputs.type || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Day */}
            <Form.Group className="mb-4">
                <label className="form-label">Days</label>
                <input
                    className="form-input"
                    type="text"
                    name="day"
                    placeholder="Number of days"
                    value={inputs.day || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Comments */}
            <Form.Group className="mb-4">
                <label className="form-label">Comments</label>
                <input
                    className="form-input"
                    type="text"
                    name="comment"
                    value={inputs.comment || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Date */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Medicine</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateMedicine"
                    value={inputs.dateMedicine || ""}
                    onChange={handleChange}
                    min={dates.getDate()}
                    max={dates.getDate()}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button className="btn-primary-form" type="submit">
                    Save Medicine
                </Button>
            </div>

        </Form>
    );
}

export default MedicineEdit;
