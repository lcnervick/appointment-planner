import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

  const [name, setName] = useState('');
  useEffect(() => {
    if(contacts.some(contact => contact.name === name)) console.log("Duplicate name found");
  }, [name, contacts]);

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!contacts.some(contact => contact.name === name)) {
      addContact({name: name, phone: phone, email: email});
      setName('');
      setPhone('');
      setEmail('');
    }
    else console.log("Duplicate name found");

  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
