import React, {Component} from 'react'
import Book from './Book'


class BookShelf extends Component {
    
    render(){
        const{books, changeShelf}=this.props
        return (
            <ol className="books-grid">
            {books.map(book=>(
              <li>
               <Book 
               book={book}
               books={books}
               key={book.id}
               changeShelf={changeShelf}/>
              </li>
            ))}
            </ol>
        )
    }
}



export default BookShelf