import { useState } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./admin.css";
import roleController from "../../helpers/roleLogin/roleLogin";
import dates from "../../helpers/todayDate/getDate";

function RegisterDoctor() {
    if (!roleController.isAdmin()) {
        window.location = "/login";
    }

    return (
        <div className="home">
            <center><h1 className="heading">Register Doctor</h1></center>
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

        api.post(`doctors`, inputs)
            .then(() => {
                alert("Doctor registered successfully!");
                window.location = "/doctorlist";
            })
            .catch(error => {
                if (error.response) alert(error.response.data);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Full Name */}
            <Form.Group className="mb-4">
                <label className="form-label">Full Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="doctorName"
                    placeholder="Enter full name"
                    minLength={3}
                    maxLength={25}
                    value={inputs.doctorName || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Specialization */}
            <Form.Group className="mb-4">
                <label className="form-label">Specialization</label>
                <select
                    name="specialization"
                    className="form-select"
                    value={inputs.specialization || ""}
                    onChange={handleChange}
                    required
                >
                    <option value="">Choose one</option>
                    <option value="allergist">Allergist</option>
                    <option value="anesthesiologist">Anesthesiologist</option>
                    <option value="cardiologist">Cardiologist</option>
                    <option value="surgeon">Surgeon</option>
                    <option value="dermatologist">Dermatologist</option>
                    <option value="physician">Physician</option>
                    <option value="gastroenterologist">Gastroenterologist</option>
                    <option value="others">Others</option>
                </select>
            </Form.Group>

            {/* Qualification */}
            <Form.Group className="mb-4">
                <label className="form-label">Qualification</label>
                <input
                    className="form-input"
                    type="text"
                    name="qualification"
                    placeholder="Enter qualification"
                    value={inputs.qualification || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Gender */}
            <Form.Group className="mb-4">
                <label className="form-label">Gender</label>
                <div className="radio-group">
                    <label className="radio-item">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            required
                        />
                        <span>Male</span>
                    </label>

                    <label className="radio-item">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            required
                        />
                        <span>Female</span>
                    </label>
                </div>
            </Form.Group>

            {/* Date of Birth */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Birth</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfBirth"
                    max={dates.childLabour()}
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
                    maxLength={40}
                    value={inputs.address || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Date of Join */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Join</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfJoin"
                    max={dates.getDate()}
                    value={inputs.dateOfJoin || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-4">
                <label className="form-label">Phone</label>
                <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    minLength={10}
                    maxLength={10}
                    value={inputs.phone || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-4">
                <label className="form-label">Email</label>
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Experience */}
            <Form.Group className="mb-4">
                <label className="form-label">Experience</label>
                <input
                    className="form-input"
                    type="text"
                    name="experience"
                    placeholder="Enter experience"
                    value={inputs.experience || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button className="btn-primary-form" type="submit">Register</Button>
                <Button className="btn-secondary-form" onClick={() => (window.location = "/")}>
                    Cancel
                </Button>
            </div>

        </Form>
    );
}

export default RegisterDoctor;
