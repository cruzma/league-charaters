import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      champions: [],
    };
  }
  componentDidMount(){
    fetch('http://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(champion => this.setState({ champions: Object.values(champion.data) }))
  }
render(){ 
  return (
    <div>
      <h1>League Characters</h1>
      <CardList champions={this.state.champions}>
      </CardList> 

    </div>
  )}
 
}

export default App;
