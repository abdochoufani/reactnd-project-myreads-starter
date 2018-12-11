import React, { Component } from 'react'
import BookShelf from './BookShelfBook'
import { Link } from 'react-router-dom'



class ListBooks extends Component {
    shelves=['curently Reading','Read','Future Reads']
    render(){
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf shelves={this.shelves}/>
              </div>
            </div>
               
            <div className="open-search">
              <Link to="/search" className="open-search-btn">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks 