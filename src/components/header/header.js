import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./header.css";
import logo from "../../assets/healthcare.png";
import roleController from "../../helpers/roleLogin/roleLogin";



function Header() {
  return (
    <Navbar expand="lg" className="main-navbar shadow-sm py-2">
      <Container>

        {/* LOGO + TITLE */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            height="40"
            alt="logo"
            className="me-2"
            style={{ borderRadius: "4px" }}
          />

          <div className="brand-text">
            <span className="brand-title">HealthTech</span>
            <span className="brand-subtitle">Clinic Management System</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">

          <Nav className="ms-auto nav-links-container">

            {/* PUBLIC ROUTES */}
            <Nav.Link as={Link} to="/" className="nav-item-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-item-link">Events</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item-link">About Us</Nav.Link>

            {/* LOGIN */}
            {!localStorage.getItem("mytoken") && (
              <Nav.Link as={Link} to="/login" className="nav-item-link login-btn-link">
                Log In
              </Nav.Link>
            )}

            {/* ADMIN */}
            {roleController.isAdmin() && (
              <>
                <Nav.Link as={Link} to="/userreg" className="nav-item-link">Register User</Nav.Link>

                <NavDropdown title="Staff Management" className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/staffreg">Register Staff</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/stafflist">Staff List</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Doctor Management" className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/doctorreg">Register Doctor</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/doctorlist">Doctor List</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Event Management" className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/eventreg">Register Event</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/eventlist">Event List</NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* FRONT OFFICE */}
            {roleController.isFrontoffice() && (
              <>
                <NavDropdown title="Patient Management" className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/registerPatient">Register Patient</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/patientDisplay">Patient List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/billDisplay">Bill Info</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Appointment Management" className="nav-dropdown">
                  <NavDropdown.Item as={Link} to="/patientsearch">Search Patient</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/appointmentDisplay">Appointments</NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* DOCTOR */}
            {roleController.isDoctor() && (
              <Nav.Link as={Link} to="/appointmentlist" className="nav-item-link">
                Consultation List
              </Nav.Link>
            )}

            {/* LAB TECH */}
            {roleController.isLabtechnician() && (
              <>
                <Nav.Link as={Link} to="/testlist" className="nav-item-link">Prescribed Tests</Nav.Link>
                <Nav.Link as={Link} to="/reportlist" className="nav-item-link">Lab Reports</Nav.Link>
              </>
            )}

            {/* LOGOUT */}
            {localStorage.getItem("mytoken") && (
              <Nav.Link className="nav-item-link logout-btn-link" onClick={() => { localStorage.clear(); window.location = "/login"; }}>
                Logout
              </Nav.Link>
            )}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;