import { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Notiflix from "notiflix";
import css from "./phonebook.module.css";

export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  onAddNewContact = (item) => {
    if (this.state.contacts.find(({ name }) => name.toLowerCase() === item.name.toLowerCase())) {
      Notiflix.Notify.warning(`${item.name} is already in contacts`)
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, item]
      }))
    }
  };

  onDeleteContact = (deletedId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deletedId)
    }))
  };

  onFilterChange = (value) => {
    this.setState({ filter: value })
  }

  filteredContacts = () => !this.state.filter ?
    this.state.contacts.filter((el, index) => index <= 9)
    :
    this.state.contacts.filter(
      ({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase())
    );


  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={[css.phonebookMainTittle, css.phonebookTittle]}>Phonebook</h1>
        <ContactForm onAddNewContact={this.onAddNewContact} />
        <h2 className={css.phonebookTitle}>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList filteredContacts={this.filteredContacts} onDeleteContact={this.onDeleteContact} />
      </div>
    )
  };
};