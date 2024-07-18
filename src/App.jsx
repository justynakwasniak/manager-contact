import React, { useState } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContactForm from "./components/AddContactForm";
import Filter from "./components/Filter";

const App = () => {
  // Stan dla kontaktów i filtru
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  // Funkcja do dodawania kontaktów
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Funkcja do filtrowania kontaktów
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Header title="Contact Manager" />
      <AddContactForm addContact={addContact} />
      <Filter setFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
