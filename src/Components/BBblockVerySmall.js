import React from 'react';

function BBblockVerySmall({letter, number, mass, name}) {
    return (
        <div className="BB-block-very-small">
            <div className="Bnum3">{number}</div>
            <div className="Blet3">{letter}</div>
            <div className="Bnam3">{name}</div>

        </div>
    );
}

export default BBblockVerySmall;