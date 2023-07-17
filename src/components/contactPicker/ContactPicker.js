import React from "react";

const ContactPicker = ({contacts, setContact, contact}) => {
  return (
    <select name="contact" value={contact} onChange={e => setContact(e.target.value)} required>
      <option key="-1" value="">No Contact Selected</option>
        { contacts.map((contact,i) => <option key={i} value={contact.name}>{contact.name}</option>)}
      </select>
  );
};

export default ContactPicker;