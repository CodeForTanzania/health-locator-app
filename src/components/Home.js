import React, { Component } from 'react';
import NavigationBar from './Navbar';
import Footer from './Footer';

/*
* Home component
*/
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Footer />
      </div>
    );
  }
}