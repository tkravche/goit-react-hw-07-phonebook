import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledWrapper } from './App.styled';

import { fetchContactsThunk } from 'redux/operations';
import { selectError, selectLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      {loading && !error && <b>Request in progress...</b>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledWrapper>
  );
};
