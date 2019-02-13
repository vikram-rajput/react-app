import React, { Component } from 'react';

import '../stylesheet/App.css';
import Header from '../component/core/header';
import Main from '../component/core/main';
import Footer from '../component/core/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;
