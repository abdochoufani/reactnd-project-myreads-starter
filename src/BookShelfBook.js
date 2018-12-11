import React, {Component} from 'react'
import Book from './Book'


class BookShelf extends Component {
    
    render(){
        const{books, changeShelf}=this.props
        return (
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
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
          </div>
        </div>
        )
    }
}



export default BookShelf