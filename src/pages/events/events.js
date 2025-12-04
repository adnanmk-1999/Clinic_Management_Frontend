import { useState, useEffect } from 'react';
import api from '../../helpers/axiosServer/api';
import Event from "./eventdetails"

function EventsPage() {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    api.get('/events') //gets data from api
      .then(response => {
        console.log('Promise fullfilled'); //if data recieved, output 
        console.log(response);             //display output (responce)
        setEvents(response.data); //save only 'data' in response to the state
      })
  }, []);



  return (
    <>
      <div className="home">
        <center><h1 className="heading">Community Programs</h1></center>
        <hr />
        <p className="pretty-text">Clinics play an important role not only in providing care but also in creating awareness, educating patients,
          and contributing to the wellbeing of the community. HealthTech CMS brings all clinic events together in one place, making it easier for
          patients, visitors, doctors, and staff to stay informed about the activities happening at the clinic.
          <br />
          Our events include health camps, medical awareness sessions, patient-education programs, donation drives, and community outreach initiatives.
          Each event is carefully planned to support people in leading healthier lives while strengthening the bond between the clinic and the community.
        </p>

        <center><h5 className="heading">EVENTS PHILOSOPHY</h5></center>
        <p className="pretty-text">We believe that healthcare does not end within the consultation room. A clinic should be a place where knowledge,
          awareness, and community progress grow together.
          <br />
          Our events help patients understand their health better, encourage early detection, support preventive care, and promote a proactive approach to wellbeing.
          Whether it’s a free health checkup camp or an awareness session, every activity is designed to educate and empower people.
        </p>

        <center><h5 className="heading">A BETTER WAY TO ENGAGE AND EDUCATE</h5></center>
        <p className="pretty-text">HealthTech CMS ensures that information about important events is always visible and easy to access. Patients no longer need to call
          the clinic or check notice boards; every event is listed beautifully online, complete with dates and details.
          <br />
          These events encourage health awareness, provide valuable information, reduce misinformation, and help early identification of symptoms. For clinics,
          it fosters trust, increases engagement, and builds a strong connection with the community.
        </p>

        <center><h5 className="heading">WHAT'S HAPPENNING</h5></center>
        <p className="pretty-text">Below you will find the schedule of ongoing and upcoming activities at the clinic. Each event is updated in real-time,
          so you always have access to accurate and latest information. Stay informed, participate actively, and be a part of our mission to create a healthier community.
        </p>
        <div>
          <div className="staffCards">
            {events.map(event =>
              <div key={event.id}>
                <Event details={event} />
              </div>
            )}
          </div>
        </div>

        <center><h5 className="heading">BUILDING A HEALTHIER FUTURE, TOGETHER</h5></center>
        <p className="pretty-text">Events play a key role in strengthening the relationship between healthcare providers and the people they serve. By participating in
          clinic programs, patients gain guidance, support, and confidence to lead healthier lives — and we are committed to supporting them every step of the way.
        </p>

      </div>

    </>
  );
};

export default EventsPage;