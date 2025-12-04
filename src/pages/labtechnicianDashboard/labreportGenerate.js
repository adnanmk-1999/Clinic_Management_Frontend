import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./labtechnician.css";
import roleController from "../../helpers/roleLogin/roleLogin";

function GenerateReport() {

    if (!roleController.isLabtechnician()) {
        window.location = "/login";
    }

    const { testId } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Enter Lab Test Results</h1></center>
            <hr />

            <div className="form-card">
                <MyForm testId={testId} />
            </div>
        </div>
    );
}

function MyForm({ testId }) {

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        api.get(`tests/${testId}`)
            .then(response => {
                setInputs(response.data);
            });
    }, [testId]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.post(`reports`, inputs)
            .then(() => {
                alert("Lab Report Submitted Successfully!");
                window.location = "/reportlist";
            });
    }

    function goBack() {
        window.location = `/testdetails/${testId}`;
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Test Name */}
            <Form.Group className="mb-4">
                <label className="form-label">Test Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="testName"
                    placeholder="Enter test name"
                    minLength={3}
                    maxLength={20}
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
                    placeholder="Enter description"
                    minLength={3}
                    maxLength={50}
                    value={inputs.description || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Report Date */}
            <Form.Group className="mb-4">
                <label className="form-label">Report Date</label>
                <input
                    className="form-input"
                    type="date"
                    name="reportDate"
                    value={inputs.reportDate || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Desired Range */}
            <Form.Group className="mb-4">
                <label className="form-label">Desired Range</label>
                <input
                    className="form-input"
                    type="text"
                    name="desiredRange"
                    placeholder="e.g. 1000–2000"
                    value={inputs.desiredRange || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Result Value */}
            <Form.Group className="mb-4">
                <label className="form-label">Result Value</label>
                <input
                    className="form-input"
                    type="text"
                    name="resultValue"
                    placeholder="Enter obtained value"
                    value={inputs.resultValue || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Remarks */}
            <Form.Group className="mb-4">
                <label className="form-label">Remarks</label>
                <input
                    className="form-input"
                    type="text"
                    name="remarks"
                    placeholder="Enter comments"
                    maxLength={30}
                    value={inputs.remarks || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button className="btn-primary-form" type="submit">
                    Submit
                </Button>
                <Button className="btn-secondary-form" onClick={goBack}>
                    Cancel
                </Button>
            </div>

        </Form>
    );
}

export default GenerateReport;
