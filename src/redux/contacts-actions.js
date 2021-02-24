import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');
const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');
const deleteContactRequest = createAction('todos/deleteContactRequest');
const deleteContactSuccess = createAction('todos/deleteContactSuccess');
const deleteContactError = createAction('todos/deleteContactError');

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default {
  deleteContact,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
