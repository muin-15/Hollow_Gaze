// src/main_game.tsx

import  { useState, useEffect, useRef } from 'react';
import Knight from './player';
import './maingame.css';

// --- Game Constants ---
const KNIGHT_WALK_SPEED = 5;
const GHOST_DISAPPEAR_TRIGGER_X = 600; // <<< --- NEW: The X-coordinate that triggers the ghosts to disappear

function MGame() {
  // --- Game State ---
  const [knightX, setKnightX] = useState(100);
  const [knightState, setKnightState] = useState<'idle' | 'walking' | 'attacking'>('idle');
  const [areGhostsVisible, setAreGhostsVisible] = useState(true); // <<< --- NEW: State to control ghost visibility
  const requestRef = useRef<number>(0);

  // --- Keyboard Input Logic (No changes needed here) ---
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === 'a' && knightState !== 'attacking') {
        setKnightState('attacking');
        setTimeout(() => setKnightState('idle'), 400);
      }
      if (key === 'arrowright' && knightState === 'idle') {
        setKnightState('walking');
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'arrowright' && knightState === 'walking') {
        setKnightState('idle');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [knightState]);

  // --- Game Loop for Movement AND Game Events ---
  useEffect(() => {
    const gameLoop = () => {
      // --- MODIFIED: Check for game events inside the loop ---
      // If ghosts are currently visible AND the knight has passed the trigger point...
      if (areGhostsVisible && knightX > GHOST_DISAPPEAR_TRIGGER_X) {
        console.log("Knight reached the trigger! Ghosts are disappearing.");
        setAreGhostsVisible(false); // ...make them disappear.
      }

      // Handle knight movement
      if (knightState === 'walking') {
        setKnightX(prevX => prevX + KNIGHT_WALK_SPEED);
      }
      requestRef.current = requestAnimationFrame(gameLoop);
    };
    requestRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [knightState, knightX, areGhostsVisible]); // <<< --- MODIFIED: Add knightX and areGhostsVisible as dependencies

  return (
    <div className="maingame-container">
      
      <div className="blurry-background">
        <div className='upper-bg'></div>
        <div className='lower-bg'></div>
      </div>

      <div className="foreground">
        
        <div className='lower-front-bg'></div>
        
        {/* --- MODIFIED: The ghosts are now rendered conditionally --- */}
        {/* This block will render its contents ONLY if areGhostsVisible is true */}
        {areGhostsVisible && (
          <>
            <div className='Whiteghost1'></div>
            <div className='Whiteghost2'></div>
            <div className='Whiteghost3'></div>
          </>
        )}

        <div className="knight-container" style={{ left: `${knightX}px` }}>
          <Knight state={knightState} />
        </div>

        <div className="instructions">
            <p>Just go close to the Blanket ghost that they would disappear</p>
            <p>This is the initial level later more levels are to be added after the first ship</p>
        </div>
      </div>
    </div>
  );
}

export default MGame;