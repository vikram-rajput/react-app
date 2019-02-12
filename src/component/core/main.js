import React, { Component } from 'react';
import SearchInput from '../searchInput';
import SearchResult from '../searchResult';
import BookDetails from '../bookDetails';
class Main extends Component {
  render() {
    return (
      <main role="main" className="">
      <div className="hero">
      <SearchInput />
      </div>
      <div className="container">
      <SearchResult />
     
      </div>

      </main>
    );
  }
}
export default Main;