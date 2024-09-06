import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "src/redux/contacts/operations.js";
import { selectError, selectIsLoading } from "src/redux/contacts/slice.js";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const errorMessage = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <div>Loading...</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <ContactList />
    </div>
  );
}

export default App;
