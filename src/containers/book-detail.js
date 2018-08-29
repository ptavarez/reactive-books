import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // Add a if state that checks if book is null. If so, return default text
    if(!this.props.book) {
      return (
        <div>Select A Book To Get Started!</div>
      )
    }
    return (
      <div>
        <h4>Book Details:</h4>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        {/*
          Add a h3 with 'Details for:' as the text, followed by a div that
          renders the book title, followed by another div that renders the book pages
          */}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    book: state.activeBook
  };
}
  

export default connect(mapStateToProps)(BookDetail)
