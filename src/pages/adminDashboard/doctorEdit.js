import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import roleController from "../../helpers/roleLogin/roleLogin";
import dates from "../../helpers/todayDate/getDate";
import "./admin.css";

function DoctorEdit() {
    if (!roleController.isAdmin()) {
        window.location = "/login";
    }

    const { doctorId } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Edit Doctor</h1></center>
            <hr />

            <div className="form-card">
                <MyForm doctorId={doctorId} />
            </div>
        </div>
    );
}

function MyForm({ doctorId }) {
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        api.get(`/doctors/${doctorId}`)
            .then(response => setInputs(response.data))
            .catch(err => console.log(err));
    }, [doctorId]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.put(`/doctors/${doctorId}`, inputs)
            .then(() => {
                alert("Doctor details updated!");
                window.location = "/doctorlist";
            })
            .catch(err => console.log(err));
    }

    function goToDetails() {
        window.location = `/doctordetails/${doctorId}`;
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
                    value={inputs.doctorName || ""}
                    minLength={3}
                    maxLength={30}
                    required
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Specialization */}
            <Form.Group className="mb-4">
                <label className="form-label">Specialization</label>
                <select
                    name="specialization"
                    className="form-select"
                    value={inputs.specialization || ""}
                    required
                    onChange={handleChange}
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
                    required
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Gender */}
            <Form.Group className="mb-4">
                <label className="form-label">Gender</label>
                <select
                    name="gender"
                    className="form-select"
                    value={inputs.gender || ""}
                    required
                    onChange={handleChange}
                >
                    <option value="">Choose one</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </Form.Group>

            {/* Date of Birth */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Birth</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfBirth"
                    value={inputs.dateOfBirth || ""}
                    max={dates.childLabour()}
                    required
                    onChange={handleChange}
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
                    maxLength={50}
                    value={inputs.address || ""}
                    required
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Date of Join */}
            <Form.Group className="mb-4">
                <label className="form-label">Date of Join</label>
                <input
                    className="form-input"
                    type="date"
                    name="dateOfJoin"
                    value={inputs.dateOfJoin || ""}
                    max={dates.getDate()}
                    required
                    onChange={handleChange}
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
                    maxLength={10}
                    value={inputs.phone || ""}
                    required
                    onChange={handleChange}
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
                    required
                    onChange={handleChange}
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
                    required
                    onChange={handleChange}
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button className="btn-primary-form" type="submit">
                    Update
                </Button>

                <Button className="btn-secondary-form" onClick={goToDetails}>
                    Cancel
                </Button>
            </div>

        </Form>
    );
}

export default DoctorEdit;
