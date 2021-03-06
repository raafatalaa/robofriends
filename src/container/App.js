import React ,{Component} from 'react'; 
import {robots} from '../components/Robots';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'; 
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [], 
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
  		.then(users => {this.setState({robots:users})});
	}

	onSearchChanges = (event) => {
		this.setState({searchfield : event.target.value});
	}

	

	render(){
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (this.state.robots.length === 0){
		return <h1>Loading</h1>
		} else {
		return (
			<div className= "tc" >
				<h1 className="f1">RoboFriends</h1>
				<SearchBox onSearchChanges={this.onSearchChanges}/>
				<Scroll>
					<ErrorBoundry>
						<CardsList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
	}
	
}
export default App;