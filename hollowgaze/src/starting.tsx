import React,{useState, useEffect} from 'react';
import './storyline.css';
import { useNavigate } from 'react-router-dom';

const storyline=[
    "There was a city where the people sought to transcend individuality.",
    " They wove their minds and bodies together through a luminous, psychic fungus, creating a single, harmonious superorganism.",
    " They were on the verge of becoming a god.",
    "To achieve the final stage, they needed a new sense—a single eye to perceive the universe as a unified whole.",
    " They reached out into the void, and something answered.",
    "The Hollow Gaze is a parasitic sense organ.",
    "It grafted itself onto the city's collective consciousness, becoming its one and only eye.",
    "It offered them the unity they craved, at a small price: their selves.",
    "The apotheosis was a success. The city is now a single being.",
    "A mountain of blissful, pulsating flesh and glowing mycelium, covering miles.",
    "It thinks with one mind, sees with thousands of eyes, and feels only a placid, perfect contentment.",
    "The people are all there, and they are all happy. And they want you to join them.",
    "Their gentle, psychic invitation is a constant, maddening hum.",
    "The entrance to the city is no longer physical.",
    "It is a psychic membrane. To pass through it, you must give the collective a thread to pull you in with.",
    "To forget a memory is to offer up a piece of your own mind, allowing the city to extrude a tendril of consciousness into your skull and guide you into the warmth of the fold."
];

function Starting() {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (currentLineIndex < storyline.length) {
            const timer = setTimeout(() => {
                setCurrentLineIndex(previndex => previndex + 1);
            }, 6000); // 4 seconds per line
            return () => clearTimeout(timer);
        } 
        else {
            // After the last line, navigate to the main game screen
            navigate('/game');
        }
    }, [currentLineIndex,navigate]);
    const SkipStoryline = () => {
        navigate('/game');
    }
    return ( 
        <div>   
        <div className="story-container">
            <p className="story-text">
                {storyline[currentLineIndex]}
            </p>
             
        </div>
        <div >
            <button className="skip-button-container" onClick={SkipStoryline}>Skip</button>
        </div>
       </div>
    );
}
export default Starting;