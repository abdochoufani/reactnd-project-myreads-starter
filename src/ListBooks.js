import React, { Component } from 'react'
import BookShelf from './BookShelfBook'
import { Link } from 'react-router-dom'



class ListBooks extends Component {

    state = { shelfChange: false }
    
    render(){
        const {books, changeShelf}=this.props
        const shelves=[
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }
        ]
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelves.map((shelf)=>{
                 const shelfBooks = books.filter(book=>
                    book.shelf===shelf.type);
                    return (
                        <div className="bookshelf" key={shelf.title}>
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                          <BookShelf books={shelfBooks} changeShelf={changeShelf} />
                        </div>
                      </div>  
                    )
              })}
            </div>
               
            <div className="open-search">
              <Link to="/search" className="open-search-btn">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks 