import React from 'react'
import {IRobot} from "../../containers/App/App";

const Card: React.FC<IRobot> = ({id, name, email}) => {

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default React.memo(Card);
