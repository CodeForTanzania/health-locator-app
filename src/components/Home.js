import React, { Component } from 'react';
import NavigationBar from './Navbar';
import HealthScreen from './health/HealthScreen';
import Footer from './Footer';

/*
* Home component
*/
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <HealthScreen />
        <Footer />
      </div>
    );
  }
}