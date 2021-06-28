import {React} from 'react';
import {Link} from "react-router-dom";
import BBblockSmall from "./BBblockSmall";

function Projects(props) {
    return (
        <div className="innerProjects">
            <h2>Projects:</h2>

            <div className="projectHolder">
                <a href="//github.com/gabrieliusgap/reactGame" >
                    <div className="reactGame" title="reactGame">

                        <img src="https://i.postimg.cc/0QxBVqY4/game-Screen-Shot.jpg" alt="reactGame"/>
                    </div>
                </a>
                <a href="//github.com/gabrieliusgap/chickenGame" >
                    <div className="chickenGame" title="chickenGame">
                        <img src="https://i.postimg.cc/XJmxTSd3/chicken-Game.jpg" alt="chickenGame"/>
                    </div>
                </a>
                <a href="//github.com/gabrieliusgap/shoppinglist" >
                    <div className="shoppingList" title="shoppingList">
                        <img src="https://i.postimg.cc/441Q69Fs/shopping-List.jpg" alt="shoppingList"/>
                    </div>
                </a>
                <a href="//github.com/gabrieliusgap/kartuves" >

                    <div className="hangMan" title="hangMan">
                        <img src="https://i.postimg.cc/yxq9BVd1/hang-Man-Game.jpg" alt="hangMan"/>
                    </div>
                </a>







            </div>
        </div>
    );
}

export default Projects;