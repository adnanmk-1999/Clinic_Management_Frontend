import Carousel from "../../components/carousel/carousel";

import "./home.css";

function HomePage() {
  return (
    <>
      <div className="home">
        <center><h1 className="heading">Our Vision</h1></center>
        <hr />
        <p className="pretty-text">HealthTech CMS is a modern, fully digital platform designed to simplify and enhance the day-to-day operations of
          clinics and healthcare centers. Our system brings together patient management, doctor workflows, laboratory coordination,
          billing, staff administration, and secure medical data handling into one intuitive application.
          The goal is simple: help clinics run smoothly, eliminate unnecessary manual tasks, and give doctors and
          patients a more efficient, stress-free experience.
          <br />
          From the moment a patient walks in, their information begins flowing through a system that understands how clinics truly operate.
          Registration becomes quick, patient data becomes organized, and every department stays connected without the need for
          handwritten notes or scattered files.
        </p>

        <Carousel />

        <center><h5 className="heading">SEAMLESS START TO EVERY PATIENT JOURNEY</h5></center>
        <p className="pretty-text">The front office plays a central role in a clinic’s daily activities, and HealthTech CMS ensures that the experience is both fast and organized.
          Staff can register patients in just a few steps, update their information instantly, and search across records with accurate matching.
          Appointment scheduling becomes easier as the system intelligently keeps track of which doctor is available, at what time, and on which day.<br />
          As patients arrive for follow-ups or new consultations, the front office can verify their details instantly and check their billing or
          previously completed lab tests without flipping through pages or files. This smooth workflow not only reduces queues but also ensures
          that every patient arrives at the doctor’s door with their details already prepared.</p>

        <center><h5 className="heading">REAL DOCTOR IS MUST</h5></center>
        <p className="pretty-text">Doctors benefit the most from a system that intelligently organizes clinical information. When a patient arrives,
          the doctor can view their entire medical background within seconds — including previous visits, ongoing conditions, test results,
          and prescriptions. This eliminates guesswork and allows doctors to focus fully on diagnosis and treatment.
          <br />
          During the consultation, doctors can add new prescriptions digitally, write notes, recommend tests, or review the updated information instantly.
          There is no need to shuffle through papers or rely on memory. Each consultation ends with clear documentation, making the doctor’s day
          more productive and the patient’s experience more reassuring.
        </p>

        <center><h5 className="heading">STRUCTURED AND ERROR-FREE TEST MANAGEMENT</h5></center>
        <p className="pretty-text">For lab technicians, HealthTech CMS brings order to a process that is often chaotic. When a doctor requests a test, the lab staff instantly receives the request through their dashboard.
          Technicians can update results, add descriptions, define ranges, and finalize reports without worrying about format or handwriting errors.
          <br />
          Once completed, the report becomes immediately visible to the doctor, who can review it before the patient’s next appointment.
          This real-time coordination significantly improves communication between departments and ensures that no report is misplaced or delayed.
        </p>

        <center><h5 className="heading">COMPLETE CONTROL OVER CLINIC OPERATIONS</h5></center>

        <p className="pretty-text">Administrators have the highest level of access within the system. They can create and manage user accounts, assign roles, update permissions,
          monitor events taking place in the clinic, and ensure that the entire workflow remains secure and organized.
          <br />
          With centralized control, admins can keep track of all activities including new patient registrations, staff updates, doctor availability,
          event announcements, and system usage patterns. This makes decision-making easier and ensures accountability across every department.
        </p>

        <center><h5 className="heading">A UNIFIED WORKFLOW FROM START TO FININSH</h5></center>
        <p className="pretty-text">
          Every clinic functions as a network of interconnected roles, and HealthTech CMS ties these roles together with a smooth, uninterrupted flow of information.
          A patient who arrives at the clinic gets registered immediately; their details flow to the doctor before the consultation; tests get requested and
          completed without miscommunication; and the patient walks out with clear instructions and documented reports. Billing and staff operations support this
          cycle throughout the day, making the clinic faster, more accurate, and more patient-friendly. This level of organization not only saves time
          but also reduces errors, improves satisfaction, and ensures that every individual — whether staff, doctor, or patient — experiences a more
          streamlined system.
        </p>
      </div>

    </>
  );
};

export default HomePage;