import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {

    state={
        query:"",
        newBooks:[]
    }

 

    searchBook=(event)=> {
        const { query } =event.target.value
        this.setState({query})
        if(query){
            BooksAPI.search(query.trim(),20).then(books=>{
                this.setState({newBooks:books})
            })
         } else{
            this.setState({newBooks:[]})
        }
    }
    render(){
        const { query, newBooks } = this.state;
        const { books, changeShelf } = this.props;
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                type="text" 
                placeholder="Search by title or author" 
                value={query}
                onChange={()=> this.searchBook}
                />
              </div>
            </div>
            <div className="search-books-results">
                { newBooks.length>0 &&(
                    <div>
                        <h4>Search returned {newBooks.length} books</h4>
                        <ol className="books-grid">
                        {newBooks.map(book=>(
                            <Book
                                book={book}
                                books={books}
                                key={book.id}
                                changeShelf={changeShelf}/>
                        ))}    
                     </ol>
                    </div>
                )

                }
            </div>
          </div>
        )
    }
}

export default SearchBook