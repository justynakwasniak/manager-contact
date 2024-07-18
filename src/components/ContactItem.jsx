import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <li>
      <p>
        {contact.name} - {contact.phone}
      </p>
    </li>
  );
};

export default ContactItem;
