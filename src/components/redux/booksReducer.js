import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import * as booksActions from './booksActions';
import { fetchBooks } from './bookOperations';
import { createSlice } from '@reduxjs/toolkit';

// 1 VARIANTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
// 3A ENTITIES OTVE4AET REDUCER ENTITIES

// const entities = createReducer([], {
//   [booksActions.fetchBooksSuccess]: (_, action) => action.payload,
// });

// // 3A isLoading OTVE4AET REDUCER isLoading
// const isLoading = createReducer(false, {
//   [booksActions.fetchBooksRequest]: () => true,
//   [booksActions.fetchBooksSuccess]: () => false,
//   [booksActions.fetchBooksError]: () => false,
// });
// const error = createReducer(null, {
//   [booksActions.fetchBooksError]: (_, action) => action.payload,
//   [booksActions.fetchBooksRequest]: () => null,
// });

// export default combineReducers({ entities, isLoading, error });

// I3BAVILIS` ON BOOKS.ACTIONS

// 2 VARIANTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
// const entities = createReducer([], {
//     [fetchBooks.fulfilled]: (_, action) => action.payload,
//   });

//   // 3A isLoading OTVE4AET REDUCER isLoading
//   const isLoading = createReducer(false, {
//     [fetchBooks.pending]: () => true,
//     [fetchBooks.fulfilled]: () => false,
//     [fetchBooks.rejected]: () => false,
//   });
//   const error = createReducer(null, {
//     [fetchBooks.rejected]: (_, action) => action.payload,
//     [fetchBooks.pending]: () => null,
//   });

//   export default combineReducers({ entities, isLoading, error });

// 3 VARIANTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
const booksSlice = createSlice({
  name: 'books',
  initialState: { entities: [], isLoading: false, error: null },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      return {
        ...state,
        entities: [...state.entities, action.payload],
      };
      // state.entities = action.payload
    },
    [fetchBooks.pending]:
      // state.isLoading = true
      state => {
        return {
          ...state,
          isLoading: true,
        };
      },
  },
});
export default booksSlice.reducer;
