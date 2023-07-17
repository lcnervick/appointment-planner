import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}  required />

      <label htmlFor="phone">Phone</label>
      <input id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required pattern="\d{3}-\d{3}-\d{4}" placeholder="###-###-####" />

      <label htmlFor="email">Email</label>
      <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} required />

      <button>Submit</button>
    </form>
  );
};

