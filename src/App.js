// There's no need to write React, {Component}. I can simply write class App extends React.Component and that will work just as well.
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor(){
		super();

		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({monsters: users}));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value});
	}

	// this render() method comes built in with React.Component
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
			)
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder='search monsters'
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
			);
		}
}
export default App;
