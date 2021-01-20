// import React from "react";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {connect} from 'react-redux'
import CardList from "../../components/CardList/CardList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Scroll from '../../components/Scroll/Scroll'
import ErrorBoundry from '../../components/ErrorBoundry'
import Header from '../../components/Header'
import './App.css'
import {setSearchField, requestRobots} from "../../actions";


/**
 * App Container With local state - function syntax
 * @param props
 */

// const App =  (props)  => {
//
//     const [robots, setRobots] = useState([])
//     const [searchField, setSearchField] = useState('')
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => setRobots(users));
//     }, [])
//
//     function onSearchChange({target: {value}}) {
//         setSearchField(value)
//     }
//
//     if (!robots.length) {
//         return (<h1>Loading...</h1>);
//     }
//
//     const filterRobots = robots.filter(robot => {
//         return robot.name.toLowerCase().includes(searchField.toLowerCase())
//     })
//
//     return (
//         <div className="tc">
//             <h1 className="f1">RoboFriends</h1>
//             <SearchBox searchChange={onSearchChange}/>
//             <Scroll>
//                 <ErrorBoundry>
//                     <CardList robots={filterRobots}/>
//                 </ErrorBoundry>
//             </Scroll>
//         </div>
//     );
// }


/**
 * App container with redux store - function syntax
 * @param state
 */

const App = () =>{

    const robosUsers = useSelector(state => state.requestRobots.robots)
    const isPending = useSelector(state => state.requestRobots.isPending)
    const text = useSelector(state => state.searchRobots.searchField)
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState(null);

    const onSearchChange = (e) => {
        dispatch(setSearchField(e.target.value))
    };

    useEffect(() =>  {
        dispatch(requestRobots());
    }, [dispatch])

    useEffect(() => {

        const filteredRobots = robosUsers.length ?
            robosUsers.filter(robot =>  robot.name.toLowerCase().includes(text.toLowerCase())) :
            [];

        setSearchResults(filteredRobots);
    }, [text,robosUsers])

    if ( isPending || !searchResults) {
        return (<h1>Loading...</h1>);
    }

    return(
        <div className="tc">
            <Header></Header>
            <SearchBox searchChange={ onSearchChange }/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={ searchResults }/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}
export default App;


/**
 * App container With redux store - class syntax
 * @param state
 */
// const mapStateToProps = state => ({
//     searchField: state.searchRobots.searchField,
//     robots: state.requestRobots.robots,
//     isPending: state.requestRobots.isPending,
//     error: state.requestRobots.error,
// })
//
// const mapDispatchToProps = dispatch => {
//     return {
//         onSearchChange: event => dispatch(setSearchField(event.target.value)),
//         onRequestRobots: () => dispatch(requestRobots())
//     }
// }
//
// class App extends React.Component {
//
//
//     componentWillMount = async () => {
//         // fetch('https://jsonplaceholder.typicode.com/users')
//         //     .then(response => response.json())
//         //     .then(users => this.setState({robots: users}));
//         this.props.onRequestRobots()
//     }
//
//     // onSearchChange = ({target: {value}}) => {
//     //     this.setState({
//     //         searchField: value
//     //     });
//     // }

//     filterRobots(robots, searchField) {
//         return robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchField.toLowerCase())
//         })
//     }
//
//     render() {
//
//         const {searchField,robots, isPending, onSearchChange} = this.props;
//
//         if ( isPending || !robots.length) {
//             return (<h1>Loading...</h1>);
//         }
//
//         const filteredRobots = this.filterRobots(robots, searchField);
//
//         return (
//             <div className="tc">
//                 <h1 className="f1">RoboFriends</h1>
//                 <SearchBox searchChange={onSearchChange}/>
//                 <Scroll>
//                     <ErrorBoundry>
//                         <CardList robots={filteredRobots}/>
//                     </ErrorBoundry>
//                 </Scroll>
//             </div>
//         );
//
//     }
//
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);