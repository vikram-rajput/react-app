import React, { Component } from 'react';
import SearchInput from './component/searchInput';
import SearchResult from './component/searchResult';
import BookDetail from './component/bookDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       vikram 
       <SearchInput />
       <SearchResult />
       <BookDetail />
      </div>
    );
  }
}

export default App;
