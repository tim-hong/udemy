import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeBook } from '../actions/index';

class BookDetail extends Component {
    render() {
        if(this.props.book)
            return (
                <div>
                    <h3>Details for: </h3>
                    <div>Title: {this.props.book.title}</div>
                    <div>Pages: {this.props.book.pages}</div>
                </div>
            );
        return (
            <div>Select a book to get started</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

//Promote Booklist from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps)(BookDetail);