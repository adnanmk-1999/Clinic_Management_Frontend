import { useEffect, useState } from "react";
import api from "../../helpers/axiosServer/api";
import Bill from "./bill";
import "./front.css";
import searchIcon from "../../assets/icons/search.svg";

function BillDisplay() {

    const [bills, setBills] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        api.get("/bills")
            .then(res => setBills(res.data))
            .catch(err => console.log(err));
    }, []);

    const filtered = bills.filter(b =>
        b.patientName?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            <center><h1 className="heading">Bills</h1></center>
            <hr />

            <div className="list-page">

                {/* SEARCH BAR */}
                <div className="list-search-wrapper">
                    <input
                        type="text"
                        className="list-search"
                        placeholder="Search bills..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <img src={searchIcon} alt="search" className="list-search-icon" />
                </div>

                {/* Empty States */}
                {bills.length === 0 ? (
                    <p className="list-empty">No bills generated!</p>
                ) : (
                    <>
                        {filtered.length === 0 ? (
                            <p className="list-empty">No matching bills found!</p>
                        ) : (
                            <div className="list-container">
                                {filtered.map(bill => (
                                    <div className="list-card" key={bill.id}>
                                        <Bill details={bill} />
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

export default BillDisplay;
