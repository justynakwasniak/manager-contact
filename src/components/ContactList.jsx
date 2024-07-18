import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
