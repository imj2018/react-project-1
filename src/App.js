/* 
 so function in App.js 
 then to index.js for the element to be replaced/inject i.e root in the index.html
 then to index.html in the public folder
 */


import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {

      monsters: [],
      searchField: '',

    };

    //this.handleChange = this.handleChange.bind(this); // bind returns a new function with the given context
  }

  //handleChange(e) {
  handleChange = e => { /* bind cannot be called on arrow functions, they automatically get lexical scoping
                         which binds to the place defined
                         
                         general rule is to use arrow functions when on class methods that are not part of 
                         React i.e componentDidMount and render */
    this.setState({ searchField: e.target.value });

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") /* fetch from the URL denote a promise */
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App ">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          //handleChange={e = this.setState({ searchField: e.target.value})}
          handleChange = {this.handleChange}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;
