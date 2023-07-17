import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Title</label>
      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required />

      <label htmlFor="date">Date</label>
      <input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} min={getTodayString()} required />

      <label htmlFor="time">Time</label>
      <input id="time" type="time" value={time} onChange={e => setTime(e.target.value)} required />

      <label htmlFor="contact">Contact</label>
      <ContactPicker id="contact" contacts={contacts} setContact={setContact} contact={contact} />

      <button>Submit</button>
    </form>
  );
};
