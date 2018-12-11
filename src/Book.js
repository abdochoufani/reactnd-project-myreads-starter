import React, {Component} from 'react'
import ShelfChanger from './ShelfChanger'



class Book extends Component {
    render(){
        const { book, books, changeShelf } = this.props;
        const title = book.title

        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks})` }}></div>
             <ShelfChanger book={book} books={books} changeShelf={changeShelf}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        )
    }
}

export default Book