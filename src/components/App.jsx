import { useState, useEffect } from 'react';
import ContactsList from '../components/ContactsList/ContactsList';
import ContactsEditor from '../components/ContactsEditor/ContactsEditor';
import { nanoid } from 'nanoid';
import Filter from '../components/Filter/Filter';
import Notiflix from 'notiflix';
const KEY = 'contacts';
const App = () => {
  // state = {
  //   contacts:[],
  //   // contacts: [
  //   //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //   //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //   //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //   //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   // ],

  //   filter:''
  // }
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem(KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(contacts));
  }, [contacts]);
  const addContact = ({ name, number }) => {
    const isAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return 1;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [contact, ...prevState]);
  };
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };
  const filterContacts = () => {
    const filtered = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered)
    );
    return visibleContacts;
  };
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactsEditor onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <h1 className="title">Contacts</h1>
      <ContactsList
        contacts={filterContacts()}
        onDelete={deleteContact}
        items={contacts}
      />
    </div>
  );
};

export default App;
