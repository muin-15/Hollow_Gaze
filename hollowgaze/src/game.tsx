/*import React from "react"*/
import './game.css';
function Game(){

    return (
        <div className="game-screen">
            <div className="character-container">
                 
            </div>
               <img className='user-image' src='user_image.gif' alt='Jozu'></img>
               <p className='user-info'>Jozu</p>

            <div className="Start-info">
                <div className='para-start'>
                    <p>You need to leave some of your memory points at each level to continue for next level</p>
                    <button className='start-button'>Start Game</button>
                </div>
            </div>
        </div>
    );
}
export default Game;