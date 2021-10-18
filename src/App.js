import { useState } from "react";
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter"
import { v4 as uuidv4 } from "uuid";



const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
   
  const addContact = (task) => {
    const searchName = contacts
      .map((cont) => cont.name)
      .includes(task.name);

    if (searchName) {
      alert(`${task.name} is already in contacts`);
    } else if (task.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...task,
        id: uuidv4(),
      };
      setContacts(prevState => [...prevState, contact]);
    }
  };

  const changeFilter = (filter) => {
    setFilter({ filter });
  };

  const getVisibleContacts = () => {
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = (contactID) => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };
  const visibleContacts = getVisibleContacts();
  return (
    <div>
      <h1>Phonebook</h1>

      <Form onAddContact={addContact} />
      <h2>Contacts</h2>
        
      <Filter value={filter} onChangeFilter={changeFilter} />
  
      {visibleContacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </div>
  );
};


export default App;








