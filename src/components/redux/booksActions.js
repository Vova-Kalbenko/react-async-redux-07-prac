import { createAction } from "@reduxjs/toolkit";

// TYT PROSTO EKWENI
export const fetchBooksRequest = createAction('books/fetchBooksRequest')


export const fetchBooksSuccess = createAction('books/fetchBooksSuccess')


export const fetchBooksError = createAction('books/fetchBooksError')

