import React from "react";
import {robots} from "./robots";
import CardList from "./CardList/CardList";
import SearchBox from "./SearchBox/SearchBox";
import './App.css'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = ({target: {value}}) => {
        this.setState({
            searchField: value
        });
    }

    render() {

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