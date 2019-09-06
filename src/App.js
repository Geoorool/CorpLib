import React, {Component} from 'react';
import BookList from './componets/BookList';
import Book from './componets/Book';
import Header from './componets/Header';
import {books} from './fixtures'

class MainContent extends Component{  
  render(){

    switch(this.props.router){
      case 'bookList':
        return(<BookList books = {books} updateData = {this.props.updateData}/>)
      case 'book':
        console.log(this.props.id)
        return(<Book book = {books[this.props.id]}/>)
      default:
        return(<>'Элемент не найден!'</>)
    }
  }
}

class App extends Component{  
  state = {
    router: 'bookList',
    id: 0
  };

  updateData = (value) => {
    this.setState({ 
      router: value.router,
      id: value.id
    })
  }

  render() {
    console.log(this.state.router);
          return (
        <>
          <Header updateData = {this.updateData}/>
          <MainContent updateData = {this.updateData} router = {this.state.router} id = {this.state.id}/>
        </>
    );
  }
}


export default App;
