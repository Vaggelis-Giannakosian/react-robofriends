import React from 'react';
import Card from '../card/Card'
import {IRobot} from "../../containers/App/App";


const CardList: React.FC<{ robots: IRobot[] }> = ({robots}) => {

    return (
        <>
            {
                robots.map((robot: IRobot) => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>)
            }
        </>
    );

}


export default CardList;
