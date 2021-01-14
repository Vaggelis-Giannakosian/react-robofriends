import React from "react";
import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import './App.css'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount = async () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }


    onSearchChange = ({target: {value}}) => {
        this.setState({
            searchField: value
        });
    }

    render() {

        if( !  this.state.robots.length){
            return (<h1>Loading...</h1>);
        }

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }

}


export default App