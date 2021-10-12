import { Component } from 'react';
import './App.css';
import List from './components/List';

// import React,{component} form 'react'
export default class App extends Component {
  c = 'john'
  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}


