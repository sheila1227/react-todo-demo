import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import './../css/App.css';

function App() {
  return (
    <div className="App-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
