import { Component } from 'react';
import shortid from 'shortid';

import style from './App.module.css';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    contacts: [],
  };

  // nameInputId = shortid.generate();

  addContacts = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  formSubmitHendler = inputData => {
    this.addContacts(inputData.name);
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={style.container}>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <List contacts={contacts} />
      </div>
    );
  }
}

export default App;
