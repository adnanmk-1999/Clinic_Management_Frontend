import { useState, useEffect } from 'react';
import api from '../../helpers/axiosServer/api';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import roleController from '../../helpers/roleLogin/roleLogin';
import "./front.css";  // uses the same unified styling

function BillGenerate() {
    if (!roleController.isFrontoffice()) {
        window.location = "/login";
    }

    const { patientId } = useParams();

    return (
        <div className="home">
            <center><h1 className="heading">Generate Bill</h1></center>
            <hr />
            <div className="form-card">
                <MyForm patientId={patientId} />
            </div>
        </div>
    );
}

function MyForm({ patientId }) {
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        api.get(`/patients/${patientId}`)
            .then(res => setInputs(res.data));
    }, [patientId]);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(vals => ({ ...vals, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        api.post(`/bills`, inputs)
            .then(res => {
                alert("Bill generated successfully");
                window.location = "/patientDisplay";
            });
    }

    return (
        <Form onSubmit={handleSubmit}>

            {/* Hidden Patient ID */}
            <input type="hidden" name="patientId" value={inputs.patientId || ""} />

            {/* Patient Name */}
            <Form.Group className="mb-4">
                <label className="form-label">Patient Name</label>
                <input
                    className="form-input"
                    type="text"
                    name="patientName"
                    placeholder="Enter full name"
                    value={inputs.patientName || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Bill Amount */}
            <Form.Group className="mb-4">
                <label className="form-label">Bill Amount</label>
                <input
                    className="form-input"
                    type="number"
                    name="billAmount"
                    placeholder="Enter bill amount"
                    min="0"
                    value={inputs.billAmount || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

            {/* Buttons */}
            <div className="form-buttons">
                <Button type="submit" className="btn-primary-form">
                    Generate Bill
                </Button>

                <Button
                    type="button"
                    onClick={() => (window.location = "/patientDisplay")}
                    className="btn-secondary-form"
                >
                    Cancel
                </Button>
            </div>

        </Form>
    );
}

export default BillGenerate;
