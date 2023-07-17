import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  fetchContacts,
  updateFilter,
  postContact,
  removeContact,
} from 'slices/contactsSlice';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from './Contacts.module.css';
import Notiflix from 'notiflix';

export const Contacts = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = filter => {
    dispatch(updateFilter({ query: filter }));
  };

  const handleAddContact = () => {
    const contactExists = name => {
      return contacts.find(
        item => item.name.toUpperCase() === name.toUpperCase()
      );
    };
    if (!contactExists(name)) {
      dispatch(
        postContact({
          name,
          number,
        })
      );
    } else {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    }
  };

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm
        onAddContact={handleAddContact}
        onChangeName={value => setName(value)}
        onChangePhone={value => setNumber(value)}
      />

      <h2>Contacts</h2>

      <Filter contacts={contacts || []} onChangeFilter={handleFilter} />

      <ContactList
        filter={filter}
        contacts={contacts || []}
        onDelete={handleDeleteContact}
      />
    </div>
  );
};
