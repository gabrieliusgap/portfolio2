import React from 'react';

function BBblock({letter, number, mass, name}) {
    return (
        <div className="BB-block">
           <div className="Bnum">{number}</div>
            <div className="Blet">{letter}</div>
            <div className="Bnam">{name}</div>
            <div className="Bmas">{mass}</div>
        </div>
    );
}

export default BBblock;