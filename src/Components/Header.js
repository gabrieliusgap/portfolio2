
import React from 'react';
import {Link} from "react-router-dom";
import BBblockSmall from "./BBblockSmall";
import BBblock from "./BBblock";

function Header() {
    return (
        <div className="toolbar">
            <div><img src="" alt=""/></div>
            <div><img src="https://www.pngkit.com/png/full/5-51836_nuevas-camisetas-de-breaking-bad-breaking-bad-vector.png" alt=""/></div>
            <div className="toolbarHolder">
                <Link to="/">
                    <div className="smallHolder">
                        H<BBblockSmall letter="O" number="8" mass="15.999" name="Oxygen"/>me
                    </div>
                </Link>
                <Link to="/about">
                    <div className="smallHolder">
                        Abo<BBblockSmall letter="U" number="92" mass="238.028" name="Uranium"/>t
                    </div>
                </Link>
                <Link to="/tools">
                    <div className="smallHolder">
                        Tool<BBblockSmall letter="S" number="16" mass="30.973" name="Sulphurus"/>
                    </div>
                    </Link>
                <Link to="/projects">
                    <div className="smallHolder">
                        <BBblockSmall letter="P" number="15" mass="30.973" name="Phosphous"/>rojects
                    </div>

                </Link>
                <Link to="/contacts">
                    <div className="smallHolder">
                        Con<BBblockSmall letter="Ta" number="73" mass="180.947" name="Tantalum"/>cts</div>

                </Link>
                <Link to="/safety">
                    <div className="smallHolder">
                        Sa<BBblockSmall letter="Fe" number="26" mass="180.947" name="Iron"/>ty</div>

                </Link>
            </div>




        </div>
    );
}

export default Header;

