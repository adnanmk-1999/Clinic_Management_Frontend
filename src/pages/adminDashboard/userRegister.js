import { useState } from "react";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./admin.css";
import roleController from "../../helpers/roleLogin/roleLogin";

function RegisterUser() {
    if (!roleController.isAdmin()) {
        window.location = "/login";
    }

    return (

        <div className="home">
            <center><h1 className="heading">Register User</h1></center>
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

        api.post(`users/register`, inputs)
            .then(() => {
                alert("User registered!");
                window.location = "/";
            })
            .catch(error => {
                if (error.response) alert(error.response.data);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Email */}
            <Form.Group className="mb-4">
                <label className="form-label">User Email</label>
                <input
                    className="form-input"
                    type="email"
                    name="userName"
                    placeholder="Enter email"
                    value={inputs.userName || ""}
                    onChange={handleChange}
                    required
                />
                <div className="input-note">
                    We'll never share your email with anyone else.
                </div>
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-4">
                <label className="form-label">Password</label>
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    minLength={6}
                    maxLength={12}
                    value={inputs.password || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Role */}
            <Form.Group className="mb-4">
                <label className="form-label">Role</label>
                <select
                    name="roleId"
                    className="form-select"
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a role</option>
                    <option value="1">Admin</option>
                    <option value="2">Doctor</option>
                    <option value="3">Front Office</option>
                    <option value="4">Lab Technician</option>
                </select>
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button type="submit" className="btn-primary-form">
                    Register
                </Button>

                <Button onClick={() => (window.location = "/")} className="btn-secondary-form">
                    Cancel
                </Button>
            </div>

        </Form>
    );
}

export default RegisterUser;
