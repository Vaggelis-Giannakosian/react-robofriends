import React from 'react'
import Header from "../Header";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundry from "../ErrorBoundry";
import CardList from "../CardList/CardList";

import './MainPage.css'

const MainPage = (props) => {

    return (
        <div className="tc">
            <Header/>
            <SearchBox searchChange={ props.searchChange }/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={ props.robots }/>
                </ErrorBoundry>
            </Scroll>
        </div>
    );
}


export default MainPage;