import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import TimeSlots from './TimeSlots';
import Form from './Form';


class App extends Component {
  constructor(props){
    super(props);
    
  }
  
   componentDidMount(){
   }
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route exact path='/' component={TimeSlots} />
        <Route path='/form' component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

export default (App);
