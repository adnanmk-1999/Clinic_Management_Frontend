import { useState } from "react";
import api from '../../helpers/axiosServer/api';
import { Form, Button } from "react-bootstrap";
import "./login.css";
import eyeOpen from "../../assets/icons/eyeOpen.svg";
import eyeClosed from "../../assets/icons/eyeClosed.svg";

function LoginForm() {
    localStorage.clear();

    return (
        <>
            <div className="home">
                <center><h1 className="heading">Login</h1></center>
                <hr />
                <div className="login-container">

                    <div className="login-card">
                        <MyForm />
                    </div>
                </div>
            </div>
        </>
    );
}

function MyForm() {
    const [inputs, setInputs] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        api
            .post(`users/login`, inputs)
            .then(response => {
                localStorage.setItem("mytoken", response.data.accessToken);
                localStorage.setItem("myrole", response.data.roleId);
                localStorage.setItem("myemail", response.data.user.userName);
                window.location = "/";
            })
            .catch(error => {
                localStorage.clear();
                if (error.response) alert(error.response.data);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            {/* Email */}
            <Form.Group className="mb-4">
                <Form.Label className="login-label">User Email</Form.Label>
                <input
                    className="login-input"
                    type="email"
                    name="userName"
                    placeholder="Enter your email"
                    value={inputs.userName || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-4">
                <Form.Label className="login-label">Password</Form.Label>
                <div className="password-wrapper">
                    <input
                        className="login-input"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                        required
                    />
                    <img
                        src={showPassword ? eyeClosed : eyeOpen}
                        className="password-toggle"
                        alt="toggle password"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>
            </Form.Group>

            {/* Buttons */}
            <div className="login-buttons">
                <Button className="login-btn-primary" type="submit">
                    Login
                </Button>
                <Button
                    className="login-btn-secondary"
                    onClick={() => (window.location = "/")}
                >
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;
