
import React from 'react';
import {Link} from "react-router-dom";
import BBblockSmall from "./BBblockSmall";
import BBblockVerySmall from "./BBblockVerySmall";

function Footer() {
    return (
        <div className="toolbar footer">

            <div className="footerHolder">
                <Link to="/contacts">
                    <div className="smallHolder smaller">
                        <div className="smallHolder">
                            I<BBblockVerySmall letter="F" number="9" mass="18.995" name="Flourine"/>
                        </div>
                        <div className="tarps" >   </div>
                        <div className="smallHolder">
                            <BBblockVerySmall letter="Y" number="39" mass="18.995" name="Yttrium"/>ou
                        </div>
                        <div className="tarps" >   </div>
                        <div className="smallHolder">
                            Wa<BBblockVerySmall letter="N" number="7" mass="18.995" name="Nitrogen"/>t
                        </div>
                        <div className="tarps" >   </div>
                        <div className="smallHolder">
                            Yo<BBblockVerySmall letter="U" number="92" mass="238.028" name="Uranium"/>r
                        </div>
                        <div  className="tarps" >   </div>
                        <div className="smallHolder">
                            Ap<BBblockVerySmall letter="P" number="16" mass="30.973" name="Phosphous"/>
                        </div>
                        <div className="tarps" >   </div>
                        <div className="smallHolder">
                            <BBblockVerySmall letter="O" number="8" mass="15.999" name="Oxygen"/>r
                        </div>
                        <div className="tarps" >   </div>
                        <div className="smallHolder">
                            Web<BBblockVerySmall letter="S" number="16" mass="30.973" name="Sulphurus"/>ite
                        </div>
                        <div className="tarps" >   </div>
                        <div className="smallHolder">
                            Do<BBblockVerySmall letter="N" number="7" mass="18.995" name="Nitrogen"/>e,
                        </div>
                        <div  className="tarps" >   </div>
                        <div className="smallHolder">
                            Ju<BBblockVerySmall letter="S" number="16" mass="30.973" name="Sulphurus"/>t
                        </div>
                        <div  className="tarps" >   </div>
                        <div className="smallHolder">
                            Conta<BBblockVerySmall letter="C" number="6" mass="30.973" name="Carbon"/>t
                        </div>
                        <div  className="tarps" >   </div>
                        <div className="smallHolder">
                            Me
                        </div>


                    </div>
                </Link>


            </div>




        </div>
    );
}

export default Footer;

