import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = props => {
    
    return <div className="card-list">
        {
            props.monsters.map(monster => ( /* card-list handles listing monsters/elements, from props not state */
                <Card key={monster.id} monster={monster} /> /* Card component gets the name from the props of Card */
            ))
        }
    </div>;

};