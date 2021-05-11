import React from 'react';
import BBblockSmall from "./BBblockSmall";

function Tools(props) {
    return (
        <div className="innerrTools">
            <h2>Tools I'm Working With:</h2>

            <div className="smallHolder">
                <BBblockSmall letter="H" number="1" mass="30.973" name="Hydrogen"/>TML
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="Cs" number="55" mass="30.973" name="Caesium"/>S
            </div>
            <div className="smallHolder">
                SAS<BBblockSmall letter="S" number="16" mass="30.973" name="Sulphurus"/>
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="B" number="5" mass="30.973" name="Borom"/>
                ootStra<BBblockSmall letter="P" number="16" mass="30.973" name="Phosphous"/>
            </div>
            <div className="smallHolder">
                Ja<BBblockSmall letter="V" number="23" mass="30.973" name="Vanadium"/>
                aS<BBblockSmall letter="Cr" number="24" mass="30.973" name="Chromium"/>ipt
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="No" number="102" mass="30.973" name="Nobelium"/>de.Js
            </div>
            <div className="smallHolder">
                Re<BBblockSmall letter="Ac" number="89" mass="30.973" name="Actinium"/>t
            </div>
            <div className="smallHolder">
                Mong<BBblockSmall letter="O" number="8" mass="15.999" name="Oxygen"/>DB
            </div>
            <div className="smallHolder">
                G<BBblockSmall letter="I" number="53" mass="15.999" name="Iodine"/>t
            </div>


        </div>
    );
}

export default Tools;