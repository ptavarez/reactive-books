import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index.js';
import { bindActionCreators } from 'redux';


class BookList extends Component{
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
const mapDispatchToProps = (dispatch) => {
  // Whenever selectBook us called, the result should be passed to all of the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to an container - it needs to know about
// this new dispatch method, selectBook. Make it avaliable as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
