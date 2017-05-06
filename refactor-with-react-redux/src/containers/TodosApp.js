import React from 'react';
import ActionBar from './ActionBar';
import ItemsList from './ItemsList';
import AddTodo from './AddTodo';
import Header from './../components/Header';
import Footer from './../components/Footer';

export default function () {
  return (
    <div className="App-container">
      <Header />
      <div className="Main-content">
        <AddTodo />
        <ItemsList />
        <ActionBar />
      </div>
      <Footer />
    </div>
  );
}
