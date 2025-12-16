// src/main_game.tsx

import  { useState, useEffect, useRef } from 'react';
import Knight from './player';
import './maingame.css';

// --- Game Constants ---
const KNIGHT_WALK_SPEED = 4;
const GHOST_DISAPPEAR_TRIGGER_X = 600; // <<< --- NEW: The X-coordinate that triggers the ghosts to disappear

function MGame() {
  // --- Game State ---
  const [knightX, setKnightX] = useState(50);
  const [knightState, setKnightState] = useState<'idle' | 'walking' | 'attacking'>('idle');
  const [areGhostsVisible, setAreGhostsVisible] = useState(true); // <<< --- NEW: State to control ghost visibility
  const requestRef = useRef<number>(0);

  // --- Keyboard Input Logic (No changes needed here) ---
// --- NEW KEYBOARD INPUT LOGIC ---

useEffect(() => {
  // This function runs when a key is pressed DOWN
  const handleKeyDown = (event: KeyboardEvent) => {
    // --- CHANGE 1: Used a switch statement for better organization ---
    switch (event.key) {
      case 'a':
        // Only allow an attack if not already attacking
        if (knightState !== 'attacking') {
          setKnightState('attacking');
          // --- CHANGE 2: Added a reliable timer to reset the attack state ---
          // This is more robust than relying on onAnimationEnd.
          setTimeout(() => setKnightState('idle'), 400); // Duration matches CSS
        }
        break;
      case 'ArrowRight':
        // Only start walking if currently idle
        if (knightState === 'idle') {
          setKnightState('walking');
        }
        break;
      default:
        break;
    }
  };
  
  // This function runs when a key is RELEASED
  const handleKeyUp = (event: KeyboardEvent) => {
    // If we release the right arrow AND we are currently walking...
    if (event.key === 'ArrowRight' && knightState === 'walking') {
      // ...then stop walking and go back to idle.
      setKnightState('idle');
    }
  };

  // The attachment logic is the same
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);

  // The cleanup logic is the same
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
  };
}, [knightState]); // The dependency array is the same
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