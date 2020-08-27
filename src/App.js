import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainCourse from './components/MainCourse/MainCourse';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainCourse></MainCourse>
    </div>
  );
}

export default App;
