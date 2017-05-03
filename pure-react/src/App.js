import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App-container'>
        <Header text='todos'/>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
