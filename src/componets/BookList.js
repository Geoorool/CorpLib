import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import BookElement from './BookElement';

class BookList extends Component{
    render() {
        const books = this.props.books;
        return (
            
            <>
                <Grid container justify="center">
                    {books.map(book => (<BookElement updateData = {this.props.updateData} book = {book}/>))}
                </Grid>
            </>
        )
    }
}

export default BookList;

