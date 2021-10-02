import { Component } from 'react';
import shortid from 'shortid';

import style from './App.module.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  formSubmitHendler = inputData => {
    this.addContacts(inputData);
  };

  filterHendler = ({ target }) => {
    const { value } = target;

    this.setState({ filter: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = ({ target }) => {
    const { id } = target;
    this.setState(precState => ({
      contacts: precState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <div className={style.container}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.filterHendler} />
        <ContactList
          contacts={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
