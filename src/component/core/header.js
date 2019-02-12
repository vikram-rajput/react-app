import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">BookFlix</a>
      </nav>
      </div>
    );
  }
}

export default Header;