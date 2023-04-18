import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/HomePage'
import TimePage from './components/TimePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/time" element={<TimePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    ); 
  }
}


export default App;
