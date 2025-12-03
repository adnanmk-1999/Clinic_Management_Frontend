import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import "./app.css";

//Common imports
import Home from './pages/home/index';
import LoginForm from "./pages/login/index";
import About from "./pages/about/index";
import NoMatch from "./pages/noMatch/index";
import FooterPage from "./components/footer/footer";
import EventsPage from "./pages/events/events";

//Admin
import RegisterUser from "./pages/adminDashboard/userRegister";
import RegisterStaff from "./pages/adminDashboard/staffRegister";
import StaffList from "./pages/adminDashboard/staffList";
import StaffDetails from "./pages/adminDashboard/staffDetails";
import StaffEdit from "./pages/adminDashboard/staffEdit";
import RegisterDoctor from "./pages/adminDashboard/doctorRegister";
import DoctorList from "./pages/adminDashboard/doctorList";
import DoctorDetails from "./pages/adminDashboard/doctorDetails";
import DoctorEdit from "./pages/adminDashboard/doctorEdit";
import RegisterEvent from "./pages/adminDashboard/eventRegister";
import EventList from "./pages/adminDashboard/eventList";
import EventDetails from "./pages/adminDashboard/eventDetails";
import EventEdit from "./pages/adminDashboard/eventEdit";

//FrontOffice
import PatientDisplay from "./pages/frontOfficeDashboard/patientDisplay";
import PatientView from "./pages/frontOfficeDashboard/patientView";
import PatientDelete from "./pages/frontOfficeDashboard/patientDelete";
import PatientEdit from "./pages/frontOfficeDashboard/patientEdit";
import BillGenerate from "./pages/frontOfficeDashboard/billGenerate";
import AppointmentDisplay from "./pages/frontOfficeDashboard/appointmentDisplay";
import AppointmentView from "./pages/frontOfficeDashboard/appointmentView";
import AppointmentDelete from "./pages/frontOfficeDashboard/appointmentDelete";
import RegisterPatient from "./pages/frontOfficeDashboard/patientRegister";
import PatientAppointment from "./pages/frontOfficeDashboard/PatientAppointment";
import PatientSearch from "./pages/frontOfficeDashboard/patientSearch"
import BillDisplay from "./pages/frontOfficeDashboard/billDisplay";

//Doctor

import Appointments from "./pages/doctorDashboard/appoinmentList";
import PatientDetails from "./pages/doctorDashboard/PatientDetails";
import PrescriptionAdd from "./pages/doctorDashboard/prescription";
import Tests from "./pages/doctorDashboard/viewTestDetails";
import Labresult from "./pages/doctorDashboard/testDetails";
import EditMedicine from "./pages/doctorDashboard/medicineEdit";
import ViewPrescription from "./pages/doctorDashboard/viewPrescription"
import PrescriptionDetails from "./pages/doctorDashboard/priscriptionDetails";

//LabTechnician

import LabreportGenerate from "./pages/labtechnicianDashboard/labreportGenerate";
import LabReportList from "./pages/labtechnicianDashboard/labreportList";
import ReportDetails from "./pages/labtechnicianDashboard/labreportDetails";
import LabreportEdit from "./pages/labtechnicianDashboard/labreportEdit";
import TestList from "./pages/labtechnicianDashboard/testList";
import TestDetails from "./pages/labtechnicianDashboard/testDetails";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous" />
        <MyRouter /></div>
    </>
  );
};

function MyRouter() {
  return (
    <Router>
      <div className="backgroundImage">

        <Header />

        <div className="page-content">
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<NoMatch />} />

            {/* Admin */}
            <Route path="/userreg" element={<RegisterUser />} />
            <Route path="/staffreg" element={<RegisterStaff />} />
            <Route path="/stafflist" element={<StaffList />} />
            <Route path="/staffdetails/:staffId" element={<StaffDetails />} />
            <Route path="/staffedit/:staffId" element={<StaffEdit />} />
            <Route path="/doctorreg" element={<RegisterDoctor />} />
            <Route path="/doctorlist" element={<DoctorList />} />
            <Route path="/doctordetails/:doctorId" element={<DoctorDetails />} />
            <Route path="/doctoredit/:doctorId" element={<DoctorEdit />} />
            <Route path="/eventreg" element={<RegisterEvent />} />
            <Route path="/eventlist" element={<EventList />} />
            <Route path="/eventdetails/:id" element={<EventDetails />} />
            <Route path="/eventedit/:id" element={<EventEdit />} />

            {/* FrontOffice */}
            <Route path="/registerPatient" element={<RegisterPatient />} />
            <Route path="/patientDisplay" element={<PatientDisplay />} />
            <Route path="/patientView/:patientId" element={<PatientView />} />
            <Route path="/patientDelete/:patientId" element={<PatientDelete />} />
            <Route path="/patientEdit/:patientId" element={<PatientEdit />} />
            <Route path="/billGenerate/:patientId" element={<BillGenerate />} />
            <Route path="/patientappointment/:patientId" element={<PatientAppointment />} />
            <Route path="/appointmentDisplay" element={<AppointmentDisplay />} />
            <Route path="/appointmentView/:id" element={<AppointmentView />} />
            <Route path="/appointmentDelete/:id" element={<AppointmentDelete />} />
            <Route path="/patientsearch" element={<PatientSearch />} />
            <Route path="/billDisplay" element={<BillDisplay />} />

            {/* Doctor */}
            <Route path="/appointmentlist" element={<Appointments />} />
            <Route path="/patientdetails/:id" element={<PatientDetails />} />
            <Route path="/prescriptionadd/:id" element={<PrescriptionAdd />} />
            <Route path="/patient/tests/:id" element={<Tests />} />
            <Route path="/patient/labresult/:id" element={<Labresult />} />
            <Route path="/viewpriscription" element={<ViewPrescription />} />
            <Route path="/priscdetails/:id" element={<PrescriptionDetails />} />
            <Route path="/prescriptionedit/:id" element={<EditMedicine />} />

            {/* Lab Technician */}
            <Route path="/testlist" element={<TestList />} />
            <Route path="/testdetails/:testId" element={<TestDetails />} />
            <Route path="/generatereport/:testId" element={<LabreportGenerate />} />
            <Route path="/reportlist" element={<LabReportList />} />
            <Route path="/reportdetails/:labReportId" element={<ReportDetails />} />
            <Route path="/reportedit/:labReportId" element={<LabreportEdit />} />
          </Routes>
        </div>

        <FooterPage />

      </div>
    </Router>
  );
}

export default App;