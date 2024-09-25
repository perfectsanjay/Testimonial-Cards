import React, { Component } from 'react';
import { Card } from './component/cards/card.component';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  render() {
    return (
      <div><Card/> </div>
    )
  }
};


export default App;
