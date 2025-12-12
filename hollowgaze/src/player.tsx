// src/components/Knight.tsx

/*import React from 'react';*/
import './player.css'; 
import './maingame.css'// We'll create this next

interface KnightProps {
  state: 'idle' | 'walking' | 'attacking';
  onAttackComplete?: () => void; // Optional function to call when attack animation ends
}

function Knight({ state, onAttackComplete }: KnightProps) {
  return (

    <div 
      className={`knight ${state}`}
      onAnimationEnd={state === 'attacking' ? onAttackComplete : undefined}
    />
  );
}

export default Knight;