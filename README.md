<p align="center">
  <img src="docs/health-tech.png" alt="HealthTech Logo" width="140"/>
</p>

<h1 align="center">HealthTech – Clinic Management System</h1>

<p>
  A modern, role-based clinic management platform built with <b>React</b>, offering dedicated dashboards for doctors, lab technicians, front-office staff, and administrators.
  <br/>
  Seamlessly integrates with a <b>Node.js + Express + Sequelize</b> backend for authentication, RBAC, patient records, lab workflows, and appointments.
</p>


<p align="center">
  <!-- 🎞️ Placeholder for UI Demo GIF -->
  <img src="docs/ui-demo.gif" alt="Clinic Management System UI Demo" width="800"/>
</p>


## 🔗 Related Repository (Backend)

The backend service that powers this frontend can be found here:

👉 **Backend Repository:**  
https://github.com/adnanmk-1999/Clinic_Management_Backend

This includes:

- Authentication and login flow  
- Role-based access logic  
- Patient database models  
- Admin, Doctor, Lab Tech, and Front Office API routes  
- MySQL integration (Local / Docker)  
- Docker Compose support  


## 📚 Table of Contents

Click to jump to a section:

1. [🏥 About the Application](#-about-the-application)
2. [📐 Architecture & Backend Overview](#-architecture--backend-overview)
3. [🖼️ Screenshots & GIFs](#️-screenshots--gifs)
4. [✨ Features](#-features)
5. [🧭 How to Use the App](#-how-to-use-the-app-user-flow)
6. [🚀 Getting Started](#-getting-started--frontend-only)
7. [🔌 Connecting to the Backend](#-connecting-the-frontend-to-the-backend-api)
8. [🌍 Deployment Guide](#-deployment-guide)
9. [🧰 Tech Stack](#-tech-stack)
10. [📂 Project Structure](#-project-structure)
11. [🔮 Future Enhancements](#-future-enhancements)
12. [📄 License & Contact](#-license--contact)


## 🩺 About the Application

<p align="center">
  <!-- 🎞️ Placeholder for ABOUT PAGE GIF -->
  <img src="docs/about-section.gif" alt="About Section - Clinic Management System" width="800"/>
</p>

The **Clinic Management System – Frontend** is a unified web interface designed to streamline daily operations inside a clinic.  
It replaces fragmented tools, manual paperwork, and scattered spreadsheets by providing a **structured, role-based, secure, and intuitive interface** for clinic staff.

This application is built to serve **four major roles** within a clinic:

- **Admin**
- **Doctor**
- **Front Office Staff**
- **Lab Technician**

Each role gets a personalized dashboard and tools relevant to their responsibilities, making the clinic workflow smoother, faster, and more error-free.

---

### 💡 Why This App Is Important for a Clinic

Modern clinics handle a **large amount of sensitive and time-critical data**, including:

- Patient medical records  
- Appointments and schedules  
- Lab tests and results  
- Staff responsibilities and role management  
- Events, notifications, and daily operations  

When these processes are handled manually or across disconnected systems, clinics face:

#### ❌ Inefficiencies in communication  
#### ❌ Risk of human error  
#### ❌ Mismanaged patient data  
#### ❌ Slow service and patient frustration  
#### ❌ Poor coordination between staff roles  

This application addresses all of those issues by providing:


### ✔ A Centralized System  

All patient data, appointments, lab results, and internal workflows live in **one** system that all roles can access according to their permissions.


### ✔ Faster & Smarter Workflows  

- Doctors instantly see assigned patients and their details.  
- Front office staff can register patients and manage appointments efficiently.  
- Lab technicians get a clear list of test orders and can update statuses.  
- Admins get a higher-level view of the clinic’s operations.


### ✔ Role-Based Access Control (RBAC)  

Each staff member sees only what they are supposed to see. This improves:

- Security  
- Clarity  
- Operational flow  


### ✔ Real-Time Data Sync  

With a connected backend and MySQL database:

- Newly added patients appear instantly  
- Lab updates flow back to doctors and admin  
- Appointments and events update dynamically  

No manual syncing. No duplicated data. No cross-checking different tools.


### ✔ Professional, Scalable & Cloud-Ready  

The app is structured for:

- Cloud deployment  
- Docker-based setups  
- Adding more roles in the future  
- Extending to multi-branch clinics over time  


### ✔ Modern User Experience  

Built using React with responsive UI components:

- Clean dashboards  
- Clear navigation  
- Easy patient lookup  
- Error handling and graceful fallbacks (e.g., custom 404 / NoMatch page)


### 🌟 In one sentence:

> **This app modernizes clinic operations by providing a fast, secure, and role-oriented management interface that helps every staff member do their job more efficiently.**

## 📐 Architecture & Backend Overview

The Clinic Management System follows a **three-tier architecture** consisting of:

1. A **React-based frontend** (this repository)
2. A **Node.js + Express backend API**
3. A **MySQL relational database** hosted locally, via Docker, or on cloud services like Aiven

This layered design ensures scalability, clean separation of concerns, and secure handling of patient and staff data.

<p align="center">
  <img src="docs/erd-schema.png" alt="Clinic Management System ERD" width="900"/>
</p>

### 🧠 How the System Works Together

**React Frontend (UI/UX Layer)**  
The frontend handles:
- Role-based dashboards  
- Navigation and views  
- Patient lists, appointments, and lab workflows  
- Login and session flow  
- Form inputs and validations  

All dynamic data comes from the backend API.

**Node.js Backend (API & Logic Layer)**  
The backend manages:
- Authentication & authorization  
- Token handling  
- Mapping users to roles (Admin, Doctor, Lab Technician, etc.)  
- CRUD operations for patients, staff, appointments, lab tests  
- Validation and business rules  
- Secure communication with the database  
- Sequelize ORM models, migrations, and relationships  

**MySQL Database (Data Layer)**  
The database stores all clinic-related information including:
- Clinic details  
- Staff and roles  
- Patients and appointments  
- Test reports and prescriptions  
- Lab workflows  
- Billing and administrative records  

### 🔌 Communication Flow

```
React Frontend (Axios)
        │
        ▼
Backend API (Express + Sequelize)
        │
        ▼
MySQL Database (Docker / Local)
```

- The frontend sends HTTP requests using Axios.  
- The backend performs data validation, applies logic, and queries the database.  
- Responses return structured JSON for the frontend to render dynamic dashboards.


## ✨ Features

The Clinic Management System provides a rich set of features tailored to the daily operations of a clinic.  
Every feature is connected to the backend API and adapts dynamically based on the user’s role.

<p align="center">
  <!-- 🎞️ Placeholder for a GIF showcasing multiple features -->
  <img src="docs/features-overview.gif" alt="Features Overview GIF" width="800"/>
</p>

### 🌟 Key Highlights

- Fully role-based dashboards (Admin, Doctor, Front Office, Lab Technician)  
- Secure authentication & controlled access  
- End-to-end patient workflow support  
- Lab test workflows connected to doctors & admin  
- Appointment scheduling and management  
- Event announcements and internal communication  
- Error handling, fallback pages, and polished UI  

The section below breaks down features **role-by-role**, showing how each part of the clinic benefits from this system.


## 👨‍💼 Admin Features

<p align="center">
  <img src="docs/admin-dashboard.gif" alt="Admin Dashboard GIF" width="800"/>
</p>

Admins get the highest level of control. Their dashboard offers:

### 🛠 User & Role Management
- View all registered users  
- Assign or modify roles (Doctor, Lab Technician, Front Office)  
- Manage staff credentials  
- Improve onboarding and reduce administrative overhead  

### 📊 Clinic Oversight
- Overview of patient activity  
- Track lab operations  
- Monitor appointments & staff availability  

### 🎯 Why this helps
Admins can run the clinic **efficiently and transparently**, reducing bottlenecks and ensuring the clinic runs smoothly each day.

## 🧑‍💼 Front Office Features

<p align="center">
  <img src="docs/frontoffice-dashboard.gif" alt="Front Office Dashboard GIF" width="800"/>
</p>

Front office staff interact with patients first. Their dashboard supports:

### 📝 Patient Registration
- Add new patients with demographic details  
- Avoid manual entry errors and paper forms  

### 📅 Appointment Scheduling
- Book appointments for doctors  
- Manage time slots  
- View upcoming schedules  

### 📞 Patient Search & Info Retrieval
- Quickly find patient details  
- Supports walk-ins and returning patients  

### 🎯 Why this helps
Front office work becomes **faster, smoother, and error-free**, improving patient experience right from the entrance.

## 👨‍⚕️ Doctor Features

<p align="center">
  <img src="docs/doctor-dashboard.gif" alt="Doctor Dashboard GIF" width="800"/>
</p>

Doctors receive tools that let them focus on actual care:

### 🧑‍⚕️ Patient Overview
- View assigned patients  
- Access medical details, visits, test results  

### 🧪 Lab Test Integration
- See pending or completed lab reports  
- Track test statuses without manually checking with technicians  

### 🗓 Appointment View
- See daily appointments  
- Helps doctors plan their day efficiently  

### 🎯 Why this helps
Doctors spend less time looking for information and more time providing care.  
Everything is **centralized, searchable, and updated in real-time**.


## 🧪 Lab Technician Features

<p align="center">
  <img src="docs/labtech-dashboard.gif" alt="Lab Technician Dashboard GIF" width="800"/>
  </p>

Lab technicians get a clear, structured workflow:

### 🔬 Test Request List
- See all tests ordered by doctors  

### 📍 Update Lab Test Status
- Mark tests as *in progress* or *completed*  
- Upload or update test notes  

### 📄 Generate Lab Reports
- Reports automatically link to doctors & patients  
- Ensures accurate results flow through the system  

### 🎯 Why this helps
The lab works more efficiently with fewer interruptions and no manual communication gaps between doctors and technicians.


## 📅 Events & Internal Communication

The **Events** section allows admins to post important announcements that are visible to all staff members.  
This helps the clinic stay informed about holidays, meetings, maintenance schedules, and other internal updates without relying on external communication channels.

<p align="center">
  <img src="docs/events-section.gif" alt="Events Page GIF" width="800"/>
</p>

### ➕ Adding a New Event (Admin Only)

Admins can quickly create new announcements directly from their dashboard.

<p align="center">
  <img src="docs/admin-event.gif" alt="Admin Adding Event GIF" width="800"/>
</p>

Typical events include clinic holidays, doctor availability changes, staff meetings, equipment maintenance, and general announcements.

All staff members can view these updates in real time as part of their dashboard experience.



## ❗ Error Handling & User Experience Enhancements

### 🚫 Custom 404 / NoMatch Page
<p align="center">
  <img src="docs/404-page.gif" alt="Custom 404 Page" width="800"/>
</p>

If a user navigates to an unknown route, they are shown a clean fallback page instead of a blank screen.

### 🔐 Conditional Rendering
- Missing patient data shows *“Not Available”*  
- Prevents app crashes and enhances professionalism  

### ⚡ Responsive UI
- Works beautifully across laptops, tablets, and desktops  


## 🌍 Why These Features Matter

Collectively, these features:

- Reduce miscommunication inside the clinic  
- Improve workflow speed  
- Centralize operations  
- Provide transparency and traceability  
- Make onboarding new staff easier  
- Deliver a polished, professional user experience  

> **In short:**  
> This system helps clinics run like well-organized, modern healthcare centers.

## 🚀 Getting Started with the App

This repository contains **only the frontend** of the Clinic Management System.  
To use the app fully, you must connect it to the **backend API**, which handles authentication, roles, patients, appointments, lab tests, and more.

You can run the frontend in two ways:

1. **Locally with Node.js**  
2. **Using Docker (recommended)**

Because this project was originally developed with an **older Node.js version**, running it locally may require matching a compatible Node version.  
Docker automatically handles this and provides a clean, consistent environment — making it the recommended method.

### 🔧 Requirements

- Backend API running (local or remote)  
- API URL available (e.g., `http://localhost:3001` or cloud URL)  
- Frontend cloned from this repository  

## 🐳 Running the Frontend with Docker (Recommended)

This is the easiest and most reliable method, especially on systems where Node.js versions differ.

### ✅ Prerequisites (Docker method)

- **Docker** installed and running:
  - Docker Desktop (Windows / macOS) or
  - Docker Engine (Linux)
- **Git** (to clone the repository)
- Backend API reachable from inside the container (e.g. on your host machine or in the same Docker network)

This is the easiest and most reliable method, especially on systems where Node.js versions differ.


### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Clinic_Management_Frontend
cd Clinic_Management_Frontend
```

### 2️⃣ Create the `.env` File

Inside the project root:

```env
REACT_APP_API_URL=http://localhost:4000
```

Replace this URL with your backend's deployed address.

### 3️⃣ Build and Run the Docker Container

```bash
docker build -t clinic-frontend .
docker run -p 3000:3000 clinic-frontend
```

Your app will now be available at:

```
http://localhost:3000
```

## 💻 Running the Frontend Locally (Manual Method)

If you prefer running the app without Docker, ensure that your **Node version matches the one used during development** — older React scripts may break on newer Node versions.

### ✅ Prerequisites (Local Node.js method)

- **Node.js installed**  
  - Preferably a version close to what the project was originally developed with (e.g., **Node 14**)  
  - Newer Node versions may cause issues with older React scripts

- **npm** (comes with Node.js) or **yarn**

- **Git** (optional, for cloning the repository)

- **A running backend API** that the frontend can communicate with

> If you prefer running the app without Docker, make sure your Node version is compatible.


### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Set Backend API URL

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:3001
```

### 3️⃣ Start the Development Server

```bash
npm start
```

The app will launch at:

```
http://localhost:3000
```

Local hot-reloading will be active, so UI updates reflect immediately.

## ⚠️ Important Note

The frontend **will not function** without the backend running.  
Ensure that the backend API is started and accessible before using this app.

In the next section, we will cover **how to use the app**, including default login credentials and the workflow for each role.

## 🧭 How to Use the App

Once the frontend is running and connected to the backend, you can log in using the **pre-seeded accounts** that come with the backend database.  
These accounts are automatically created when the backend is initialized, allowing you to explore all the different dashboards and workflows without manually setting up users.

If you want to create a new personal account later, it must be created by an **Admin user** through the backend’s user management features.

### 🔐 Default Login Accounts (Seeded Data)

| Role               | Username          | Password   | Access Level Description |
|--------------------|-------------------|------------|--------------------------|
| **Admin**          | admin@email.com     | admin@123   | Full access to all dashboards, users, clinic data, and system management |
| **Doctor**         | doctor@email.com    | doctor@123  | Can view assigned patients, test results, appointments, and doctor tools |
| **Front Office**   | front@email.com     | front@123   | Can register patients, manage appointments, and handle reception workflows |
| **Lab Technician** | lab@email.com       | lab@123     | Can view test requests, update test statuses, and manage lab workflows |

> These are demo accounts intended for testing the system.  
> You can use them to walk through every dashboard and functionality.

## ▶️ Using the Application

After starting the frontend (locally or via Docker), visit:

```
http://localhost:3000
```

You will see the **Home page** with options to navigate through the application.

### 1️⃣ Log In

Click **Login** on the navbar and enter any of the default credentials.  
After successful authentication:

- The backend identifies your **role**
- You are redirected to your corresponding **dashboard**

### 2️⃣ Explore Your Role Dashboard

Each role provides different features:

- **Admin Dashboard**  
  Manage users, oversee clinic-wide activity, manage administrative tasks.

- **Doctor Dashboard**  
  View patients, appointments, lab results, and patient details.

- **Front Office Dashboard**  
  Register patients, manage appointments, handle incoming patient flow.

- **Lab Technician Dashboard**  
  View lab test requests, update statuses, upload results.

### 3️⃣ Navigate the App

Use the top navigation bar or dashboard buttons to access:

- Patients  
- Appointments  
- Lab Tests  
- Events  
- Role-specific tools  
- Settings / Logout  



