/*import React from 'react';*/
import { useNavigate } from 'react-router-dom'
import './game.css';
function Game(){
    const navigate=useNavigate();// Navigate to the game level screen
    const go = () => {
        navigate('/maingame');
    };
    return (
        <div className='Gamepage'>
            <div className='Sign'>
                <p>The Start of End</p>
            </div>
        <div className="game-screen">
            
            <div className="character-container">
                 
            </div>
               <img className='user-image' src='user_image.gif' alt='Jozu'></img>
               <p className='user-info'>Jozu</p>

            <div className="Start-info">
                <div className='para-start'>
                    <p>You need to leave some of your memory points at each level to continue for next level</p>
                    <button className='start-button' onClick={go}>Start Game</button>
                    
                </div>
                <div className='instruction'>
                        <button>W</button>
                        <p> Press 'W' to walk forward cuz you can't go backward</p>
                        <button>A</button>
                        <p>press 'A' to fight</p>
                    </div>
            </div>
        </div>
        </div>
    );
}
export default Game;