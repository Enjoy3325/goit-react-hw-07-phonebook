// import { chengeFilter } from 'redux/slice/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';

import { fetchContacts } from 'redux/operations';
import { ListContacts } from '../ListContacts/ListContacts';
import { Filter } from '../Filter/Filter';
import { ContactForm } from '../ContactForm/ContactForm';
import { useEffect } from 'react';
import { Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, status, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Wrapper>
      <div>
        <h1>Phonebook </h1>
        {isLoading === status && <h2>Loaging...</h2>}
        {error && <h2>An error occured {error}</h2>}
        <ContactForm />
      </div>

      <section>
        <div>
          <Filter />
          <h2>Contacts</h2>
          <ListContacts />
        </div>
      </section>
    </Wrapper>
  );
};
