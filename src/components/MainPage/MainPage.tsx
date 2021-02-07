import React from 'react'
import Header from "../Header";
import SearchBox, {ISearchCallback} from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundry from "../ErrorBoundry";
import CardList from "../CardList/CardList";

import './MainPage.css'
import {IRobot} from "../../containers/App/App";

interface IProps {
    searchChange: ISearchCallback,
    robots:  IRobot[]
}


const MainPage = (props : IProps) => {

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
