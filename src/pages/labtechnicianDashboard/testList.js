import { useState, useEffect } from "react";
import api from "../../helpers/axiosServer/api";
import roleController from "../../helpers/roleLogin/roleLogin";
import Test from "./test";
import "./labtechnician.css";

import searchIcon from "../../assets/icons/search.svg";

function TestList() {

  if (!roleController.isLabtechnician()) {
    window.location = "/login";
  }

  const [tests, setTests] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/tests")
      .then(res => setTests(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = tests.filter(test =>
    test.testName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      <center><h1 className="heading">Lab Tests</h1></center>
      <hr />

      <div className="list-page">

        {/* Search */}
        <div className="list-search-wrapper">
          <input
            type="text"
            className="list-search"
            placeholder="Search tests..."
            onChange={e => setSearch(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="list-search-icon" />
        </div>

        {/* No tests */}
        {tests.length === 0 ? (
          <p className="list-empty">No Tests Available!</p>
        ) : (
          <>
            {/* Search returns no matches */}
            {filtered.length === 0 ? (
              <p className="list-empty">No matching tests found!</p>
            ) : (
              <div className="list-container">
                {filtered.map(test => (
                  <div className="list-card" key={test.testId}>
                    <Test details={test} />
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

export default TestList;
