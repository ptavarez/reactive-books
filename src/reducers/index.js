import { combineReducers } from 'redux';
import BooksReducer from './reducer_book.js'

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
