import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    ); 
  }
}


export default App;
