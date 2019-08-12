import React, { Component } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar';

import TodoItem from './components/TodoItem';
import {items} from './Items';

class App extends Component {
  // state = {
  //   items: [
  //     {
  //       id: 1,
  //       text: 'Buy grocery',
  //       done: true
  //     },
  //     {
  //       id: 2,
  //       text: 'Play guitar',
  //       done: false
  //     },
  //     {
  //       id: 3,
  //       text: 'Romantic dinner',
  //       done: false
  //     }
  //   ]
  // }
  state={
    items: items
  }

  onClick = (text) => {
    this.setState({items: this.state.items.map(item => {
      if(item.text === text) {
        item.done = !item.done
      }
      return item;
    }) });
  }

  // This is an optional field i have done if you wanted checkbox to see items are done or not. 
  // markDone = (id) => {
  //    this.setState({items: this.state.items.map(item => {
  //      if(item.id === id) {
  //        item.done = !item.done
  //      }
  //      return item;
  //    }) });
  // }

  render() {
    return (
    <div className="App">
      <div className="container">
      <Navbar/>
      <br/>
      <TodoItem 
        items={items} 
        onClick={this.onClick} 
        // markDone={this.markDone}
      />
      </div>
    </div>
  );
 }
}

export default App;
