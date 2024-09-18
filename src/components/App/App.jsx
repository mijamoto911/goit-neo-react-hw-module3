import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import initialContacts from '../../contacts.json';
import css from './App.module.css';
import { useState } from 'react';
const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState('');

  const visibleName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleName} onDelete={setContacts} />
    </div>
  );
};

export default App;
