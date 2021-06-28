import React from 'react';
import BBblock from "./BBblock";
import { AiFillPlayCircle } from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import ReactAudioPlayer from 'react-audio-player';
import {useRef} from "react"
import AudioFile from "../AudioFiles/breaking-bad-theme.mp3"


function StartPage() {
    var audio = new Audio("../AudioFiles/breaking-bad-theme.mp3")
    const element = useRef();

    // function Play(){
    //     console.log("play pressed")
    //     // element.current.play
    //
    // }

    console.log(element.current)
    return (
        <div className="col2">
            <div onClick={()=> audio.play() }>
                <AiFillPlayCircle color="#11c601">

                </AiFillPlayCircle>
                <ReactAudioPlayer ref={(element)}

                    src={AudioFile}




                />

            </div>

            <div className="startHolder">

            <div className="nineHolder">
                <div className="threeholder">
                    <div className="emptyR anim4">Ga</div>

                    <div className="animHolder">
                        <div id="BR" >
                            <BBblock letter="Br" number="35" mass="79.904" name="Bromine"/>
                        </div>

                    </div>
                    <div className="emptyR"> </div>
                    <div className="emptyL anim4">ielius</div>
                </div>

                <div className="threeholder">
                    <div className="animHolder">
                        <div id="GA">
                            <BBblock letter="Ga" number="31" mass="69.723" name="Galium"/>
                        </div>

                    </div>
                    <div className="emptyR"> </div>
                    <div className="emptyL anim4">ponovas</div>
                    <div className="emptyL"> </div>
                </div>

                <div className="threeholder">
                    <div className="emptyL"> </div>
                    <div className="animHolder">
                        <div id="CO">
                            <BBblock letter="Co" number="27" mass="58.933" name="Cobolt"/>
                        </div>

                    </div>
                    <div className="emptyL"> </div>
                    <div className="emptyL anim4">ding</div>
                </div>

            </div>
        </div><audio src="http://breakingbad.imarun.com/images/breaking-bad-theme.mp3" autoPlay="false"/>
        </div>
    );
}

export default StartPage;