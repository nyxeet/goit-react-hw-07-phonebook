import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts-operations';
import './ContactsList.css';

class TaskList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <ul className="TaskList">
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => this.props.onRemove(id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
const filterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = ({ state: { contacts, filter } }) => ({
  contacts: filterContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  onRemove: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
