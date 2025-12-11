import {useState, useEffect} from 'react';
import './storyline.css';
import { useNavigate } from 'react-router-dom';

const storyline = [
    "They called it the City of Tomorrow. A monument to science and reason.",
    "Here, the brightest minds in the world gathered, led by one man: Dr. Aris Thorne.",
    "He promised humanity a future free from doubt, a world guided by pure logic.",
    "To achieve this, he sought to build a 'Nexus'—a machine that could unify all human thought into a single, perfect consciousness.",
    "Ignoring all warnings, he drew power from sources unknown, from dimensions that should have remained untouched.",
    "The Nexus activated for a single, deafening moment.",
    "There was no fire. No explosion. Only a wave of absolute silence.",
    "It did not unify thought. It shattered reality.",
    "The city is now a tomb, frozen in the echo of that moment.",
    "Its people are gone, but their regrets, their ambitions, and their fears still wander the streets as spectral energy.",
    "And at the center of it all, Dr. Thorne remains.",
    "His ambition was so great that his soul was burned into the fabric of the Nexus itself.",
    "He is the ghost in the machine, the warden of this silent prison.",
    "The walls of reality are thin here. Getting in was an accident.",
    "But the gate is now locked by the will of its master.",
    "To escape, you must find the Nexus and extinguish the soul that fuels it. The only way out is through the heart of the failure."
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