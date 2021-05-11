import React from 'react';

function BBblockSmall({letter, number, mass, name}) {
    return (
        <div className="BB-block-small">
            <div className="Bnum2">{number}</div>
            <div className="Blet2">{letter}</div>
            <div className="Bnam2">{name}</div>

        </div>
    );
}

export default BBblockSmall;