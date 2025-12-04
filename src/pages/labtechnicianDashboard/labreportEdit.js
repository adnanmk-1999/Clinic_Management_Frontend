import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../helpers/axiosServer/api";
import { Form, Button } from "react-bootstrap";
import "./labtechnician.css";
import roleController from "../../helpers/roleLogin/roleLogin";

function LabreportEdit() {

    if (!roleController.isLabtechnician()) {
        window.location = "/login";
    }

    const { labReportId } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Edit Lab Report</h1></center>
            <hr />

            <div className="form-card">
                <MyForm labReportId={labReportId} />
            </div>
        </div>
    );
}

function MyForm({ labReportId }) {

    const [inputs, setInputs] = useState({});

    useEffect(() => {
        api.get(`reports/${labReportId}`)
            .then(response => {
                setInputs(response.data);
            });
    }, [labReportId]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(values => ({ ...values, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.put(`reports/${labReportId}`, inputs)
            .then(() => {
                alert("Lab Report Updated Successfully!");
                window.location = "/reportlist";
            });
    }

    function goBack() {
        window.location = `/reportdetails/${labReportId}`;
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
                    maxLength={40}
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
                    placeholder="eg. 1000–2000"
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
                    placeholder="Enter remarks"
                    maxLength={40}
                    value={inputs.remarks || ""}
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

export default LabreportEdit;
