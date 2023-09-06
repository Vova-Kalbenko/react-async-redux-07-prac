import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as bookOperations from './redux/bookOperations'
import booksSelectors from './redux/booksSelectors'
export const App = () => {

  const dispatch = useDispatch()
// const books = useSelector(state=> state.books.entities) i be3 Selektora
const books = useSelector(booksSelectors.getBooks)
  useEffect(()=>{
    dispatch(bookOperations.fetchBooks())
  },[dispatch])


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
