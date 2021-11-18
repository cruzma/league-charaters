import './App.css';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor(){
    super();
    this.state = {
      champions: [],
      searchField: ''
    };
  }
  componentDidMount(){
    fetch('http://ddragon.leagueoflegends.com/cdn/11.21.1/data/en_US/champion.json')
    .then(response => response.json())
    .then(champion => this.setState({ champions: Object.values(champion.data) }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render(){ 
    
    const { champions, searchField } = this.state;
    const filteredChampions = champions.filter(champion =>
      champion.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>League Characters</h1>
        <SearchBox placeholder='search champions' handleChange={this.handleChange} />
        <CardList champions={filteredChampions}>
        </CardList> 
       
      </div>
  )}
 
}

export default App;
