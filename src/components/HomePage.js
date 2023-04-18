import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Teacher from './Teacher'

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <Header />
        <Teacher id="1" name="Гук Никита Дмитриевич" subject="Физика"/>
      </div>
    );
  }
}


export default HomePage;