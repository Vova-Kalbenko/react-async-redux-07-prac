import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as booksActions from './booksActions';
import * as BookshelfAPI from './BookshelfAPI';

// export const fetchBooks = () => async dispatch => {
//   // DELAEM ZAPROS V LUBOM SLY4AE
//   dispatch(booksActions.fetchBooksRequest());
// try {
//     const books = await BookshelfAPI.fetchBooks();
//     //   TOLKO ESLI VSE OK TO VIPOLNITSA ETOT KOD
//     dispatch(booksActions.fetchBooksSuccess(books));
// } catch (error) {
//     dispatch(booksActions.fetchBooksError(error))
// }
// };


// First, create the thunk
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const books = await BookshelfAPI.fetchBooks();
    return books
  })
// VERNET PAYLOAD.SUCCESS
// na thucke actioni dobavlyautsa avtomatom