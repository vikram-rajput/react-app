import React, { Component } from 'react';

class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
      <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
      <div className="mt-5">Search Result (2 Record Found)</div>
      <hr />
      <ul className="list-unstyled result-list">
      <li className="media">
     <a  href=""> <img src="https://images.gr-assets.com/books/1474154022l/3.jpg" className="mr-3 list-thumb" alt="Harry Potter and the Sorcerer's Stone " /></a>
      <div className="media-body">
        <h5 className="mt-0"><a href="">Harry Potter and the Sorcerer's Stone</a></h5>
        <small>
        by J.K. Rowling
</small>
        </div>

      </li>
      <li className="media">
      <img src="https://images.gr-assets.com/books/1474154022l/3.jpg" className="mr-3 list-thumb" alt="Harry Potter and the Sorcerer's Stone " />
      <div className="media-body">
        <h5 className="mt-0">Harry Potter and the Sorcerer's Stone </h5>
        <small>
        by J.K. Rowling
</small>
         </div>

      </li>
      </ul>
      </div>
      </div>
      </div>
    );
  }
}

export default SearchResult;