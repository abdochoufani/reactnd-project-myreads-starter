import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBook from'./SearchBook'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
    this.setState({books})
    })
  }


  changeShelf=(changedBook,shelf)=> {
    BooksAPI.update(changedBook, shelf).then(r=>{
      changedBook.shelf=shelf
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    })
  }

  render() {
    const {books} =this.state
    return (
      <div className="app">
        <Route path ='/search' render={({history})=> ( 
        <SearchBook books={books} changeShelf={this.changeShelf} />
        )}
        />
         <Route path='/' exact render={()=> (
           <ListBooks books={books} changeShelf={this.changeShelf} />
         )}
         />
      </div>
    )
  }
}

export default BooksApp
