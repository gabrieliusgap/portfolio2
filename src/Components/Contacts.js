import React from 'react';
import BBblockSmall from "./BBblockSmall";
import { RiMessengerFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { SiViber } from "react-icons/si";
import { ImPhone } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { GoMention } from "react-icons/go";

function Contacts(props) {
    return (
        <div className="innerContacts">
            <h2>Contacts:</h2>
            <div className="smallHolder">
                Ema<BBblockSmall letter="I" number="53" mass="15.999" name="Iodine"/>l: gabrielius.gaponovas@gmail.com
                <div className="tarps" >   </div>
                {/*<i className="fas fa-at"></i>*/}
                <GoMention color="#11c601"/><div className="tarps" >   </div>
                <SiGmail color="#11c601"/>
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="P" number="15" mass="30.973" name="Phosphous"/>
                ho<BBblockSmall letter="N" number="7" mass="18.995" name="Nitrogen"/>e: +37067775201
                <div className="tarps" >   </div>
                {/*<i className="fas fa-phone-square-alt"></i>*/}
                <ImPhone color="#11c601"/>
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="F" number="9" mass="18.995" name="Flourine"/>
                aceBoo<BBblockSmall letter="K" number="19" mass="18.995" name="Potassium"/>: https://www.facebook.com/zhaltys
                <div className="tarps" >   </div>
                {/*<i className="fab fa-facebook"></i>*/}
                <div className="tarps" >   </div>
                {/*<i className="fab fa-facebook-messenger"></i>*/}
                <FaFacebookSquare color="#11c601"/><div className="tarps" >   </div>
                <RiMessengerFill color="#11c601"/>
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="V" number="23" mass="18.995" name="Vanadium"/>
                ib<BBblockSmall letter="Er" number="68" mass="18.995" name="Erbium"/>: +37067775201
                <div className="tarps" >   </div>
                {/*<i className="fab fa-viber"></i>*/}
                <SiViber color="#11c601"/>
            </div>
            <div className="smallHolder">
                <BBblockSmall letter="W" number="74" mass="183.64" name="Tungsten"/>
                hatsAp<BBblockSmall letter="P" number="15" mass="30.973" name="Phosphous"/>: +37067775201
                <div className="tarps" >   </div>
                {/*<i className="fab fa-whatsapp-square"></i>*/}
                <ImWhatsapp color="#11c601"/>
            </div>
        </div>

    );
}

export default Contacts;