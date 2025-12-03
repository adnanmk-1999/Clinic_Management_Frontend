import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import dates from "../../helpers/todayDate/getDate";
import "./doctor.css";

function MedicineForm(props) {
    const [inputs, setInputs] = useState({});

    // Fetch patient info using patientId passed via props.details
    useEffect(() => {
        api.get(`/patients/${props.details}`)
            .then(response => setInputs(response.data))
            .catch(err => console.log(err));
    }, [props.details]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.post(`/medicines`, inputs)
            .then(() => {
                alert("Medicine Added! Add more if needed.");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="home">
            <center><h1 className="heading">Add Medicine</h1></center>
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
                            className="form-select"
                            name="unit"
                            value={inputs.unit || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select unit</option>
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
                            placeholder="Eg. 1-0-1"
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
                            placeholder="Tablet / Syrup / Injection"
                            value={inputs.type || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Days */}
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
                            placeholder="Enter comments"
                            value={inputs.comment || ""}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Date */}
                    <Form.Group className="mb-4">
                        <label className="form-label">Date</label>
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
                            Add Medicine
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
}

export default MedicineForm;
