import React, {useState, useCallback} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import contactData from "./mocks/contacts.json";
import appointmentData from "./mocks/appointments.json";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState(contactData);
  const [appointments, setAppointments] = useState(appointmentData);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = useCallback(contact => {
    setContacts([...contacts.filter(c => c.name !== contact.name), contact]);
  }, [contacts]);

  const addAppointment = useCallback(appointment => {
    setAppointments([...appointments, appointment]);
  }, [appointments]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact}  /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
