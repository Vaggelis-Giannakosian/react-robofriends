import React from "react";
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import './App.css'
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from '../../components/ErrorBoundry'


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
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = ({target: {value}}) => {
        this.setState({
            searchField: value
        });
    }

    filterRobots(robots, searchField){
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
    }

    render() {

        const {robots, searchField} = this.state

        if (!robots.length) {
            return (<h1>Loading...</h1>);
        }

        const filteredRobots = this.filterRobots(robots, searchField);

        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );

    }

}


export default App