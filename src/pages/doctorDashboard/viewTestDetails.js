import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import TestCard from "./tests";
import searchIcon from "../../assets/icons/search.svg";
import "./doctor.css";

function ViewTestDetails() {

    if (!roleController.isDoctor()) {
        window.location = "/login";
    }

    const { id } = useParams();
    const [tests, setTests] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get(`/reports/tests/${id}`)
            .then(res => setTests(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const filtered = tests.filter(test =>
        test.testName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">

            <center>
                <h1 className="heading">Lab Results</h1>
            </center>
            <hr />

            <div className="list-page">

                {/* Search bar */}
                <div className="list-search-wrapper">
                    <input
                        type="text"
                        placeholder="Search tests..."
                        className="list-search"
                        onChange={e => setSearch(e.target.value)}
                    />
                    <img src={searchIcon} alt="search" className="list-search-icon" />
                </div>

                {/* First check if no tests exist */}
                {tests.length === 0 ? (
                    <p className="list-empty">No generated reports!</p>
                ) : (
                    <>
                        {/* Check if search returns no results */}
                        {filtered.length === 0 ? (
                            <p className="list-empty">No matching tests found!</p>
                        ) : (
                            <div className="list-container">
                                {filtered.map(test => (
                                    <div className="list-card" key={test.id}>
                                        <TestCard details={test} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    );
}

export default ViewTestDetails;
